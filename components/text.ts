/** Fills "{key}" placeholders from site.json, e.g. fill("https://maps?q={query}", { query: "Delhi" }) */
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}
