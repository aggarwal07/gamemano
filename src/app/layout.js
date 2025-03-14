import {
  Poppins,
  Wallpoet,
  Prosto_One,
  Aoboshi_One,
  Press_Start_2P,
  Special_Elite,
} from "next/font/google";
import "./globals.css";
import Providers from "@/store/Providers";
import Loader from "@/utilities/Loader";

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-special-elite",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const wallpoet = Wallpoet({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-wallpoet",
});

const prostoOne = Prosto_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-prosto-one",
});

const aoboshiOne = Aoboshi_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-aoboshi-one",
});

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-press-start-2p",
});

export const metadata = {
  title: "Game Mano Assignment",
  description:
    "Assignment for the position of Frontend Developer, developed By Shivam Aggarwal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${wallpoet.variable} ${prostoOne.variable} ${aoboshiOne.variable} ${pressStart2P.variable} antialiased`}
      >
        <Providers>
          <Loader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
