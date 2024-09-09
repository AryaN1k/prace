import { FaStar } from "react-icons/fa";
function Testo() {
  return (
    <section className="min-w-screen min-h-full flex flex-col items-center justify-evenly mb-8">
      <div className="container h-56 w-full flex flex-col justify-center px-4">
        <h1 className="text-5xl md:text-6xl font-semibold py-4 text-center">Testimonials</h1>
        <span className="font-medium  text-center">
          Lorem ipsum dolor sit amet 
          <br />
          adipisicing elit. Eaque, quos?
        </span>
      </div>
      <main className="container md:mx-auto grid md:grid-cols-3 gap-8 md:justify-items-center py-8 px-5">
        <div className="bg-white rounded-2xl p-6 w-full md:w-3/4">
          <h4 className="text-center">
            Since implementing Logo our business has seen significant growth.
          </h4>
          <div className="flex gap-3 py-2 justify-center">
            <FaStar className="text-blue-500 cursor-pointer" />
            <FaStar className="text-blue-500 cursor-pointer" />
            <FaStar className="text-blue-500 cursor-pointer" />
            <FaStar className="text-blue-500 cursor-pointer" />
            <FaStar className="text-blue-500 cursor-pointer" />
          </div>
          <h2 className="text-center font-medium text-lg">Uday Halwa</h2>
          <p className="text-center">Saharnpur , Up</p>
        </div>
        <div className="bg-white rounded-2xl w-full p-6 md:w-3/4">
          <h4 className="text-center">
            Since implementing Logo our business has seen significant growth.
          </h4>
          <div className="flex gap-3 py-2 justify-center">
            <FaStar className="text-blue-500 cursor-pointer" />
            <FaStar className="text-blue-500 cursor-pointer" />
            <FaStar className="text-blue-500 cursor-pointer" />
            <FaStar className="text-blue-500 cursor-pointer" />
            <FaStar className="text-blue-500 cursor-pointer" />
          </div>
          <h2 className="text-center font-medium text-lg">Uday Halwa</h2>
          <p className="text-center">Saharnpur , Up</p>
        </div>
        <div className="bg-white rounded-2xl w-full p-6 md:w-3/4">
          <h4 className="text-center">
            Since implementing Logo our business has seen significant growth.
          </h4>
          <div className="flex gap-3 py-2 justify-center">
            <FaStar className="text-blue-500 cursor-pointer" />
            <FaStar className="text-blue-500 cursor-pointer" />
            <FaStar className="text-blue-500 cursor-pointer" />
            <FaStar className="text-blue-500 cursor-pointer" />
            <FaStar className="text-blue-500 cursor-pointer" />
          </div>
          <h2 className="text-center font-medium text-lg">Uday Halwa</h2>
          <p className="text-center">Saharnpur , Up</p>
        </div>
      </main>
    </section>
  );
}

export default Testo;
