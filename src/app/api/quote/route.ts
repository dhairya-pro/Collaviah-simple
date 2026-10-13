import { NextRequest, NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validations/quoteSchema";

// In-memory rate limiting map
const ipRateLimits = new Map<string, { count: number; expiresAt: number }>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "anonymous-ip";
    const now = Date.now();
    const windowMs = Number(process.env.RATE_LIMIT_WINDOW_MS) || 60000;
    const maxRequests = Number(process.env.RATE_LIMIT_MAX) || 8;

    // Rate limit check
    const rateRecord = ipRateLimits.get(ip);
    if (rateRecord && rateRecord.expiresAt > now) {
      if (rateRecord.count >= maxRequests) {
        return NextResponse.json(
          { error: "Too many quote requests. Please wait a minute or contact us directly on WhatsApp." },
          { status: 429 }
        );
      }
      rateRecord.count += 1;
    } else {
      ipRateLimits.set(ip, { count: 1, expiresAt: now + windowMs });
    }

    const body = await req.json();

    // Check honeypot anti-spam
    if (body.websiteUrlHp && body.websiteUrlHp.trim().length > 0) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    // Validate form inputs
    const validatedContact = quoteFormSchema.safeParse(body);
    if (!validatedContact.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          issues: validatedContact.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const { items, totalCartons, totalCans } = body;
    const quoteRef = `CLV-${Date.now().toString().slice(-6)}`;

    // Log the formal wholesale quote inquiry
    console.log(`[COLLAVIAH B2B Quote Received] Ref: ${quoteRef}`, {
      buyer: validatedContact.data.fullName,
      business: validatedContact.data.businessName,
      type: validatedContact.data.businessType,
      email: validatedContact.data.email,
      phone: validatedContact.data.phone,
      totalCartons,
      totalCans,
      items,
      requestSamples: validatedContact.data.requestSamples,
    });

    // Optional webhook push (Slack / CRM / Google Sheets)
    const webhookUrl = process.env.QUOTE_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            quoteRef,
            buyer: validatedContact.data,
            order: { items, totalCartons, totalCans },
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (webhookErr) {
        console.error("Webhook notification error:", webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      quoteRef,
      message: `Thank you, ${validatedContact.data.fullName}. Your wholesale quote request (#${quoteRef}) has been assigned to our commercial accounts desk.`,
    });
  } catch (error) {
    console.error("Error processing quote request:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again or reach out on WhatsApp." },
      { status: 500 }
    );
  }
}

