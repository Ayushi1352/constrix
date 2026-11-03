import type { CompanyData, ContactLinesSource } from "@/types/templates.types";

/** Fills "{key}" placeholders from templates.json, e.g. fill("Go to page {n}", { n: 2 }) */
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}

/** A card either carries its own `lines` or points at a company field ("phone", "email", "address") with `source`. */
export function contactLines(item: ContactLinesSource, company?: CompanyData): string[] {
  if (!item.source) return item.lines ?? [];
  const value = company?.[item.source as "phone" | "email" | "address"];
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

/** Map links for the company address ("{query}" in the URL templates). */
export function mapUrl(template: string, address: string[]) {
  return fill(template, { query: encodeURIComponent(address.join(" ")) });
}
