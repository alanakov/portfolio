type CardTechnologyProps = {
  name: string;
  percent: number;
  image: string;
};

export default function CardTechnology({ name, percent, image }: CardTechnologyProps) {
  const radius = 40;
  const stroke = 6;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="w-[120px] h-[170px] bg-backgroundSecondary rounded-sm flex flex-col items-center justify-center shadow-md mt-8">
      <span className="text-white mb-2 font-medium">{name}</span>
      <div className="relative w-[90px] h-[90px] ">
        <svg height={90} width={90}>
          <circle
            stroke="#333"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={45}
            cy={45}
          />
          <circle
            className="stroke-bluePrimary"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset, transition: "stroke-dashoffset 0.5s" }}
            r={normalizedRadius}
            cx={45}
            cy={45}
          />
        </svg>
        <img
          src={image}
          alt={name}
          className="absolute top-[15px] left-[15px] w-[60px] h-[60px] object-contain bg-backgroundSecondary rounded-full"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://via.placeholder.com/60x60?text=" + name;
          }}
        />
      </div>
      <span className="text-bluePrimary font-medium mt-2">{percent}%</span>
    </div>
  );
} 