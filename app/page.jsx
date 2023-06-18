"use client";
import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="flex-center  w-full flex-col">
      <h className="head_text text-center"> Discover and share </h>
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center"> Ai powered prompts</span>
      <p className="desc text-center">
        {" "}
        Prompter is an open source Ai prompting source for modern world to
        discover create and share creative prompts
      </p>
      {/* feed */}
      <Feed />
    </section>
  );
};

export default Home;
