export function SectionDivider() {
  return (
    <section className="relative z-10 -mt-20 h-20 overflow-hidden bg-transparent sm:-mt-24 sm:h-24 lg:-mt-16 lg:h-16" aria-hidden="true">
      <svg className="absolute inset-x-0 bottom-0 h-full w-full" viewBox="0 0 640 120" preserveAspectRatio="none">
        <path
          d="M0 72 C96 22 190 22 304 64 C424 108 534 110 640 56 L640 120 L0 120 Z"
          className="fill-white"
        />
      </svg>
    </section>
  );
}
