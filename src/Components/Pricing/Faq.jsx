import Acordion from "./Acordion";

const Faq = () => {
  return (
    <section className="p-4 bg-transparent rounded-lg w-full md:w-3/4 mx-auto mt-7">
      <Acordion
        title="How does this work?"
        ans="Our platform simplifies [product/service] usage by offering intuitive tools, guidance, and support. Simply sign up, follow the onboarding instructions, and start utilizing the features according to your needs."
      />
      <div className="border-b-2 "></div>
      <Acordion
        title="What are the benefits?"
        ans="Some key benefits include increased efficiency, easy-to-use features, competitive pricing, customizable options, and access to a dedicated support team that ensures smooth functionality."
      />
      <div className="border-b-2 "></div>
      <Acordion
        title="Is it difficult to use?"
        ans="Not at all! Our platform is designed to be user-friendly. With a simple and intuitive interface, users of all skill levels can easily navigate and use the tools without prior experience."
      />
      <div className="border-b-2 "></div>
      <Acordion
        title="Can I have custom pricing?"
        ans="Yes, we offer flexible pricing plans based on the scale and scope of your needs. You can contact our sales team to discuss custom pricing options tailored specifically for you."
      />
      <div className="border-b-2 "></div>
      <Acordion
        title="Is there a trial version available?"
        ans="Absolutely! We offer a free trial version so you can explore our features before committing. The trial includes full access to core functionalities for a limited period."
      />
      <div className="border-b-2 "></div>
      <Acordion
        title="Where do I sign up?"
        ans="You can sign up directly on our website by clicking the Sign Up button. Follow the prompts to create your account and get started right away!"
      />
      <div className="border-b-2 "></div>
    </section>
  );
};

export default Faq;
