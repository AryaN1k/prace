import Getstarted from "../Getstarted";

const items = [
  {
    name: " Uday",
    img: "/questionmark.png",
  },
  {
    name: " Uday",
    img: "/questionmark.png",
  },
  {
    name: " Uday",
    img: "/questionmark.png",
  },
  {
    name: " Uday",
    img: "/questionmark.png",
  },
  {
    name: " Uday",
    img: "/questionmark.png",
  },
  {
    name: " Uday",
    img: "/questionmark.png",
  },
  {
    name: " Uday",
    img: "/questionmark.png",
  },
  {
    name: " Uday",
    img: "/questionmark.png",
  },
];
const Team = () => {
  return (
    <>
      <section className="min-w-screen my-[7rem]">
        <div className="my-[4rem]">
          <h1 className="text-5xl font-bold text-center">Our Team</h1>
          <p className="text-lg text-center my-2">
            Meet our team of talented individuals
          </p>
        </div>
        <main className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center p-5 w-full lg:w-3/4 md:gap-7">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid md:gap-2 items-center justify-items-center mt-[2rem]"
            >
              <div className="w-[130px] h-[130px] md:w-[180px] md:h-[180px] border border-green-500 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="object-w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold mt-2">{item.name}</h3>
            </div>
          ))}
        </main>
      </section>
      <Getstarted />
    </>
  );
};

export default Team;
