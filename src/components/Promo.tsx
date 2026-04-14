import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/6e0eba1e-65bb-4bf8-83e3-2cef7e89df93/files/59464d3a-4bd7-4348-a842-29717d33df45.jpg"
            alt="Фестиваль на курорте МРИЯ"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <h3 id="vision" className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
        Видение 2030
      </h3>

      <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl z-10 leading-tight">
        К 2030 году МРИЯ становится точкой притяжения для лидеров бизнеса, культуры и спорта — курортом, где рождаются события мирового масштаба.
      </p>
    </div>
  );
}