import { z } from "zod";

export const quoteFormSchema = z.object({
  // Contact details
  fullName: z.string().min(2, "Full name is required (minimum 2 characters)"),
  businessName: z.string().min(2, "Company / Business legal name is required"),
  role: z.string().min(2, "Your role / designation is required (e.g. Procurement Manager, Owner)"),
  email: z.string().email("Please enter a valid commercial email address"),
  phone: z.string().min(8, "Valid phone or WhatsApp number is required (with country code)"),

  // Business context
  businessType: z.enum([
    "Retailer / Supermarket",
    "Specialty Cafe / Eatery",
    "Gym / Fitness / Pilates",
    "Salon / Spa / Aesthetic Clinic",
    "Hotel / Hospitality / Minibar",
    "Corporate Gifting",
    "Beverage Distributor / Wholesaler",
    "Other Commercial Buyer",
  ]),
  expectedMonthlyVolume: z.string().min(1, "Please select anticipated volume"),
  deliveryLocation: z.string().min(2, "City, State / Region, and Country are required"),
  taxIdOrGst: z.string().optional(),
  notes: z.string().optional(),
  requestSamples: z.boolean().default(false),

  // Honeypot field (anti-spam, must remain empty)
  websiteUrlHp: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

