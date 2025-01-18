import Image from "next/image";

const servicelist = [
  { id: 1,  text: 'Segala Macam Pesta'},
  { id: 2,  text: 'Paket Pernikahan'},
  { id: 3,  text: 'Prasmanan'},
  { id: 4,  text: 'Racikan'},
  { id: 5,  text: 'Nasi Dos / Syukuran'},
  { id: 6,  text: 'Dekorasi'},
  { id: 7,  text: 'Aneka Gubuk'},
];
const menulist = [
  { id: 1,  title: 'Prasmanan Premium',   price: 'Rp.45000,-', lists: 
    [
      "Nasi Putih 60%", 
      "Nasi Goreng 40%", 
      "Sup Asparagus/Sup Ceker Spesial", 
      "Daging Lada Hitam", 
      "Ragi Paru/Gurame Asam Manis", 
      "Balado Udang",
      "Sate Ayam @2 Tusuk",
      "Brokoli Seafood Spesial",
      "Salad Sayur/Salad Buah",
      "Kerupuk Udang",
      "Ice Cream",
      "Puding Fla",
      "Cokelat Fountain + Fresh Fruit",
      "Aneka Jus (50%)",
      "Softdrink, Es Sirup",
      "Teh, Air Mineral"
    ]
  },
  { id: 2,  title: 'Prasmanan A',         price: 'Rp.25000,-', lists: 
    [
      "Snack 2 Macam",
      "Nasi Putih",
      "Sup Sosis, Ayam, Bakso, Makaroni",
      "Sambal Goreng Kombinasi",
      "Oseng Sosis Kombinasi",
      "Bistik Galantin, Filet Tepung, Rolade",
      "Bihun Goreng",
      "Kerupuk Udang",
      "Soft Drink, Teh Sirup, Es Sirup, Air Mineral, Ice Cream"
    ]
  },
  { id: 3,  title: 'Prasmanan B',         price: 'Rp.30000,-', lists: 
    [
      "Snack 2 Macam",
      "Nasi Putih",
      "Sup Sosis Rolade",
      "Sambal Goreng Kombinasi/Sosis Kombinasi Cabe Hijau",
      "Ayam Kecap Mentega/Bistik Galantin",
      "So'un Saus Tiram Pedas/Mie Spesial",
      "Acar",
      "Kerupuk Udang",
      "Buah Iris",
      "Ice Cream + Puding",
      "Soft Drink, Teh Sirup, Es Sirup, Air Mineral"
    ]
  },
  { id: 4,  title: 'Prasmanan C',         price: 'Rp.32000,-', lists: 
    [
      "Snack 2 Macam",
      "Nasi Putih",
      "Sup Campur Sari/Sup Timlo",
      "Sambal Goreng Kreni Krecek/Daging Kombinasi Cabe Hijau",
      "Udang Goreng Tepung",
      "Ragi Ayam/Sate Ayam @2 Tusuk",
      "Capcay Bakso",
      "Trancam/Salad Buah",
      "Kerupuk Udang",
      "Buah Iris",
      "Ice Cream + Puding",
      "Soft Drink, Teh Sirup, Es Sirup, Air Mineral"
    ]
  },
  { id: 5,  title: 'Prasmanan D',         price: 'Rp.35000,-', lists: 
    [
      "Snack 2 Macam",
      "Nasi Putih",
      "Sup Cream Jagung/Sup Kembang Waru",
      "Daging Bumbu Kuning Kombinasi",
      "Sambel Goreng Kreni Krecek",
      "Gurame Asam Manis/Balado Ikan Fillet",
      "Ayam Bakar Madu/Udang Goreng Tepung",
      "Brokoli Bakso/Kwetiaw Spesial",
      "Acar Kuning/Salad Sayur/Salad Buah",
      "Kerupuk Udang",
      "Buah Iris + Buah Musiman",
      "Ice Cream + Puding",
      "Aneka Jus (50%)",
      "Soft Drink, Teh, Es Sirup, Air Mineral",
    ]
  },
  { id: 6,  title: 'Box Syukuran',        price: 'Rp.25000,-', lists: 
    [
      "Nasi Putih",
      "Sambal Goreng Kombinasi",
      "Ayam Goreng",
      "Mie Special",
      "Urap/Gedangan",
      "Telur Pindang",
      "Buah Pisang",
      "Kerupuk Udang"
    ]
  },
  { id: 7,  title: 'Box Syukuran',        price: 'Rp.30000,-', lists: 
    [
      "Nasi Putih",
      "Sambal Goreng Daging Krecek",
      "Ayam Goreng",
      "Mie Special",
      "Urap/Gedangan",
      "Telur Pindang",
      "Buah Pisang",
      "Snack 2 Macam",
      "Kerupuk Udang"
    ]
  },
  { id: 8,  title: 'Box Makanan Paket A', price: 'Rp.15000,-', lists: 
    [
      "Nasi Putih",
      "Ayam Bakar/Goreng",
      "Sambal",
      "Lalapan",
      "Kerupuk",
      "Buah Iris/Pisang",
      "Air Mineral"
    ]
  },
  { id: 9,  title: 'Box Makanan Paket B', price: 'Rp.17500,-', lists: 
    [
      "Nasi Putih",
      "balado/Rendang Telur",
      "Mie Goreng Spesial",
      "Oseng Daging Putren Lombok Ijo",
      "Kerupuk",
      "Buah Iris/Pisang",
      "Air Mineral"
    ]
  },
];

export default function Catering() {
  return (
    <main>
      {/* BAGIAN 1 */}
      <div className="bg-[url('/img/Service/1.jpeg')] bg-cover bg-center bg-no-repeat relative h-[20vh] md:h-[30vh] flex flex-col items-center justify-center before:content-[''] before:absolute before:inset-0 before:bg-[url('/img/Service/1.jpeg')] before:bg-cover before:bg-center before:brightness-50">
        <div className="h-[100%] w-[90%] md:w-[80%] flex flex-col items-center justify-center">
          <h1 className="relative z-10 text-[var(--main-color)] font-[family-name:var(--font-eb-garamond)] p-2 font-semibold text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
            Catering
          </h1>
          <p className="relative z-10 text-[var(--main-color)] md:mt-3 text-center font-normal text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Nikmati hidangan lezat penuh cita rasa yang akan melengkapi momen istimewa Anda
          </p>
        </div>
      </div>
      {/* BAGIAN 2 */}
      <div className="bg-[var(--neutral-color)] h-[70vh] md:h-[60vh] flex flex-col items-center justify-center ">
        <div className="w-[90%] h-[90%] md:w-[80%] md:h-[80%] flex flex-col md:flex-row items-center justify-around text-center">
          
          <div className="h-[50%] md:h-[100%] w-[100%] md:w-[50%] flex flex-col justify-center">
            <h1 className="mb-3 md:mb-7 font-medium text-base sm:text-medium md:text-3xl text-left border-l-4 p-2 border-[var(--highlight-color)] ">
              Melayani:
            </h1>
            <ul className="flex flex-col gap-1 md:gap-2">
            {servicelist.map((service) => (
              <li key={service.id} className="flex flex-row gap-2 md:gap-4">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <p className="w-[75%] h-[100%] text-justify font-normal text-xs sm:text-sm md:text-base lg:text-base xl:text-lg">
                  {service.text}
                </p>
              </li>
            ))}
            </ul>
          </div>

          <div className="h-[50%] w-[100%] md:h-[100%] md:w-[50%]">
            <div className="h-[100%] w-[100%] flex flex-col justify-start items-star gap-3">
              <Image
                className="w-auto h-[100%] shadow rounded p-1 md:p-2 w-auto h-[100%] border-4 border-transparent shadow-[4px_4px_0px_0px_var(--highlight-color)]"
                src="/img/Service/1-2.jpeg"
                alt="Pict 1"
                width={640}
                height={794}
                priority
              />
            </div>
          </div>
          
          
        </div>
      </div>
      {/* BAGIAN 3 */}
      <div className="bg-[var(--neutral-color)] flex flex-col items-center justify-center">
        <div className="h-[100%] w-[90%] md:w-[80%] flex flex-col mt-6 md:mt-12">
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mb-6 md:mb-16'>
          {menulist.map((menu) => (
            <div key={menu.id} className="flex flex-col rounded shadow-md bg-white">
              <div className="m-2 md:m-4 capitalize">
                  <h5 className="h-12 bg-[var(--highlight-color)] text-[var(--neutral-color)] p-1 md:p-2 border-l-4 border-[var(--secondary-color)] shadow-md font-[family-name:var(--font-eb-garamond)] mb-4 md:mb-6 font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl antialiased">
                      {menu.title}
                  </h5>
                  <h5 className="mb-3 md:mb-5 p-1 md:p-2 border-b-2 border-[var(--highlight-color)] text-right font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg antialiased">
                      {menu.price}
                  </h5>
                  <ul className="flex flex-col gap-2 md:gap-4">
                    {menu.lists.map((item, index) => (
                      <li key={index} className="flex flex-row gap-2 md:gap-4">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 22" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-7">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                        </div>
                        <p className="w-[75%] h-[100%] text-left font-normal text-xs sm:text-sm md:text-base lg:text-base xl:text-lg">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </main>
  );
}
