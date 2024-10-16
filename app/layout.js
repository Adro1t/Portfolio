import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { Fira_Code } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const fira = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: "Raman Khadgi",
  description: "Raman Khadgi Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={` ${fira.className} ${inter.className} antialiased bg-background text-border`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container mx-auto">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
