import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Simple blog project in NextJS + TailwindCSS + ContentLayer",
  description: "Created by EDUWEB.PL",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="flex mx-auto max-w-7xl p-4 border-b-2">
          <ul className="flex grow gap-4 items-center justify-center">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/articles"}>Articles</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}
