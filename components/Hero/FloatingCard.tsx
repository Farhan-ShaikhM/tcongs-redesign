type FloatingCardProps = {
  title: string;
  subtitle: string;
  icon: string;
  className?: string;
};

export default function FloatingCard({
  title,
  subtitle,
  icon,
  className = "",
}: FloatingCardProps) {
  return (
    <div
      className={`absolute flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-rose-500/30 ${className}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-rose-500/10 text-2xl">
        {icon}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="text-sm text-zinc-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
}