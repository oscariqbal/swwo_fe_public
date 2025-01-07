import {WhatsApp, GoogleMaps} from "../externalLink";

export default function Contact() {
  return (
    <main>
      <div className="bg-[var(--neutral-color)] h-[90vh] flex flex-col items-center justify-center">
        <div className="w-[90%] h-[90%] md:w-[80%] md:h-[80%] flex flex-col items-center justify-around">
          {/* --v-- BAGIAN ATAS --v-- */}
          <div className="w-[100%] h-[7.5%] md:w-[100%] md:h-[15%]">
            <h1 className="text-[var(--highlight-color)] font-[family-name:var(--font-eb-garamond)] p-2 font-semibold text-base sm:text-medium md:text-2xl lg:text-3xl xl:text-4xl text-center">
              Kontak Kami
            </h1>
          </div>
          {/* --^-- BAGIAN ATAS --^-- */}
          {/* --v-- BAGIAN BAWAH --v-- */}
          <div className="w-[100%] h-[87.5%] md:w-[100%] md:h-[85%] flex flex-col md:flex-row border-4 border-transparent shadow-[-4px_0px_0px_0px_var(--highlight-color)]">
            {/* --v-- BAGIAN BAWAH A --v-- */}
            <div className="w-[100%] h-[50%] md:w-[50%] md:h-[100%] flex items-center justify-center">
              <div className="w-[75%] h-[75%] md:w-[60%] md:h-[60%]">
                {/* --v-- CARD --v-- */}
                <a href={WhatsApp()} target="_blank" rel="noopener noreferrer" className="shadow-xl backdrop-blur-md isolation-auto border-2 w-[100%] h-[100%] bg-transparent rounded border border-[var(--highlight-color)] text-[var(--text-color)] p-4 flex flex-col items-start justify-center gap-3 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded before:bg-[var(--highlight-color)] hover:text-[var(--neutral-color)] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 overflow-hidden">
                  <div className="w-[100%] h-[50%]">
                    <svg viewBox="-2 -2 20 20" fill="currentColor" className="flex items-center justify-center w-[100%] h-[100%]">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                    </svg>
                  </div>
                  <div className="w-[100%] h-[50%] text-center">
                      <p className="font-extrabold">WhatsApp</p>
                      <p className="">+6281252380578</p>
                  </div>
                </a>
                {/* --^-- CARD --^-- */}
              </div>
            </div>
            {/* --^-- BAGIAN BAWAH A --^-- */}
            {/* --v-- BAGIAN BAWAH B --v-- */}
            <div className="w-[100%] h-[50%] md:w-[50%] md:h-[100%] flex items-center justify-center">
              <div className="w-[75%] h-[75%] md:w-[60%] md:h-[60%]">
              {/* --v-- CARD --v-- */}
                <a href={GoogleMaps()} target="_blank" rel="noopener noreferrer" className="shadow-xl backdrop-blur-md isolation-auto border-2 w-[100%] h-[100%] bg-transparent rounded border border-[var(--highlight-color)] text-[var(--text-color)] p-4 flex flex-col items-start justify-center gap-3 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded before:bg-[var(--highlight-color)] hover:text-[var(--neutral-color)] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 overflow-hidden">
                  <div className="w-[100%] h-[50%] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="flex items-center justify-center w-[100%] h-[100%]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div className="w-[100%] h-[50%] text-center">
                      <p className="font-extrabold">Alamat</p>
                      <p className="">Tegalwatu, Tegalroso, Kec. Parakan, Kabupaten Temanggung, Jawa Tengah 56254</p>
                  </div>
                </a>
                {/* --^-- CARD --^-- */}
              </div>
            </div>
            {/* --^-- BAGIAN BAWAH B --^-- */}
          </div>
          {/* --^-- BAGIAN BAWAH --^-- */}
        </div>
      </div>

    </main>
  );
}
