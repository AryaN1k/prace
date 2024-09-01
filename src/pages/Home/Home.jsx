import Costsaver from "../../Components/Costsaver";
import Hero from "../../Components/Hero";
import Smartsave from "../../Components/Smartsave";
import Solution from "../../Components/Solution";
import Step from "../../Components/Step";
import Testo from "../../Components/Testo";
import Layout from "./../../Components/Layout/Layout";
import Getstarted from "./../../Components/Getstarted";

const Home = () => {
  return (
    <Layout>
      <div className="">
        <Hero />
        <Solution />
        <Smartsave />
        <Costsaver />
        <Step />
        <Testo />
        <Getstarted />
      </div>
    </Layout>
  );
};

export default Home;
