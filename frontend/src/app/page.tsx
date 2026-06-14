import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MissionManifesto from "../components/Mission";
import Footer from "../components/Footer";
import CognitiveCapabilities from "../components/CognitiveCapabilites";
import VisualJourney from "../components/VisualJourney";
import RobotCanvas from "../robot/RobotCanvas";
import FinalTransformation from "../robot/FinalTransformation";

export default function Home() {
    return (
        <main className="bg-[#050505] text-white">

            <Navbar />

            <Hero />

            <RobotCanvas />

            <MissionManifesto />

            <VisualJourney />

            <CognitiveCapabilities />

            <FinalTransformation />

            <Footer />

        </main>
    );
}