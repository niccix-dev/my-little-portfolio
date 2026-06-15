import { Pinyon_Script, Italiana, Italianno, Marck_Script, Petit_Formal_Script, Playfair_Display, Cormorant_Garamond, EB_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", weight: "400", style: ["italic"], subsets: ["latin"] });
const ebgaramond = EB_Garamond({ variable: "--font-ebgaramond", weight: "400", style: ["italic"], subsets: ["latin"] });
const pinyon = Pinyon_Script({ variable: "--font-pinyon", weight: "400", subsets: ["latin"] });
const italiana = Italiana({ variable: "--font-italiana", weight: "400", subsets: ["latin"] });
const italianno = Italianno({ variable: "--font-italianno", weight: "400", subsets: ["latin"] });
const marck = Marck_Script({ variable: "--font-marck", weight: "400", subsets: ["latin"] });
const petit = Petit_Formal_Script({ variable: "--font-petit", weight: "400", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "my little portfolio.",
  description: "a photography portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pinyon.variable} ${italiana.variable} ${italianno.variable} ${marck.variable} ${petit.variable} ${playfair.variable} ${cormorant.variable} ${ebgaramond.variable}`}>
        <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></script>
        {children}
      </body>
    </html>
  );
}