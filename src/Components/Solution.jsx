import img from "/solution.avif";
function Solution() {
  return (
    <section className="min-w-screen min-h-fulln grid items-center justify-items-center mb-8">
      <main className="container grid gap-8 md:grid-cols-2 md:items-center border bg-white mx-auto rounded-xl shadow-2xl shadow-slate-200 h-fit px-1 md:px-12 py-7">
        <div className=" p-2">
          <div className="mb-3 ">
            <h1 className="text-4xl md:text-7xl font-semibold">
              Introducing good{" "}
            </h1>
            <span className="text-4xl md:text-7xl font-semibold ">
              solution
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Blanditiis, obcaecati?
          </p>
          <div className="mt-5">
            <button className="bg-blue-500 px-6 py-2 rounded-xl text-white">
              Try for free
            </button>
          </div>
        </div>
        <div className="grid justify-items-end">
          <img src={img} alt="" />
        </div>
      </main>
    </section>
  );
}

export default Solution;
