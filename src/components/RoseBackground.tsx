const fallingPetals = [
  "left-[12%] [animation-delay:0.8s] [animation-duration:16s]",
  "left-[21%] [animation-delay:7.2s] [animation-duration:18.5s]",
  "left-[31%] [animation-delay:4.4s] [animation-duration:18s]",
  "left-[43%] [animation-delay:9.1s] [animation-duration:17.5s]",
  "left-[52%] [animation-delay:2.2s] [animation-duration:17s]",
  "left-[64%] [animation-delay:5.6s] [animation-duration:19.5s]",
  "left-[73%] [animation-delay:6.1s] [animation-duration:19s]",
  "left-[80%] [animation-delay:10.4s] [animation-duration:16.8s]",
  "left-[88%] [animation-delay:3.5s] [animation-duration:20s]"
];

export function RoseBackground() {
  return (
    <div className="rose-background" aria-hidden="true">
      {fallingPetals.map((className, index) => (
        <span className={`blue-petal ${className}`} key={className}>
          <span className={index % 3 === 0 ? "scale-75" : index % 3 === 1 ? "scale-100" : "scale-90"} />
        </span>
      ))}
    </div>
  );
}
