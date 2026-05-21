import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
};

export function SectionTitle({ eyebrow, title, description, align = "center", light }: SectionTitleProps) {
  return (
    <div className={cn("mx-auto max-w-2xl", align === "center" ? "text-center" : "text-left")}>
      {eyebrow ? (
        <p className={cn("font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em]", light ? "text-gold" : "text-clay")}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("mt-3 font-script text-6xl leading-none sm:text-7xl", light ? "text-ivory" : "text-ink")}>{title}</h2>
      {description ? (
        <p className={cn("mt-5 text-lg leading-8 sm:text-xl", light ? "text-ivory/78" : "text-clay")}>{description}</p>
      ) : null}
    </div>
  );
}
