export default function Custom404() {
    return (
        <div className="bg-white text-center h-[90vh] flex flex-col justify-center items-center gap-2">
            <div className="flex flex-row md:flex-row gap-2 md:gap-4 p-1 md:p-2 border-b-2 border-[var(--highlight-color)] shadow-lg">
                <h1 className="text-5xl md:text-8xl font-bold text-[var(--highlight-color)] tracking-wide">404</h1>
                <h1 className="text-lg md:text-4xl font-bold flex justify-center items-center">Page Not Found</h1>
            </div>
            <p className="text-xs md:text-lg">The page you are looking for does not exist.</p>
        </div>
    );
}
