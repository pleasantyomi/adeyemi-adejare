import Link from "next/link";

export default function Footer() {
  const links = [
    {
      name: "About",
      href: "#About",
    },
    {
      name: "Experience",
      href: "#Experience",
    },
    {
      name: "Projects",
      href: "#Projects",
    },
    {
      name: "Contact",
      href: "#Contact",
    },
  ];
  return (
    <>
      <div className="py-10 pb-20">
        <ul className="flex justify-center gap-4 md:gap-8 mb-2 md:text-[24px] text-[16px] font-[500] dark:text-white text-black">
          {links.map((link) => (
            <li key={link.name} className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <p className="text-center text-[10px] md:text-[14px] text-gray-600 dark:text-gray-400">
          Copyright © 2025 Adeyemi Temitope Adejare. All Rights Reserved.
        </p>
      </div>
    </>
  );
}
