
import Link from "next/link";
import products from "../products";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8f4ee] text-[#432c20]">
      <header className="border-b border-[#e8ddd1] bg-[#fffdf9]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold">
            Cozy Cafe Corner
          </Link>

          <Link
            href="/menu"
            className="text-sm text-[#806d60] transition hover:text-[#432c20]"
          >
            Всё меню
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <Link
          href="/menu"
          className="mb-8 inline-block text-sm text-[#8b654a] hover:underline"
        >
          ← Назад в меню
        </Link>

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="overflow-hidden rounded-3xl bg-[#eee3d7] shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="h-[380px] w-full object-cover md:h-[520px]"
            />
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#a47758]">
              {product.category}
            </p>

            <h1 className="text-4xl font-bold md:text-5xl">
              {product.name}
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#806d60]">
              {product.description}
            </p>

            <div className="my-8 border-t border-[#e3d5c7]" />

            <h2 className="text-xl font-semibold">Состав</h2>

            <p className="mt-3 leading-7 text-[#806d60]">
              {product.ingredients}
            </p>

            <p className="mt-8 text-3xl font-bold">
              {product.price} ₽
            </p>

            <Link
              href="/menu"
              className="mt-8 inline-block rounded-full bg-[#593b2b] px-8 py-4 text-white transition hover:bg-[#81583f]"
            >
              ← Назад в меню
            </Link>
          </div>
        </div>
      </div>

      <footer className="bg-[#432c20] px-6 py-8 text-center text-sm text-[#f8eee4]">
        © 2026 Cozy Cafe Corner · Ждём вас в гости
      </footer>
    </main>
  );
}
