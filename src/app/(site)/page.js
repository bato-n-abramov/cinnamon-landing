import Hero from "@/components/sections/hero/Hero";
import BarrierAccess from "@/components/sections/barrier-access/BarrierAccess";
import HowItWorks from "@/components/sections/how-it-works/HowItWorks";
import EfficiencyScale from "@/components/sections/efficiency-scale/EfficiencyScale";
import Compliance from "@/components/sections/compliance/Compliance";
import RequestDemo from "@/components/sections/request-demo/RequestDemo";
import BarrierAccessV2 from "@/components/sections/barrier-accessV2/BarrierAccessV2";
import EfficiencyScaleV2 from "@/components/sections/efficiency-scaleV2/EfficiencyScaleV2";
import ComplianceV2 from "@/components/sections/complianceV2/ComplianceV2";
export default function Home() {

    return (
        <main>
            <Hero />
            <BarrierAccess />
            <HowItWorks />
            <EfficiencyScale />
            <Compliance />
            <RequestDemo />
            {/* <BarrierAccessV2 /> */}
            {/* <EfficiencyScaleV2 /> */}
            {/* <ComplianceV2 /> */}
        </main>
    );
}