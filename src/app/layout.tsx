import { Metadata } from "next";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar/sidebar";
import ModalManager from "../components/modal/modalManager";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuizThis",
  description:
    "Test your programming skills with QuizThis - a challenging quiz platform for developers",
  keywords: [
    "programming",
    "quiz",
    "coding",
    "developer",
    "programming quiz",
    "code challenge",
  ],
  verification: { google: "-gl0BvrHtfs3sAb4cnAF7JxOka_1zvoJTTIWCEADsec" },
  metadataBase: new URL("https://quiz-this.netlify.app/"),
  authors: [{ name: "Eric Man" }],
  creator: "Eric Man",
  publisher: "QuizThis",
  robots: "index, follow",
  icons: {
    apple: "/img/apple-touch-icon.png",
    icon: "/img/favicon.ico",
    shortcut: "/img/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quiz-this.netlify.app/",
    title: "QuizThis - Programming Quiz Platform",
    description:
      "Test your programming skills with QuizThis - a challenging quiz platform for developers",
    images: [
      {
        url: "/img/logo.png",
        width: 1024,
        height: 1024,
        alt: "QuizThis - Programming Quiz Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuizThis - Programming Quiz Platform",
    description:
      "Test your programming skills with QuizThis - a challenging quiz platform for developers",
    images: ["/img/quizthis-twitter.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="night">
      <body className="scrollbar scrollbar-thumb-blue-500! scrollbar-track-gray-200! animated-background bg-cover bg-center">
        <Navbar />
        <div className="drawer lg:drawer-open overflow-x-hidden">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content h-[calc(100vh-4rem)] p-4 pt-3">
            {children}
          </div>
          {/* calculate the height of the drawer side prevent overflow */}
          <div className="drawer-side h-[calc(100vh-4rem)]">
            <Sidebar />
          </div>
        </div>
        <ModalManager />
      </body>
    </html>
  );
}
