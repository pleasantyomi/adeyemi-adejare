import Header from "@/components/layout/header";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Urbanist } from "next/font/google";
import Link from "next/link";
import ScrollAnimation from "@/components/ui/scroll-animation";

const cv = "/files/Adeyemi-Temitope-Adejare-FlowCV-Resume-20250905.pdf";
const urbanist = Urbanist({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div id="home" className="relative w-full h-[67vh] md:h-screen pt-5">
      <Header />

      {/* Main Introductions */}
      <ScrollAnimation delay={0.2}>
        <div className="relative md:pt-12 pt-20">
          <Image
            src="/images/Vector.png"
            alt="vector"
            width={20}
            height={20}
            className="absolute md:right-[36rem] md:top-[2rem] right-[9rem] top-[4rem]"
          />
          <Image
            src="/images/Vector2.png"
            alt="vector"
            width={35}
            height={35}
            className="absolute md:left-[23rem] md:bottom-[-2rem] left-[2rem] bottom-[-1.5rem]"
          />
          <Badge className="bg-transparent text-[14px] md:text-[18px] px-4 rounded-full border-[1px] dark:border-white dark:text-white border-black text-black font-[400] mx-auto block md:mb-0 mb-2">
            Hello!
          </Badge>
          <div>
            <h1
              className={`grid text-4xl md:text-6xl font-semibold text-center ${urbanist.className}`}
            >
              <span>
                I&apos;m <span className="text-primary">Adeyemi</span>,
              </span>
              <span>IT Administrator</span>
            </h1>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={0.4} direction="left">
        <div className="flex justify-between md:px-8 px-4 pt-12 md:pt-20">
          <div>
            <Image
              src="/images/quote-up.png"
              alt="quote"
              width={20}
              height={20}
              className="md:pb-3 pb-1 md:w-8 w-3"
            />
            <p className="font-[500] text-gray-700 dark:text-gray-300 md:text-base text-[7px] md:w-full w-8/12">
              Adeyemi’s outstanding IT administration
              <br /> kept our systems running smoothly
              <br /> and securely.
            </p>
          </div>
          <div className="text-right">
            <div className="flex justify-end gap-1 pb-1">
              {Array.from({ length: 5 }, (_, index) => (
                <Image
                  key={index}
                  src="/images/star.png"
                  alt="star"
                  width={15}
                  height={15}
                  className="md:w-full w-2"
                />
              ))}
            </div>
            <h2
              className={`${urbanist.className} text-base md:text-3xl font-bold grid leading-tighter`}
            >
              <span>3+ Years</span>
              <span
                className={`${urbanist.className} md:text-[14px] text-[10px] text-right font-[500]`}
              >
                Experience
              </span>
            </h2>
          </div>
        </div>
      </ScrollAnimation>

      {/* Bottom Images */}
      <ScrollAnimation delay={0.6}>
        <div className="">
          <Image
            src="/images/Ellipse.png"
            alt="Ellipse Background"
            width={600}
            height={400}
            className="absolute bottom-0 -translate-x-1/2 left-1/2"
          />
          <Image
            src="/images/adeyemi.png"
            alt="Profile Picture"
            width={700}
            height={700}
            className="md:block hidden absolute bottom-0 -translate-x-1/2 left-1/2 max-w-none"
          />
          {/* profile picture */}
          <Image
            src="/images/adeyemi.png"
            alt="Profile Picture"
            width={500}
            height={500}
            className="md:hidden block absolute bottom-0 -translate-x-1/2 left-1/2 max-w-none"
          />
          <div className="absolute -translate-x-1/2 rounded-full left-1/2 bottom-2 bg-white/10 backdrop-blur-2xl border-[1px] border-[#C9C9C9] p-2 flex items-center space-x-3">
            <Link href={cv} download>
              <Button className="px-6 rounded-full cursor-pointer">
                Download CV
              </Button>
            </Link>
            <Link href="#contact">
              <Button className="bg-transpant text-[16px] font-thin hover:bg-transparent cursor-pointer">
                Contact info
              </Button>
            </Link>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
