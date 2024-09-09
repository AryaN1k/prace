const Phome = () => {
  return (
    <section className="min-w-screen min-h-full">
      <div className="h-80 mx-auto flex flex-col items-center justify-center ">
        <h1 className="text-5xl md:text-7xl font-bold py-5">Pricing</h1>
        <span className="font-medium text-xs md:text-base">
          Our pricing is not expensive{" "}
        </span>
        <span className="font-medium text-xs md:text-base">
          {" "}
          but it&apos;s not cheap either what it should be
        </span>
      </div>
      <main className="px-6 grid md:grid-cols-3 gap-y-5 py-5 container mx-auto">
        <div className="bg-white p-6 rounded-lg h-80 ">
          <p className="text-xl py-4 font-medium">Basic</p>
          <p className="py-5">
            <span className="align-top text-sm font-medium text-gray-600">
              $
            </span>
            <span className="text-5xl font-bold p-1">9</span>
            <span className="text-gray-500">/month</span>
          </p>
          <p className="pb-10 text-gray-600 font-semibold">
            For individuals and small <br /> teams
          </p>
          <button className="border border-black text-sm font-medium py-2 w-full rounded-lg hover:bg-black hover:text-white transition-all duration-300 ease-linear">
            Get Started with Basic
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-2xl z-10 transform scale-y-110 relative ">
            <button className="bg-blue-600 py-1 px-7 text-white rounded-full cursor-pointer text-base font-medium absolute right-4 ">Most Popular</button>
          <p className="text-xl py-4 font-medium ">Pro</p>
          <p className="py-5">
            <span className="align-top text-sm font-medium text-gray-600">
              $
            </span>
            <span className="text-5xl font-bold p-1">19</span>
            <span className="text-gray-500">/month</span>
          </p>
          <p className="pb-10 text-gray-600 font-medium">
            For individuals and <br /> small teams
          </p>
          <button className="border border-black text-sm font-medium py-2 w-full rounded-lg hover:bg-black hover:text-white transition-all duration-300 ease-linear">
            Get Started with Basic
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg h-80 ">
          <p className="text-xl py-4 font-semibold">Business</p>
          <p className="py-5">
            <span className="align-top text-sm font-medium text-gray-600">
              $
            </span>
            <span className="text-5xl font-bold p-1">99</span>
            <span className="text-gray-500">/month</span>
          </p>
          <p className="pb-10 text-gray-600 font-semibold">
            For individuals and <br /> small teams
          </p>
          <button className="border border-black text-sm font-medium py-2 w-full rounded-lg hover:bg-black hover:text-white transition-all duration-300 ease-linear">
            Get Started with Basic
          </button>
        </div>
      </main>
    </section>
  );
};

export default Phome;
