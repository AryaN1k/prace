import img from "../../public/img.png";

function Step() {
  return (
    <section className="min-w-screen h-full">
      <main className="container grid md:grid-cols-2  mx-auto h-full bg-white rounded-2xl p-4">
        <div className="grid grid-rows-2">
          <img src={img} alt="" className="mx-auto" />
          <div className="w-3/4 md:mx-auto px-6 flex flex-col gap-4 justify-center">
            <h1 className="text-4xl md:text-5xl font-bold "> How to join our Community</h1>
            <span>
              just 3 simple steps to optimize your company operations.
            </span>
            <br />
            <button className="px-6 py-2 bg-blue-500 text-white rounded-xl w-48 hover:bg-blue-700">
              Sign up now
            </button>
          </div>
        </div>
        <div className="grid items-center ">
          <div className="grid gap-y-7">
            <div className="w-96 px-2 border-b-2 pb-4">
              <h4 className="text-4xl font-bold mb-4">Step 1</h4>
              <span className="text-sm font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </span>
            </div>
            <div className=" w-96 px-2 border-b-2 pb-4">
              <h4 className="text-4xl font-bold mb-4">Step 2</h4>
              <span className="text-sm font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </span>
            </div>
            <div className=" w-96 px-2 border-b-2 pb-4">
              <h4 className="text-4xl font-bold mb-4">Step 3</h4>
              <span className="text-sm font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Step;
