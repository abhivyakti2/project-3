import {  Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter=Inter({subsets:['latin']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <nav className="bg-gray-800 text-white p-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold hover:text-gray-300"></Link>
            <div className="space-x-4">
              <Link href="/" className="hover:text-gray-300">Home</Link>
              <Link href="/about" className="hover:text-gray-300">About</Link>
              <Link href="/blog" className="hover:text-gray-300">Blog</Link>
              <Link href="/interactive" className="hover:text-gray-300">Interactive</Link>

            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-100 text-center p-4 mt-8">
          <p className="text-gray-600">Built with Next JS</p>
        </footer>
      </body>
    </html>
  );
}
