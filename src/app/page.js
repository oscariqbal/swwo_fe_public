import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* BAGIAN 1 */}
      <div className="h-[90vh] flex flex-col items-center justify-center bg-[url('/img/bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="w-[90%] h-[80%] flex flex-col items-center justify-around text-center">
          <Image
            className="p-2 w-28 h-auto sm:w-25 sm:h-auto md:w-30 md:h-auto lg:w-40 lg:h-auto"
            src="/logo2.png"
            alt="SWWO Logo"
            width={200}
            height={200}
            priority
          />
          <div className="font-[family-name:var(--font-eb-garamond)] h-[50%]">
            <h1 className="font-medium text-3xl sm:text-3xl md:text-4xl lg:text-5l xl:text-6xl mb-3 text-[var(--main-color)]">Satria Wijaya Wedding Organizer</h1>
            <h2 className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-3 text-[var(--main-color)]">Wedding Organizer Professional</h2>
          </div>
        </div>
      </div>
      {/* BAGIAN 2 */}
      <div className="bg-[var(--neutral-color)] h-[100vh] flex flex-col items-center justify-center">
        <div className="w-[90%] h-[90%] md:w-[80%] md:h-[80%] flex flex-col md:flex-row items-center justify-around text-center">

          <div className="h-[50%] w-[100%] md:h-[100%] md:w-[50%]">
            
            <div className="h-[75%] w-[100%] md:h-[60%] md:w-[100%] flex flex-col justify-center items-center gap-3 md:justify-end md:pr-5 md:items-start md:pb-3">
              <h1 className="font-[family-name:var(--font-eb-garamond)] md:mb-7 p-2 font-medium text-base sm:text-medium md:text-2xl lg:text-3xl xl:text-4xl text-left border-l-4 border-[var(--highlight-color)] ">
                Satria Wijaya Wedding Organizer
              </h1>
              <p className="md:mt-3 text-justify font-normal text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                Satria Wijaya Wedding Organizer adalah penyedia jasa wedding organizer yang menghadirkan solusi lengkap untuk mewujudkan pernikahan impian anda. 
              </p>
              <p className="md:mb-3 text-justify font-normal text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                Dengan tim profesional yang berpengalaman, kami menawarkan layanan mulai dari perencanaan konsep, dekorasi, katering, hingga koordinasi acara di hari pernikahan.
              </p>
            </div>
            
            <div className="h-[25%] w-[100%] md:h-[40%] flex justify-center items-center md:justify-end md:pr-5 md:items-start md:pt-5">
              <Link href="services">
                <button type="submit" className="flex justify-center gap-2 items-center mr-auto shadow-xl font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl backdrop-blur-md isolation-auto border-[var(--highlight-color)] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded before:bg-[var(--highlight-color)] hover:text-[var(--neutral-color)] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded group">
                  Lihat Selengkapnya
                  <svg className="w-7 h-7 md:w-8 md:h-8 justify-end group-hover:rotate-90 group-hover:bg-[var(--neutral-color)] text-[var(--neutral-color)] ease-linear duration-300 rounded-full border border-[var(--text-color)] group-hover:border-none p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-[var(--text-color)] group-hover:fill-[var(--text-color)]"></path>
                  </svg>
                </button>
              </Link>
            </div>

          </div>
          
          <div className="h-[50%] md:h-[100%] w-[100%] md:w-[55%] flex justify-center items-center ">
            <Image
              className="p-2 w-auto h-[100%] border-4 border-transparent shadow-[4px_4px_0px_0px_var(--highlight-color)]"
              src="/img/Home/1.jpeg"
              alt="SWWO Logo"
              width={640}
              height={794}
              priority
            />
          </div>
        </div>
      </div>
      {/* BAGIAN 3 */}
      <div className="bg-[var(--neutral-color)] h-[100vh] flex flex-col items-center justify-center">
        {/*bg-[url('/wedding.png')]*/}
        <div className="border border-white w-[100%] h-[90%] md:h-[80%] flex flex-col items-center justify-between bg-[url('/weddingfix.jpg')] bg-cover bg-center bg-no-repeat">
    
          <div className="flex justify-start items-start mt-5 w-[90%] h-[20%] md:w-[80%] md:h-[20%]">
            <h1 className="bg-[rgba(255,255,255,0.85)] text-[var(--highlight-color)] font-[family-name:var(--font-eb-garamond)] p-2 font-medium text-base sm:text-medium md:text-2xl lg:text-3xl xl:text-4xl text-left border-l-4 border-[var(--highlight-color)]">
              Setiap detail dirancang dengan cermat demi momen yang tak terlupakan
            </h1>
          </div>

          <div className="flex justify-end items-end mb-5 w-[90%] h-[20%] md:w-[80%] md:h-[20%]">
            <div className="bg-[rgba(255,255,255,0.85)] text-[var(--highlight-color)] font-[family-name:var(--font-eb-garamond)] p-2 font-medium text-base sm:text-medium md:text-2xl lg:text-3xl xl:text-4xl text-right border-r-4 border-[var(--highlight-color)]">
              Ciptakan indahnya momen abadi anda bersama kami
            </div>
          </div>

        </div>

      </div>
      {/* BAGIAN 4 */}
      <div className="bg-[var(--neutral-color)] h-[100vh] flex flex-col items-center justify-center">
        <div className="w-[90%] h-[90%] md:w-[80%] md:h-[80%] flex flex-col items-center justify-between text-[var(--highlight-color)]">
          
          <div className="w-[100%] h-[7.5%] md:w-[100%] md:h-[15%]">
            <h1 className="text-[var(--highlight-color)] font-[family-name:var(--font-eb-garamond)] p-2 font-medium text-base sm:text-medium md:text-2xl lg:text-3xl xl:text-4xl text-center">
              Mengapa harus memilih kami?
            </h1>
          </div>
          
          <div className="w-[100%] h-[87.5%] md:w-[100%] md:h-[85%] flex flex-col md:flex-row">
            
            <ul className="w-[100%] h-[50%] md:w-[50%] md:h-[100%] md:pr-5 flex flex-col justify-evenly md:pt-5 md:grid md:grid-cols-2 text-[var(--text-color)] border-4 border-transparent shadow-[-4px_-4px_0px_0px_var(--highlight-color)]">
              <li className="flex flex-row justify-around">
                <div className="w-[20%] h-[100%] text-[var(--highlight-color)] flex justify-center items-center md:justify-end md:items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                  </svg>
                </div>
                <p className="w-[75%] h-[100%] text-justify font-normal text-xs sm:text-sm md:text-base lg:text-base xl:text-lg">Berpengalaman selama lebih dari 20 tahun</p>
              </li>
              <li className="flex flex-row justify-around">
                <div className="w-[20%] h-[100%] text-[var(--highlight-color)] flex justify-center items-center md:justify-end md:items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <p className="w-[75%] h-[100%] text-justify font-normal text-xs sm:text-sm md:text-base lg:text-base xl:text-lg">Berhasil menangani lebih dari ratusan klien dari berbagai daerah</p>
              </li>
              <li className="flex flex-row justify-around">
                <div className="w-[20%] h-[100%] text-[var(--highlight-color)] flex justify-center items-center md:justify-end md:items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <p className="w-[75%] h-[100%] text-justify font-normal text-xs sm:text-sm md:text-base lg:text-base xl:text-lg">Tim yang terampil dan professional</p>
              </li>
              <li className="flex flex-row justify-around">
                <div className="w-[20%] h-[100%] text-[var(--highlight-color)] flex justify-center items-center md:justify-end md:items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                  </svg>
                </div>
                <p className="w-[75%] h-[100%] text-justify font-normal text-xs sm:text-sm md:text-base lg:text-base xl:text-lg">Layanan bervariasi dan terjangkau</p>
              </li>
            </ul>
            
            <div className="w-[100%] h-[50%] md:w-[50%] md:h-[100%]">
              
              <div className="w-[100%] h-[75%] md:h-[50%] flex flex-col justify-center items-center gap-3 md:justify-end md:pl-5 md:items-end md:pb-5">
                <p className="text-[var(--text-color)] text-justify font-normal text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                  Satria Wijaya Wedding Organizer hadir sebagai mitra terpercaya yang membantu mengubah hari istimewa Anda menjadi kenangan yang indah.
                </p>
                <p className="text-[var(--text-color)] text-justify font-normal text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                  Kami selalu siap mendengarkan kebutuhan dan preferensi anda untuk memastikan setiap acara berjalan lancar dan sesuai harapan. 
                </p>
              </div>
              
              <div className="w-[100%] h-[25%] md:h-[50%] flex justify-center items-center md:justify-start md:pl-5 md:items-start md:pt-5">
                <Link href="contacts">
                  <button type="submit" className="flex justify-center gap-2 items-center mr-auto shadow-xl font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl backdrop-blur-md isolation-auto border-[var(--highlight-color)] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded before:bg-[var(--highlight-color)] hover:text-[var(--neutral-color)] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded group">
                    Hubungi Kami
                    <svg className="w-7 h-7 md:w-8 md:h-8 justify-end group-hover:rotate-90 group-hover:bg-[var(--neutral-color)] text-[var(--neutral-color)] ease-linear duration-300 rounded-full border border-[var(--text-color)] group-hover:border-none p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-[var(--text-color)] group-hover:fill-[var(--text-color)]"></path>
                    </svg>
                  </button>
                </Link>
              </div>

            </div>

          </div>
          
        </div>
      </div>
    </main>
  );
}
