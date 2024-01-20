import type { Metadata } from "next";
import { Inter, Audiowide } from "next/font/google";
import "./globals.css";
import Navbar from "./componants/Navbar";
import Footer from "./componants/Footer";

const inter = Inter({ subsets: ["latin"] });
const AudioWide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-audio",
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
      <body className={`bg-main ${inter.className} ${AudioWide.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
