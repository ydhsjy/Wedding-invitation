type CountdownCardProps = {
  value: number;
  label: string;
};

export function CountdownCard({ value, label }: CountdownCardProps) {
  return (
    <div className="luxury-card grid aspect-square place-items-center rounded-lg p-3 text-center">
      <div>
        <strong className="block font-serif text-[25px] font-semibold leading-none text-ink sm:text-[32px] lg:text-[16px]">
          {String(value).padStart(2, "0")}
        </strong>
        <span className="mt-2 block font-countdown text-[11px] font-normal leading-[1.5] tracking-[-0.04em] text-clay sm:text-lg lg:text-[9px]">{label}</span>
      </div>
    </div>
  );
}
