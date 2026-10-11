
import Link from "next/link";
import products from "./products";

export default function MenuPage() {
  const coffee = products.filter((item) => item.category === "Кофе");
  const bakery = products.filter((item) => item.category === "Выпечка");
  const desserts = products.filter((item) => item.category === "Десерты");

  function ProductCard({ item }) {
    return (
      <Link
        href={`/menu/${item.id}`}
        className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="h-64 overflow-hidden bg-[#eee3d7]">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#a47758]">
            {item.category}
          </p>

          <h3 className="text-xl font-semibold text-[#432c20]">
            {item.name}
          </h3>

          <p className="mt-2 min-h-12 text-sm leading-6 text-[#806d60]">
            {item.description}
          </p>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-lg font-bold text-[#432c20]">
              {item.price} ₽
            </span>

            <span className="rounded-full bg-[#593b2b] px-4 py-2 text-sm text-white transition group-hover:bg-[#81583f]">
              Подробнее →
            </span>
          </div>
        </div>
      </Link>
    );
  }

  function ProductSection({ title, subtitle, items }) {
    return (
      <section className="mb-16">
        <div className="mb-7">
          <h2 className="text-3xl font-semibold text-[#432c20]">
            {title}
          </h2>
          <p className="mt-2 text-[#806d60]">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f4ee] text-[#432c20]">
      <header className="border-b border-[#e8ddd1] bg-[#fffdf9]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold tracking-wide">
            Cozy Cafe Corner
          </Link>

          <Link
            href="/"
            className="rounded-full border border-[#593b2b] px-5 py-2 text-sm transition hover:bg-[#593b2b] hover:text-white"
          >
            На главную
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#a47758]">
            Вкус маленьких радостей
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Наше меню
          </h1>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#806d60]">
            Ароматный кофе, свежая выпечка и десерты,
            которые делают каждый день немного уютнее.
          </p>
        </div>

        <ProductSection
          title="Кофейная классика"
          subtitle="Напитки, приготовленные с любовью"
          items={coffee}
        />

        <ProductSection
          title="Свежая выпечка"
          subtitle="Идеальное дополнение к чашке кофе"
          items={bakery}
        />

        <ProductSection
          title="Десерты"
          subtitle="Немного сладости для хорошего настроения"
          items={desserts}
        />
      </div>

      <footer className="bg-[#432c20] px-6 py-8 text-center text-sm text-[#f8eee4]">
        © 2026 Cozy Cafe Corner · Сделано с любовью к кофе
      </footer>
    </main>
  );
}
