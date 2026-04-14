export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Woman on horse in countryside"
          className="w-full h-full object-cover"
        />
      </div>
      <div id="strategy" className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Стратегическое направление</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Мы превращаем МРИЮ в магнит для знаковых событий — международных конференций, гастрономических фестивалей, спортивных турниров и культурных форумов.
        </p>
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 uppercase text-xs tracking-widest pt-1">01</span>
            <p className="text-neutral-700 text-base leading-relaxed">50+ ежегодных событий к 2027 году</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 uppercase text-xs tracking-widest pt-1">02</span>
            <p className="text-neutral-700 text-base leading-relaxed">250 000 гостей событийного туризма к 2030 году</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 uppercase text-xs tracking-widest pt-1">03</span>
            <p className="text-neutral-700 text-base leading-relaxed">Топ-3 событийных курортов России</p>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Читать стратегию
        </button>
      </div>
    </div>
  );
}