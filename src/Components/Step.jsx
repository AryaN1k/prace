import img from "../../public/img.png";

function Step() {
  return (
    <section>
      <div className="container grid md:grid-cols-2 mx-auto p-8 bg-white">
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
    // <section className="min-w-screen min-h-full mb-8">
    //   <main className="container grid lg:grid-cols-2 mx-auto bg-white rounded-2xl p-4 h-1/2">
    //     <div className="grid grid-rows-2">
    //       <img src={img} alt="" className="mx-auto w-3/4 h-3/4" />
    //       <div className="w-3/4 md:mx-auto px-6 flex flex-col gap-4 h-1/2">
    //         <h1 className="text-4xl md:text-5xl font-bold ">
    //           How to join our Community
    //         </h1>
    //         <span className="text-wrap">
    //           just 3 simple steps to optimize your company operations.
    //         </span>
    //         <br />
    //         <button className="px-6 py-2 bg-blue-500 text-white rounded-xl w-48    hover:bg-blue-700">
    //           Sign up now
    //         </button>
    //       </div>
    //     </div>
    //     <div className="flex items-center pt-7 md:pl-8 ">
    //       <div className="grid gap-y-7">
    //         <div className="px-4 border-b-2 pb-4">
    //           <h4 className="text-4xl font-bold mb-4">Step 1</h4>
    //           <span className="text-sm font-medium text-wrap">
    //             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //           </span>
    //         </div>
    //         <div className=" px-2 border-b-2 pb-4">
    //           <h4 className="text-4xl font-bold mb-4">Step 2</h4>
    //           <span className="text-sm font-medium text-wrap">
    //             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //           </span>
    //         </div>
    //         <div className=" px-2 border-b-2 pb-4">
    //           <h4 className="text-4xl font-bold mb-4">Step 3</h4>
    //           <span className="text-sm font-medium text-wrap">
    //             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </main>
    // </section>
  );
}

export default Step;
