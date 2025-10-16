
import { Montserrat } from "next/font/google";
import Header from "@/components/global/header/Header";
import { getBaseUrl } from "@/lib/baseUrl";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
    metadataBase: getBaseUrl(),
};


export default function ContactLayout({ children }) {

    return (
        <div className={`${montserrat.variable} page`}>
            <div className="pageWrapper">
                <Header />
                {children}
            </div>
        </div>
    );
}
