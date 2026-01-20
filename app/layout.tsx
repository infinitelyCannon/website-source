import type { Metadata } from "next";
import { Open_Sans, Roboto_Slab } from "next/font/google";
import "./sass/main.scss";

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"]
});

const robotoSlab = Roboto_Slab({
  weight: ["400", "600", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Dakarai Simmons | Portfolio Site",
  description: "A site to show off all the software projects I've worked on.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <div id="main">
            <div className="inner">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
