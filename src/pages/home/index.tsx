import { memo } from "react";
import { ReactTyped } from "react-typed";
import image from "../../assets/image.png";

const Home = () => {
  return (
    <div className="container__pages h-full flex md:flex-row md:justify-between items-center gap-4 p-3">
      <div className="flex flex-col gap-6 md:text-left">
        <p className="text-2xl md:text-3xl">Hello I'm</p>
        <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
          Barchinoy Yusupova
        </h1>
        <div className="text-xl md:text-3xl">
          <ReactTyped
            strings={[
              "a full-stack developer",
              "a backend developer",
              "a frontend developer",
            ]}
            typeSpeed={80}
            backSpeed={40}
            loop
          />
        </div>
      </div>

      <div>
        <img
          className="w-[340px] h-[190px] md:w-[420px] md:h-[420px] object-cover rounded-full"
          src={image}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default memo(Home);
