import HeroOne from "../components/HeroOne";
import HeroTwo from "../components/HeroTwo";
import FeatureSection from "../components/FeaturesSection";
import HeroThree from "../components/HeroThree";
import Hero4 from "../components/Hero4";
import Hero5 from "../components/Hero5";
const Home = () => {
    return (
        <>
            <section className="xl:padding-l  wide:padding-r padding-b">
                <HeroOne />
            </section>
            <section className="xl:padding-l  wide:padding-r padding-b">
                <HeroTwo />
            </section>
            <section className="xl:padding-l  wide:padding-r padding-b">
                <FeatureSection />
            </section>
            <section className="xl:padding-l  wide:padding-r padding-b">
                <HeroThree />
            </section>
            <section className="xl:padding-l  wide:padding-r padding-b">
                <Hero4 />
            </section>
            <section className="xl:padding-l  wide:padding-r padding-b">
                <Hero5 />
            </section>

         
        </>
    );
};

export default Home;
