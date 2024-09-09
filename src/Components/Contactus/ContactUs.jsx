import img from "/img.png";

const ContactUs = () => {
  return (
    <section className="min-w-screen items-center justify-center flex h-screen">
      <main className="container grid md:grid-cols-2 gap-4">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="">
          <h1 className="text-4xl font-Lemon">Contact Us</h1>
          <span className="pt-2">
            Lorem ipsum dolor, sit amet <br />
            consectetur adipisicing elit.
          </span>
          <form className="w-1/2 mt-[3rem]">
            <div className="flex flex-col ">
              <label htmlFor="text" className="text-lg font-Lemon  mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Full Name.."
                className="py-2 rounded-xl pl-4"
              />
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="email" className="text-lg font-Lemon mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email.."
                className="py-2 rounded-xl pl-4"
              />
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="Mesaage" className="text-lg font-Lemon mb-2">
                Message
              </label>
              <input
                type="text"
                placeholder="How can we get better.."
                className="py-2 rounded-xl pl-4"
              />
            </div>
          </form>
        </div>
      </main>
    </section>
  );
};

export default ContactUs;
