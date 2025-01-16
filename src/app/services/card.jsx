import Image from "next/image";
import Link from "next/link";

const Card = ({ image, title, url }) => {
    return (
        <div className="flex flex-col rounded shadow-md bg-white">
            <div className="m-2 md:m-4 h-20 md:h-40 rounded text-white shadow-lg">
                <Image
                    className="h-[100%] w-[100%] text-[var(--text-color)] text-xs rounded"
                    src={image}
                    alt={title}
                    width={640}
                    height={794}
                    priority
                />
            </div>
            <div className="m-2 md:m-4 capitalize">
                <h5 className="mb-2 font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl antialiased">
                    {title}
                </h5>
            </div>
            <div className="m-2 md:m-4 mt-auto">
                <Link href={url}>
                    <button data-ripple-light="true" type="button" className="font-normal text-xs sm:text-sm md:text-base px-2 py-1 md:px-4 md:py-2 text-[var(--neutral-color)] bg-[var(--highlight-color)] rounded shadow-md shadow-[var(--main-color)] transition-all hover:shadow-lg hover:shadow-[var(--main-color)] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
                        Selengkapnya
                    </button>
                </Link>
            </div>
        </div>
    );
  };
  
  export default Card;