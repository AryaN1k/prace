import img from "../../public/img.png";
function Costsaver() {
  return (
    <section className="min-w-screen min-h-full grid items-center  mb-8">
      <main className="grid md:grid-cols-2 container mx-auto items-center p-4">
        <div className="mx-auto w-full">
          <span className=" font-bold">COASTSAVER</span>
          <h1 className="text-4xl font-semibold py-4">
            Coast saving in a smart way.
          </h1>
          <p className="text-sm mt-4 ">
            Already have an account Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque quis natus provident ut! Ipsum incidunt
            tenetur et debitis doloribus maxime, dolores expedita, facere quasi
            accusamus iure delectus modi quo amet!
          </p>
          <button className="border border-black text-slate-950 py-2 px-4 rounded-xl mt-4 hover:bg-black hover:text-white transition-all duration-500">
            Try now
          </button>
        </div>
        <div className="">
          <img src={img} />
        </div>
      </main>
    </section>
  );
}

export default Costsaver;
