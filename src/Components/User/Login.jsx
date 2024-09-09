import Layout from "../Layout/Layout";
import img from "/contact.avif";
const Login = () => {
  return (
    <Layout>
      <section className="min-w-screen items-center justify-center flex h-screen">
        <main className="container grid md:grid-cols-2 gap-7">
          <div>
            <img src={img} alt="" className="rounded-xl"/>
          </div>
          <div className="md:ml-[4rem]">
            <h1 className="text-4xl font-Lemon mb-2">Login</h1>
            <span className="">Enter Your Details...</span>
            <form className="w-1/2 mt-[3rem]">
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
              <div className="flex flex-col mt-4">
                <label htmlFor="password" className="text-lg font-Lemon  mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Full Name.."
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

export default Login;
