import Blog from "~/components/Blog";
import CallToAction from "~/components/CallToAction";
import Features from "~/components/Features";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeroSection from "~/components/HeroSection";
import Stats from "~/components/Stats";
import Testimonials from "~/components/Testimonials";
// import Layout from "~/layouts/Layout";

const Page = () => (
  <>
    <Header />
    <main className="space-y-40 mb-40">
      <HeroSection />
      <Features />
      <Stats />
      <Testimonials />
      <CallToAction />
      <Blog />
    </main>
    <Footer />
  </>
);

export default Page;
