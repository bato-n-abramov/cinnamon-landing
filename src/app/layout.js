import "./globals.scss";
import { Montserrat } from "next/font/google";



const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: 'swap',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={montserrat.variable}>
        {children}
      </body>
    </html>
  );
}
