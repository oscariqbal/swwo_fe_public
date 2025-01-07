import { Plus_Jakarta_Sans, EB_Garamond } from "next/font/google";
import "./globals.css";
import Header from './header.js';
import Footer from './footer.js';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
});

const ebGaramond = EB_Garamond({
  variable: '--font-eb-garamond',
  subsets: ['latin'],
});

export const metadata = {
  title: "Satria Wijaya Wedding Organizer",
  description: "Satria Wijaya Wedding Organizer", /* diubah */
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${ebGaramond.variable} antialiased font-[family-name:var(--font-plus-jakarta-sans)] text-[0.5rem] sm:text-[0.625rem] md:text-[0.75] lg:text-[0.875rem] xl:text-[1rem]`} >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
