import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "../context/ThemeContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ganesh Bathula | Portfolio",
  description: "Personal portfolio of Ganesh Bathula, Full Stack Developer. Building real-time web applications, proctoring platforms, and autonomous AI data pipelines.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="antialiased min-h-screen">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
