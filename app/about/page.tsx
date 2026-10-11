import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] text-[#3b2921]">
      <header className="flex items-center justify-between px-8 py-5 border-b border-[#e5d9ce]">
        <Link href="/" className="text-2xl font-bold">
           Aromat Coffee
        </Link>
        <Link href="/" className="hover:text-[#9a6548]">
          На главную
        </Link>
      </header>

      <section className="max-w-4xl mx-auto px-8 py-20">
        <p className="text-sm uppercase tracking-[0.25em] text-[#9a6548]">
          Немного о нас
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
          Больше, чем просто кофе
        </h1>

        <div className="rounded-3xl bg-[#e8d7c8] p-8 md:p-12 mb-10">
          <p className="text-xl md:text-2xl leading-relaxed">
            Aromat Coffee — место, где утро начинается с аромата
            свежего кофе, а обычный день становится немного
            уютнее.
          </p>
        </div>

        <div className="space-y-6 text-[#6f5a4d] leading-7">
          <p>
            Мы верим, что самые приятные моменты состоят
            из простых вещей: любимого напитка, свежей
            выпечки и хорошей компании.
          </p>

          <p>
            Наша концепция — спокойная атмосфера,
            внимательное отношение к гостям и любовь
            к кофейной культуре.
          </p>

          <p>
            Заглядывай к нам за любимым латте,
            десертом или небольшим перерывом посреди дня.
          </p>
        </div>

        <Link
          href="/menu"
          className="inline-block mt-10 rounded-full bg-[#6b4434] text-white px-7 py-3 hover:bg-[#513328] transition"
        >
          Выбрать кофе и десерт
        </Link>
      </section>

      <footer className="bg-[#3b2921] text-white text-center px-6 py-8">
        Aromat Coffee · С любовью к кофе 
      </footer>
    </main>
  );
}
