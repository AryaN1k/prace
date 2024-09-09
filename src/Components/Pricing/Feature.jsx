import React from "react";
import { GrStatusGood } from "react-icons/gr";

const basic = [
  {
    name: "Process Analysis",
    icon: <GrStatusGood />,
  },
  {
    name: "Task Management",
    icon: <GrStatusGood />,
  },
  {
    name: "Time Tracking",
    icon: <GrStatusGood />,
  },
  {
    name: "Performance Metrics",
    icon: <GrStatusGood />,
  },
  {
    name: "Customizable Reports",
    icon: <GrStatusGood />,
  },
  {
    name: "Email Integration",
    icon: <GrStatusGood />,
  },
];

const pro = [
  {
    name: "Process Analysis",
    icon: <GrStatusGood />,
  },
  {
    name: "Task Management",
    icon: <GrStatusGood />,
  },
  {
    name: "Time Tracking",
    icon: <GrStatusGood />,
  },
  {
    name: "Performance Metrics",
    icon: <GrStatusGood />,
  },
  {
    name: "Customizable Reports",
    icon: <GrStatusGood />,
  },
  {
    name: "Email Integration",
    icon: <GrStatusGood />,
  },
  {
    name: "Real-time Collaboration",
    icon: <GrStatusGood />,
  },
  {
    name: "Automated Workflows",
    icon: <GrStatusGood />,
  },
];

const business = [
  {
    name: "Process Analysis",
    icon: <GrStatusGood />,
  },
  {
    name: "Task Management",
    icon: <GrStatusGood />,
  },
  {
    name: "Time Tracking",
    icon: <GrStatusGood />,
  },
  {
    name: "Performance Metrics",
    icon: <GrStatusGood />,
  },
  {
    name: "Customizable Reports",
    icon: <GrStatusGood />,
  },
  {
    name: "Email Integration",
    icon: <GrStatusGood />,
  },
  {
    name: "Real-time Collaboration",
    icon: <GrStatusGood />,
  },
  {
    name: "Automated Workflows",
    icon: <GrStatusGood />,
  },
  {
    name: "Analytics Dashboard",
    icon: <GrStatusGood />,
  },
  {
    name: "SLA Management",
    icon: <GrStatusGood />,
  },
];

const Feature = () => {
  return (
    <section className="min-h-full min-w-screen">
      <main className="container mx-auto mt-7">
        <h1 className="text-4xl font-medium p-9">Comapare Features</h1>
        <div className="grid md:grid-cols-3 gap-6 pt-7 mt-7">
          <div className="text-center font-semibold text-2xl">
            <h1 className="py-8 border-b-4">Basic</h1>
            <div className="mx-auto  w-full md:w-3/5">
              {basic.map((item, index) => (
                <div className="flex mt-7 items-center px-4" key={index}>
                  <ul className="">
                    <li className="flex gap-3 mx-auto w-80">
                      <span className="text-4xl bg-green-500 rounded-full text-white">
                        {item.icon}
                      </span>
                      <span className="text-2xl ">{item.name}</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center font-semibold text-2xl">
            <h1 className="py-8 border-b-4 ">Pro</h1>
            <div className="mx-auto  w-full md:w-3/5">
              {pro.map((item, index) => (
                <div className="flex mt-7 items-center px-4" key={index}>
                  <ul className="">
                    <li className="flex gap-3 mx-auto w-80">
                      <span className="text-4xl bg-green-500 rounded-full text-white">
                        {item.icon}
                      </span>
                      <span className="text-2xl ">{item.name}</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center font-semibold text-2xl mb-8">
            <h1 className="py-8 border-b-4">Business</h1>
            <div className="mx-auto w-full md:w-3/5">
              {business.map((item, index) => (
                <div className="flex mt-7 items-center px-4" key={index}>
                  <ul className="">
                    <li className="flex gap-3 mx-auto w-80">
                      <span className="text-4xl bg-green-500 rounded-full text-white">
                        {item.icon}
                      </span>
                      <span className="text-2xl ">{item.name}</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Feature;
