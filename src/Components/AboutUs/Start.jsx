import img from "../../../public/img.png";
const Start = () => {
  return (
    <section className="min-w-screen my-[7rem]">
      <main className="container grid md:grid-cols-2 mx-auto">
        <div className="grid justify-items-center items-center">
          <h1 className="text-5xl text-center font-bold leading-[3.4rem]">
            Let&apos;s Start <br />
            working more <br />
            efficiently today!
          </h1>
        </div>
        <img src={img} alt="boy" className="h-full" />
      </main>
    </section>
  );
};

export default Start;
