import img from "/get_started.avif";
function Getstarted() {
  return (
    <section className="min-w-screen min-h-full grid items-center justify-items-center mb-8">
      <main className="container grid gap-8 md:grid-cols-2 md:items-center border bg-white mx-auto rounded-xl shadow-2xl shadow-slate-200 h-fit p-4 md:px-12 py-7">
        <div className=" py-2">
          <div className="mb-3">
            <h1 className="text-4xl md:text-6xl font-semibold">Get Started with </h1>
            <span className="text-4xl md:text-6xl font-semibold ">Logo today</span>
          </div>
          <p>Start optimizing your process today.</p>
          <div className="mt-5">
            <button className="bg-blue-500 px-6 py-2 rounded-xl text-white">
              Sign up now
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

export default Getstarted;
