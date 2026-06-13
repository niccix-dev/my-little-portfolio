import { Pinyon_Script, Italiana } from "next/font/google";
import "./globals.css";

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  weight: "400",
  subsets: ["latin"],
});

const italiana = Italiana({
  variable: "--font-italiana",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "my little portfolio.",
  description: "a photography portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pinyon.variable} ${italiana.variable}`}>
        {children}
      </body>
    </html>
  );
}