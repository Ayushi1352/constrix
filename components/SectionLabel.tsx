// Small uppercase label with an orange line on each side (home page sections).
export function LineLabel({
  children,
  align = "center",
  tone = "dark",
  className = "",
}: {
  children: React.ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light" | "orange";
  className?: string;
}) {
  const color = tone === "light" ? "text-white" : tone === "orange" ? "text-flame font-bold" : "text-coal";
  return (
    <p
      className={`flex items-center gap-14 font-main text-[0.8125rem] font-medium tracking-[0.3em] uppercase xl:gap-20 xl:text-[1.0625rem] ${align === "center" ? "justify-center" : ""} ${color} ${className}`}
    >
      <span className="h-2 w-30 shrink-0 bg-copper xl:w-46" />
      <span>{children}</span>
      {align === "center" && <span className="h-2 w-30 shrink-0 bg-copper xl:w-46" />}
    </p>
  );
}

// Orange label with a vertical bar on the left (inner pages).
export function BarLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`flex items-center gap-12 font-main text-[0.9375rem] xl:text-[1.3125rem] leading-24 font-semibold text-tangerine uppercase xl:gap-18 ${className}`}
    >
      <span className="h-18 w-3 shrink-0 bg-tangerine xl:h-25" />
      {children}
    </p>
  );
}
