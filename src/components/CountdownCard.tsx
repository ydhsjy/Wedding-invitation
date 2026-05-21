type CountdownCardProps = {
  value: number;
  label: string;
};

export function CountdownCard({ value, label }: CountdownCardProps) {
  return (
    <div className="luxury-card grid aspect-square place-items-center rounded-lg p-3 text-center">
      <div>
        <strong className="block font-serif text-3xl font-semibold leading-none text-ink sm:text-4xl">
          {String(value).padStart(2, "0")}
        </strong>
        <span className="mt-2 block font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-clay">{label}</span>
      </div>
    </div>
  );
}
