import { Teko, Rubik, Raleway, Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/sections/Footer";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/toaster";
import DetailedFooter from "@/components/sections/DetailedFooter";
 

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--open_sans",
});


const raleway = Raleway({
  subsets: ["latin"],
  variable: "--raleway",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--rubik",
});

const teko = Teko({
  subsets: ["latin"],
  variable: "--teko",
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--playfair_display",
});

export const metadata = {
  title: "Mybrandfirst",
  description: "Digital marketing company in Bangalore",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
   
    <html lang="en" className="dark">
      
      <body className={` ${rubik.variable} ${playfair_display.variable} ${raleway.variable} ${teko.variable} ${open_sans.variable}`}>
    
        {children}
        <Toaster />
        <div className="mt-10">
        <Separator className="w-full" />
          <DetailedFooter/>
          <Separator className="w-full" />
          <div className="flex items-center justify-center">
            <Footer />
          </div> 
        </div> 
      
      </body>
      
    </html>
    
  );
}
