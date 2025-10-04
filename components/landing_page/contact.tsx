import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ScrollAnimation from "@/components/ui/scroll-animation";

export default function Contact() {
  return (
    <section id="contact">
      <ScrollAnimation>
        <div className="block py-10 pb-5 mx-auto md:w-6/12">
          <h1 className="pb-8 text-3xl font-semibold text-center text-gray-800 dark:text-gray-100 md:text-5xl">
            Have an Awesome Project idea?{" "}
            <span className="text-primary">Let&apos;s Discuss</span>
          </h1>

          <ScrollAnimation delay={0.3}>
            <div className="border-[1px] border-[#E4E7EC] rounded-full p-3 w-10/12 mx-auto  md:w-full grid md:flex justify-center md:justify-between items-center justify-items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-8 rounded-full md:h-12 md:w-15 bg-primary/20">
                  <MdEmail className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 md:w-6 md:h-6 top-1/2 left-1/2 text-primary" />
                </div>
                <Link
                  href="mailto:temmythourpe1907@gmail.com"
                  className="text-gray-800 dark:text-gray-100 font-[500] text-[12px] md:text-[16px]"
                >
                  temmythourpe1907@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-8 rounded-full md:h-12 md:w-15 bg-primary/20">
                  <FaLinkedinIn className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 md:w-6 md:h-6 absolut top-1/2 left-1/2 text-primary" />
                </div>
                <Link
                  href="https://www.linkedin.com/in/adeyemi-temitope-a-2019432a6/"
                  className="text-gray-800 dark:text-gray-100 font-[500] text-[12px] md:text-[16px]"
                >
                  Adeyemi Temitope A.
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
    </section>
  );
}
