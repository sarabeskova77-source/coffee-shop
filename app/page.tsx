import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] text-[#3b2921]">
      <header className='flex items-center justify-between px-8 py-5 border-b border-[#e5d9ce]'>
        <h1 className='text-2xl font-bold'>
          Aromat Coffee
        </h1>
        <nav className="flex gap-6 text-sm">
          <a href="/"
          className="hover:text-[#9a6548]">
            Main
          </a>
          <a href="/menu"
          className="hover:text-[#9a6548]">
            Menu
          </a>
          <a href="/about"
          className="hover:text-[#9a6548]">
            About us
          </a>
          <a href="/contacts"
          className="hover:text-[#9a6548]">
            Contacts
          </a>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#9a6548] font-medium mb-4">
              Welcome to Aromat Coffee!
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-6">
              Кофе, которое
              <br />
              хочется повторить
            </h2>

            <p className="text-lg text-[#6f5a4d] mb-8 max-w-md">
              Уютная кофейня с ароматным кофе, свежей выпечкой
              и атмосферой, в которую хочется возвращаться.
            </p>

            <a
              href="/menu"
              className="inline-block bg-[#6b4434] text-white px-7 py-3 rounded-full
                         hover:bg-[#513328] transition">
              Посмотреть меню
            </a>
          </div>



        <div className="overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/images/13794.jpg"
            alt="Фасад кофейни Aroma"
            className="object-cover"
            width={1000}
            height={1000}
          />
        </div>
          
          
        </div>
      </section>

    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-[#9a6548]">
            Наше пространство
          </p>
          <h2 className="text-3xl font-bold mt-3">
            Маленькие радости каждый день
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <Link
            href="/menu#coffee"
            className="group overflow-hidden rounded-2xl bg-[#f7f3ee] shadow-sm hover:shadow-xl transition"
          >
            <Image
              src="/images/13797.jpg"
              alt="Кофейные напитки"
              className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
              width={500}
              height={500}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Качественный кофе →
              </h3>
              <p className="text-sm text-[#6f5a4d]">
                Латте, капучино и другие любимые напитки.
              </p>
              <p className="mt-4 text-sm font-semibold text-[#8b5e48]">
                Выбрать напиток
              </p>
            </div>
          </Link>

          <Link
            href="/menu#bakery"
            className="group overflow-hidden rounded-2xl bg-[#f7f3ee] shadow-sm hover:shadow-xl transition"
          >
            <img
              src="/images/13795.jpg"
              alt="Выпечка и десерты"
              className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Свежая выпечка →
              </h3>
              <p className="text-sm text-[#6f5a4d]">
                Круассаны, чизкейки и сладкие десерты.
              </p>
              <p className="mt-4 text-sm font-semibold text-[#8b5e48]">
                Выбрать десерт
              </p>
            </div>
          </Link>

          <Link
            href="/about"
            className="group overflow-hidden rounded-2xl bg-[#f7f3ee] shadow-sm hover:shadow-xl transition"
          >
            <img
              src="/images/13796.jpg"
              alt="Интерьер кофейни"
              className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Уютная атмосфера →
              </h3>
              <p className="text-sm text-[#6f5a4d]">
                Место, где можно замедлиться и отдохнуть.
              </p>
              <p className="mt-4 text-sm font-semibold text-[#8b5e48]">
                Познакомиться с нами
              </p>
            </div>
      </Link>

        </div>
      </div>
    </section>
    

      <footer className="bg-[#3b2921] text-white px-8 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row
                        justify-between gap-4">

          <p>Aromat Coffee</p>

          <p className="text-sm text-[#d8c5b9]">
            © 2026 Aromat Coffee. Все права защищены.
          </p>

        </div>
      </footer>
    </main>
  );
}
