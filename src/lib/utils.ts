import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWhatsAppMessage(params: {
  name: string;
  businessName: string;
  businessType: string;
  items: { packName: string; flavor: string; cartons: number; totalCans: number }[];
  totalCartons: number;
  totalCans: number;
  city?: string;
  notes?: string;
}): string {
  const lines = [
    `*COLLAVIAH Wholesale Quote Request*`,
    `----------------------------------`,
    `*Contact:* ${params.name}`,
    `*Business:* ${params.businessName} (${params.businessType || "Wholesale Buyer"})`,
    params.city ? `*Location:* ${params.city}` : "",
    ``,
    `*Selected Order Configuration:*`,
    ...params.items.map(
      (item) => `• ${item.packName} [${item.flavor}] — ${item.cartons} carton(s) = ${item.totalCans} cans`
    ),
    ``,
    `*Total Cartons:* ${params.totalCartons}`,
    `*Total Cans (250ml):* ${params.totalCans}`,
    params.notes ? `*Notes:* ${params.notes}` : "",
    ``,
    `Please provide commercial pricing, tier discounts, and freight lead time.`,
  ].filter(Boolean);

  return encodeURIComponent(lines.join("\n"));
}

