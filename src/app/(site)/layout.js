import Header from "@/components/global/header/Header";
import Footer from "@/components/global/footer/Footer";
import { getBaseUrl } from "@/lib/baseUrl";



export const metadata = {
    metadataBase: getBaseUrl(),
};


export default function SiteLayout({ children }) {
    return (
        <div className="pageWrapper">
            <Header />
            {children}
            <Footer />
        </div>
    );
}