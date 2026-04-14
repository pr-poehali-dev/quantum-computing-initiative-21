import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/6e0eba1e-65bb-4bf8-83e3-2cef7e89df93/files/175586c8-f905-46b8-95d8-d411f8481af1.jpg"
          alt="Курорт МРИЯ с высоты птичьего полёта"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40 z-[1]" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] mb-6 opacity-80">Курорт МРИЯ · Крым</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          СОБЫТИЙНЫЙ<br/>ТУРИЗМ<br/>2030
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Стратегия развития курорта МРИЯ как ведущей событийной площадки<br className="hidden md:block"/> юга России к 2030 году
        </p>
      </div>
    </div>
  );
}