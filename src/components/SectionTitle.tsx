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
        <p className={cn("font-sans text-xs font-semibold uppercase tracking-[0.21em] sm:text-[15px] lg:text-[8px]", light ? "text-gold" : "text-clay")}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("mt-3 font-script text-[57px] font-normal leading-none sm:text-[71px] lg:text-[36px]", light ? "text-ivory" : "text-ink")}>{title}</h2>
      {description ? (
        <p className={cn("mt-5 text-[15px] leading-[21px] sm:text-base sm:leading-6 lg:text-[8px] lg:leading-3", light ? "text-ivory/78" : "text-clay")}>{description}</p>
      ) : null}
    </div>
  );
}
