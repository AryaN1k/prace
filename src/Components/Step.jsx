import img from "../../public/img.png";

function Step() {
  return (
    <section>
      <div className="container grid md:grid-cols-2 mx-auto md:p-8 bg-white p-4">
        <div className="">
          <img src={img} alt="" />
          <div className="py-7">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How to join our Community
            </h1>
            <p className="text-wrap py-4">
              just 3 simple steps to optimize your company operations.
            </p>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-xl w-48 hover:bg-blue-700">
              Sign up now
            </button>
          </div>
        </div>
        <div className="flex items-center pt-7 md:pl-8 ">
          <div className="grid gap-y-7">
            <div className="px-4 border-b-2 pb-4">
              <h4 className="text-4xl font-bold mb-4">Step 1</h4>
              <span className="text-sm font-medium text-wrap">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </span>
            </div>
            <div className=" px-2 border-b-2 pb-4">
              <h4 className="text-4xl font-bold mb-4">Step 2</h4>
              <span className="text-sm font-medium text-wrap">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </span>
            </div>
            <div className=" px-2 border-b-2 pb-4">
              <h4 className="text-4xl font-bold mb-4">Step 3</h4>
              <span className="text-sm font-medium text-wrap">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Step;
