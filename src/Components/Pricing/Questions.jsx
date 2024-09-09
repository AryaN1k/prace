import question from "../../../public/questionmark.png";
import Getstarted from "../Getstarted";
import Faq from "./Faq";
const Questions = () => {
  return (
    <section className="min-w-screen my-10">
      <div className="py-[7rem]">
        <img src={question} alt="" className="mx-auto" />
        <h1 className="text-center text-5xl tracking-wider font-bold py-5 font-Lemon">
          Frequently asked <br />
          <span className="text-[#FFA08A]">Questions</span>
        </h1>
        <main className="container mx-auto p-4 my-[7rem]">
          <Faq />
        </main>
        {/* <div className="container mx-auto my-9"> */}
        <Getstarted />
        {/* </div> */}
      </div>
    </section>
  );
};

export default Questions;
