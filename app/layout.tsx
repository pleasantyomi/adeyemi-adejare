import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adeyemi Adejare",
  description:
    "I'm Adeyemi Adejare, an IT Administrator. Welcome to my portfolio page.",
  authors: [
    {
      name: "Pleasant Yomi",
      url: "https://pleasantyomi.vercel.app",
    },
    {
      name: "Adeyemi Adejare",
      url: "https://adeyemiadejare.vercel.app",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
