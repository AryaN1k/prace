import img from "../../../public/lando.png";
const About = () => {
  return (
    <section className="min-w-screen">
      <main className="container mx-auto px-6 my-[7rem] ">
        <div className="grid gap-3  md:w-1/2 mx-auto py-3">
          <h2 className="text-center text-5xl font-bold">About Us</h2>
          <p className="text-center mx-auto md:text-lg mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Debitis ea earum necessitatibus ipsa, nesciunt corporis, <br />{" "}
            laboriosam voluptatibus autem corrupti et dolore..
          </p>
        </div>
        <div className="my-[4rem]">
          <img src={img} alt="img" className="w-full" />
        </div>
        <div className="grid gap-3  md:w-[55%] mx-auto py-3">
          <h2 className="text-center text-5xl font-bold">Our mission</h2>
          <p className="text-center mx-auto text-lg my-[7rem] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea
            earum necessitatibus ipsa, nesciunt corporis Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Dignissimos fuga quaerat vel
            soluta ex veritatis repellat quas tempore quibusdam, voluptate non.
            Laboriosam exercitationem aut debitis doloremque, reiciendis
            obcaecati amet ipsam.
          </p>
          <p className="border border-slate-300"></p>
        </div>
      </main>
    </section>
  );
};

export default About;
