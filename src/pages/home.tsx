import React from "react";

import home1 from "../images/home1.svg";
import home2 from "../images/home2.svg";
import challenges from "../images/home.challenges.svg";

import PageContainer from "../components/PageContainer";
import Card from "../components/Card";
import { Button } from "../components/Button";
import { DiscordIcon, YoutubeIcon } from "../icons";

const Home = (): JSX.Element => {
  return (
    <PageContainer>
      <div className="flex items-center justify-between flex-col md:flex-row gap-7">
        <div className="uppercase font-bold tracking-widest text-center md:text-left">
          <h3 className="text-2xl">Welcome to</h3>
          <h1 className="text-4xl text-primary">Tech With Tim</h1>
          <h5 className="text-lg text-secondary">Programming &#38; Tech Tutorials</h5>
          <div className="flex md:justify-between gap-5 tracking-wide mt-2 text-sm justify-center">
            <a target="_black" className="flex items-center gap-2" href="https://discord.gg/twt">
              <DiscordIcon fill="#FA9722" width={50} height={50} />
              <span className="hidden sm:inline-block">Join Our Server</span>
            </a>
            <a
              target="_black"
              className="flex items-center gap-2"
              href="https://www.youtube.com/channel/UC4JX40jDee_tINbkjycV4Sg"
            >
              <YoutubeIcon fill="#FA9722" width={55} height={53} />
              <span className="hidden sm:inline-block">Subscribe</span>
            </a>
          </div>
        </div>
        <div className="max-w-sm xl:max-w-xl">
          <picture>
            <img className="w-full h-auto" src={home1} alt="" />
          </picture>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <div className="uppercase tracking-widest font-bold">
            <h3 className="text-2xl">Timathon</h3>
            <h1 className="text-5xl text-primary">Code Jam</h1>
          </div>
          <p className="text-light-gray font-semibold max-w-xs lg:max-w-lg">
            Hosted every 2 months, consisting of a different theme and allowing yourself to put your
            skills to the test.
          </p>
          <Button className="mt-4">Read More</Button>
        </div>
        <div className="flex items-center md:justify-end justify-center gap-4 flex-wrap uppercase">
          <Card className="flex flex-col w-28 h-28 items-center justify-center text-center pt-3">
            <h2 className="text-3xl font-bold">07</h2>
            <h6 className="text-tiny font-medium">Code Jams</h6>
          </Card>
          <Card className="flex flex-col w-28 h-28 items-center justify-center text-center pt-3">
            <h2 className="text-3xl font-bold">617</h2>
            <h6 className="text-tiny font-medium">Teams Created</h6>
          </Card>
          <Card className="flex flex-col w-28 h-28 items-center justify-center text-center pt-3">
            <div>
              <h2 className="text-3xl font-bold">212</h2>
              <h6 className="text-tiny font-medium">Submissions</h6>
            </div>
          </Card>
        </div>
      </div>
      <div className="flex flex-col gap-7 items-center justify-between md:flex-row-reverse">
        <div className="flex flex-col items-center md:items-end uppercase tracking-widest font-bold">
          <h3 className="text-2xl">Weekly</h3>
          <h1 className="text-5xl text-primary">Challenges</h1>
          <p className="text-light-gray tracking-normal normal-case font-semibold">
            Submit your solutions and earn badges!
          </p>
          <Button className="mt-3">Read More</Button>
        </div>
        <div>
          <picture>
            <img
              className="w-full h-auto max-h-64 lg:max-h-72 xl:max-h-96"
              src={challenges}
              alt=""
            />
          </picture>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col md:flex-row gap-7">
        <div className="flex flex-col uppercase tracking-widest font-bold items-center text-center md:text-left md:items-start">
          <h3 className="text-2xl">Discord</h3>
          <h1 className="text-5xl text-primary">Commmunity</h1>
          <p className="text-light-gray tracking-normal normal-case font-semibold max-w-sm md:max-w-lg">
            Become a part of one of the most active programming communities. Check out all of our
            help channels!
          </p>
          <a href="https://discord.gg/twt" target="_black">
            <Button className="mt-3">Join Us</Button>
          </a>
        </div>
        <div className="max-w-xs xl:max-w-md">
          <picture>
            <img className="w-full h-auto" src={home2} alt="" />
          </picture>
        </div>
      </div>
    </PageContainer>
  );
};

export default Home;
