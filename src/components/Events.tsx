const events = [
  {
    number: "01",
    title: "Бизнес-форумы",
    description:
      "Международные конференции, саммиты и деловые встречи в оснащённых конференц-залах с видом на море. Площадка для лидеров отраслей.",
    capacity: "до 1 200 гостей",
    image:
      "https://cdn.poehali.dev/projects/6e0eba1e-65bb-4bf8-83e3-2cef7e89df93/files/a6482021-bd43-4b3b-9265-927490b7660c.jpg",
  },
  {
    number: "02",
    title: "Культурные фестивали",
    description:
      "Музыкальные, гастрономические и арт-фестивали под открытым небом. Уникальная атмосфера на берегу Чёрного моря привлекает тысячи гостей.",
    capacity: "до 5 000 гостей",
    image:
      "https://cdn.poehali.dev/projects/6e0eba1e-65bb-4bf8-83e3-2cef7e89df93/files/59464d3a-4bd7-4348-a842-29717d33df45.jpg",
  },
  {
    number: "03",
    title: "Премиальные церемонии",
    description:
      "Гала-ужины, церемонии награждения, корпоративные события и свадьбы мирового уровня. Безупречный сервис и исключительные локации.",
    capacity: "до 800 гостей",
    image:
      "https://cdn.poehali.dev/projects/6e0eba1e-65bb-4bf8-83e3-2cef7e89df93/files/2b26be98-a782-482d-a8a1-893910f33dad.jpg",
  },
];

export default function Events() {
  return (
    <div id="events" className="bg-neutral-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-4">
          <div>
            <p className="uppercase text-neutral-500 text-xs tracking-[0.4em] mb-4">
              Форматы событий
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              ЧТО МЫ<br />СОЗДАЁМ
            </h2>
          </div>
          <p className="text-neutral-400 text-base md:text-lg max-w-sm leading-relaxed">
            Три ключевых направления событийного туризма, которые МРИЯ развивает к 2030 году
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-800">
          {events.map((event) => (
            <div
              key={event.number}
              className="bg-neutral-950 group cursor-pointer overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-neutral-600 text-xs tracking-widest uppercase">
                    {event.number}
                  </span>
                  <span className="text-neutral-500 text-xs uppercase tracking-wide">
                    {event.capacity}
                  </span>
                </div>
                <h3 className="text-white text-2xl font-bold mb-3 tracking-tight">
                  {event.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-neutral-800 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex gap-12 md:gap-20">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white">50+</p>
              <p className="text-neutral-500 text-sm mt-1 uppercase tracking-wide">событий в год к 2027</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white">250K</p>
              <p className="text-neutral-500 text-sm mt-1 uppercase tracking-wide">гостей к 2030</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white">ТОП‑3</p>
              <p className="text-neutral-500 text-sm mt-1 uppercase tracking-wide">курортов России</p>
            </div>
          </div>
          <button className="border border-neutral-700 text-white px-6 py-3 text-sm uppercase tracking-wide hover:border-white transition-colors duration-300">
            Стать партнёром
          </button>
        </div>
      </div>
    </div>
  );
}
