import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import { Medal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const headingFont = localFont({
  src: "../../public/fonts/Inter-Bold.woff2"
});

const textFont = Inter({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
});

const MarketingPage = () => {
  return (
    <div className="bg-[url('../public/wallpaper.jpg')] w-screen h-screen -mt-28 pt-16">
      <div className="flex items-center justify-center flex-col">
        <div className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className,
        )}>
          {/* <div className="mb-4 flex items-center border shadow-sm p-4 bg-emerald-100 text-emerald-700 rounded-full uppercase">
            <Medal className="h-6 w-6 mr-2" />
            Glazen Bol Awards 2023
          </div> */}
          <div className="flex">
            <Image className="mb-28 pt-12"
              src={"/logo1.png"}
              alt="Logo"
              height={100}
              width={150}
            />
            <h1 className="text-3xl md:text-6xl text-center text-white mt-14 mb-6">
              TaskFlow
            </h1>
          </div>
          <div className="text-3xl md:text-6xl bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
            Verdeel taken, beter.
          </div>
        </div>
        <div className={cn(
          "text-sm md:text-xl text-white mt-14 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className,
        )}>
          TaskFlow is een gratis en open source project management tool. Maak een account aan en begin vandaag nog met het beter verdelen van taken.
        </div>
        <Button className="mt-6" size="lg" asChild>
          <Link href="/sign-up">
            Start nu gratis
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MarketingPage;
