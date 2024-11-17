import React from "react";
import "./style.css";
const About = () => {
  return (
    <div className="container flex flex-col justify-between items-center h-4/5 ">
      <h2 className="text-4xl text-center">ABOUT ME</h2>
      <div className=" tracking-wider flex flex-col  h-full">
        <p className="p-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fuga
          asperiores est atque modi aspernatur animi minus amet ea excepturi
          veritatis neque reprehenderit molestiae aliquam quos voluptatibus,
          assumenda voluptas similique!
        </p>
        <h3 className="text-1xl opacity-50  text-gray-600 mt-auto ">
          <i>
            {` "I have not failed. I've just found 10,000 ways that won't work "`}
          </i>
        </h3>
      </div>
    </div>
  );
};

export default About;
