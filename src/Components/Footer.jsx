import { Link } from "react-router-dom";
const link = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Procing",
    path: "/",
  },
  {
    name: "About us",
    path: "/",
  },
  {
    name: "Contact us",
    path: "/",
  },
];

const socialLinks = [
  { name: "Facebook", path: "/" },
  { name: "Instagram", path: "/" },
  { name: "Twitter", path: "/" },
  { name: "Linkedin", path: "/" },
];
function Footer() {
  return (
    <section className="min-w-screen border-t-4 ">
      <main className="container grid grid-cols-2 md:grid-cols-4 gap-8 mx-auto h-80 items-center p-4">
        <div className="">
          <h1>Logo</h1>
          <span>2021@Logo </span>
          <span>All right reserved</span>
        </div>
        <div className="mt-7 md:mt-0">
          {link.map((item, link) => {
            return (
              <li key={link} className="list-none mb-4">
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </div>
        <div className="">
          {socialLinks.map((item, link) => {
            return (
              <li key={link} className="list-none mb-4">
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </div>
        <div className="">
          <li className="list-none mb-4">Privacy Policy</li>
          <li className="list-none mb-4">Terms & Conditions</li>
        </div>
      </main>
    </section>
  );
}

export default Footer;
