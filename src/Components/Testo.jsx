import { FaStar } from "react-icons/fa";
function Testo() {
  return (
    <section className="min-w-screen min-h-full flex flex-col items-center justify-evenly mb-8">
      <div className="h-56 w-full md:w-1/2 md:mx-auto grid items-start md:items-center md:justify-items-center py-7 mb-7">
        <h1 className="text-4xl md:text-6xl font-semibold">Testimonials</h1>
        <span className="font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quos?
        </span>
      </div>
      <main className="container border mx-auto grid md:grid-cols-3 gap-8 justify-items-center py-8">
        <div className="bg-white rounded-2xl p-6 w-3/4">
          <h4 className="text-center">
            Since implementing Lando our business has seen significant growth.
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
        <div className="bg-white rounded-2xl p-6 w-3/4">
          <h4 className="text-center">
            Since implementing Lando our business has seen significant growth.
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
        <div className="bg-white rounded-2xl p-6 w-3/4">
          <h4 className="text-center">
            Since implementing Lando our business has seen significant growth.
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
