import Image from "next/image";
import Link from "next/link";

const products = [
  { id: 1,  image: '/img/Service/1.jpeg', title: 'catering'},
  { id: 2,  image: '/img/Service/2.jpg', title: 'dekorasi pelaminan'},
  { id: 3,  image: '/img/Service/3.jpg', title: 'rias pengantin'},
  { id: 4,  image: '/img/Service/4.jpg', title: 'mc / pranotocoro'},
  { id: 5,  image: '/img/Service/5.jpg', title: 'hiburan'},
  { id: 6,  image: '/img/Service/testi1.jpg', title: 'foto'},
  { id: 7,  image: '/img/Service/7.jpeg', title: 'video shooting'},
  { id: 8,  image: '/img/Service/8.jpg', title: 'tratak'},
  { id: 9,  image: '/img/Service/9.jpg', title: 'plafon'},
  { id: 10, image: '/img/Service/10.jpg', title: 'alat pesta tradisional'},
  { id: 11, image: '/img/Service/11.jpeg', title: 'kipas angin'},
  { id: 12, image: '/img/Service/12.jpg', title: 'alat pesta stainless'},
];

export default function Service() {
  return (
    <main>
      {/* BAGIAN 1 */}
      <div className="bg-[var(--neutral-color)] h-[20vh] md:h-[30vh] flex flex-col items-center justify-center">
        <div className="h-[100%] w-[90%] md:w-[80%] flex flex-col items-center justify-center">
          <h1 className="text-[var(--highlight-color)] font-[family-name:var(--font-eb-garamond)] p-2 font-semibold text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
            Service
          </h1>
          <p className="md:mt-3 text-center font-normal text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              Kami menawarkan layanan mulai dari perencanaan konsep, dekorasi, katering, hingga koordinasi acara di hari pernikahan.
          </p>
        </div>
      </div>
      {/* BAGIAN 2 */}
      <div className="bg-[var(--neutral-color)] flex flex-col items-center justify-center">
        <div className="h-[100%] w-[90%] md:w-[80%] flex flex-col">
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mb-6 md:mb-16'>
          {products.map((product) => (
            <div key={product.id} className="flex flex-col rounded shadow-md bg-white">
              <div className="m-2 md:m-4 h-20 md:h-40 rounded text-white shadow-lg">
                  <Image
                      className="h-[100%] w-[100%] text-[var(--text-color)] text-xs rounded"
                      src={product.image}
                      alt={product.title}
                      width={640}
                      height={794}
                      priority
                  />
              </div>
              <div className="m-2 md:m-4 capitalize">
                  <h5 className="mb-2 font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl antialiased">
                      {product.title}
                  </h5>
              </div>
              <div className="m-2 md:m-4 mt-auto">
                  <Link href={product.title}>
                      <button data-ripple-light="true" type="button" className="font-normal text-xs sm:text-sm md:text-base px-2 py-1 md:px-4 md:py-2 text-[var(--neutral-color)] bg-[var(--highlight-color)] rounded shadow-md shadow-[var(--main-color)] transition-all hover:shadow-lg hover:shadow-[var(--main-color)] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
                          Selengkapnya
                      </button>
                  </Link>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>

    </main>
  );
}
