import Image from "next/image";
import Link from "next/link";

export default function Service() {
  return (
    <main>
      
      <div className="bg-[var(--neutral-color)] h-[90vh] flex flex-col items-center justify-center">
        <div className="w-[90%] h-[80%] flex flex-col items-center justify-around text-center text-[var(--highlight-color)] border border-black">
          <Image
            className="p-2 w-28 h-auto sm:w-25 sm:h-auto md:w-30 md:h-auto lg:w-40 lg:h-auto"
            src="/logo2.png"
            alt="SWWO Logo"
            width={200}
            height={200}
            priority
          />
          <div className="font-[family-name:var(--font-eb-garamond)] h-[40%]">
            <h1 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3">
              Service
            </h1>
            <h2 className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-3">
              Satria Wijaya Wedding Organizer
            </h2>
          </div>
        </div>
      </div>

    </main>
  );
}
