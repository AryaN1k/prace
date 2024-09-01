import img from "../../public/img.png";

export default function Hero() {
  return (
    <section className="min-w-screen ">
      <main className="container mx-auto mt-20 grid gap-8 md:grid-cols-2 md:items-center p-2">
        <div className="grid space-y-2">
          <span className="text-gray-500 font-medium ">- FREE 30 DAYS</span>
          <h1 className="text-5xl md:text-7xl text-gray-800 font-bold tracking-normal py-3">
            The best way to showcase your project.
          </h1>
          <p className="text-gray-500 pt-5">
            Here you can put a short description about your project.
          </p>
          <div className="flex gap-3 pt-7">
            <button className="bg-blue-500 text-white p-3 rounded-xl font-bold">
              Try for free
            </button>
            <button className="border border-black py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white hover:">
              See how it works
            </button>
          </div>
        </div>
        <div className="">
          <img src={img} alt="" className="w-full h-full" />
        </div>
      </main>
      <div className="w-full h-48 grid items-center  ">
        <p className="text-center text-md md:text-lg font-semibold px-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In,
          <br />
          vitae perferendis. Obcaecati eaque iusto eos.
        </p>
      </div>
    </section>
  );
}
