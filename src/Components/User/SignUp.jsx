import Layout from "../Layout/Layout";
import img from "/contact.avif";

const SignUp = () => {
  return (
    <Layout>
      <section className="min-w-screen items-center justify-center flex h-screen">
        <main className="container grid md:grid-cols-2 gap-7">
          <div>
            <img src={img} alt="" className="rounded-xl"/>
          </div>
          <div className="md:ml-[4rem]">
            <h1 className="text-4xl font-Lemon mb-2">Sign Up</h1>
            <span className="pt-2">Enter Your Detailss..</span>
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
                  Password
                </label>
                <input
                  type="password"
                  placeholder="How can we get better.."
                  className="py-2 rounded-xl pl-4"
                />
              </div>
            </form>
          </div>
        </main>
      </section>
    </Layout>
  );
};

export default SignUp;
