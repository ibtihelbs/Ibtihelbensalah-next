import { Metadata } from "next";
import { Inter, Cinzel_Decorative } from "next/font/google";
import "./globals.css";
import Navbar from "./componants/Navbar";
import Footer from "./componants/Footer";

const inter = Inter({ subsets: ["latin"] });

const Cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
});
export const metadata: Metadata = {
  title: "ibtihel ben salah-front end developer-portfolio",
  description:
    "Explore the digital playground of ibtihel ben salah, a frontend developer and graphic designer. Immerse yourself in creative projects, skills, and a passion for turning designs into interactive magic. Let's connect and craft digital delight beyond the screen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${inter.className} bg-main ${Cinzel.variable}`}>
        <div className="overlay"></div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
