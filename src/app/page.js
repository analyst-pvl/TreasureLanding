import Image from "next/image";
import React from "react";

const Button = (props) => {
  return (
    <a
      className="rounded-3xl bg-[#ECF956] hover:bg-[#ccda36] border border-[#111] text-[#111] font-semibold text-xl px-7 py-2.5 whitespace-nowrap"
      href="https://6inc.typeform.com/to/k06dpwLg"
      target="_blank"
    >
      {props.children ? props.children : "GET STARTED"}
    </a>
  );
};
const Navbar = () => {
  return (
    <div className="flex items-center justify-center bg-[#F0EDEE] sticky top-0">
      <div className="container flex justify-between  items-center py-5">
        <Image src="/Logo.svg" alt="Treasure Logo" width={170} height={40} />
        <Button />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="flex items-center justify-center bg-[#E8D5E8]">
      <div className="container flex flex-col lg:flex-row lg:justify-between items-center gap-16 py-10">
        <div className="max-w-[700px] flex flex-col items-center lg:items-start">
          <h1 className="font-semibold text-5xl mb-6 text-center lg:text-left">
            Empowering Influencers, Nurturing Success
          </h1>
          <p className="text-lg mb-6 text-center lg:text-left">
            In the digital influence realm, the glamour masks a challenging
            reality. Influencers face uncertainties, setbacks, and personal
            struggles. Shockingly, 47% of 350 global influencers battle mental
            health issues, revealing the hidden struggles behind their posts.
            Less than 15% with under 100K followers monetize their passion,
            leading to financial strain. Food bloggers, epitomes of culinary
            creativity, suffer 70% faster health decline due to pressure and
            demanding lifestyles.
          </p>
          <Button>Know More</Button>
        </div>
        <Image
          src="/HeroImage.png"
          alt=""
          width={580}
          height={730}
          className="w-3/4 lg:w-full"
        />
      </div>
    </div>
  );
};

const AtTreasure = () => {
  return (
    <div className="flex items-center justify-center bg-[#FFFDFC]">
      <div className="container py-10">
        <h1 className="text-4xl font-semibold mb-6 text-center lg:text-left">
          At Treasure
        </h1>
        <p className="text-lg text-center lg:text-left">
          We are on a mission to revolutionize the digital landscape for content
          creators and influencers. We acknowledge your challenges, and we're
          committed to standing by your side, guiding you towards not just
          success but also happiness. We firmly believe that your well-being
          matters just as much as your influence.
        </p>
      </div>
    </div>
  );
};

const WhyCard = (props) => {
  return (
    <div className="bg-[#FFFDFC] border border-[#D8D8D8] p-10 rounded-3xl flex flex-col lg:items-center">
      <img src={`Why/${props.index}.svg`} alt="" className="h-[100px] mb-4" />
      <h2 className="text-xl font-semibold mb-2.5 text-center lg:text-left">
        {props.heading}
      </h2>
      <p className="text-[#6D6D6D] text-lg text-center lg:text-left">
        {props.parah}
      </p>
    </div>
  );
};

const WhyTreasure = () => {
  return (
    <div className="flex items-center justify-center bg-[#F0EDEC]">
      <div className="container py-10">
        <h1 className="text-4xl font-semibold mb-10 text-center lg:text-left">
          Why Treasure?
        </h1>
        <div className="gap-x-12 gap-y-10 flex flex-col lg:flex-row">
          <WhyCard
            index={1}
            heading="Financial Empowerment"
            parah="We understand the importance of financial stability. Treasure provides you with the tools and strategies you need to monetize your influence effectively, ensuring that your passion becomes a sustainable career."
          ></WhyCard>
          <WhyCard
            index={2}
            heading="Personalized Guidance"
            parah="Our team of experts is dedicated to helping you navigate the complex world of digital influence. We offer personalized guidance, mentorship, and workshops designed to enhance your skills and amplify your online presence."
          ></WhyCard>
          <WhyCard
            index={3}
            heading="Community & Connection"
            parah="Being an influencer doesn't mean you have to walk this journey alone. Treasure connects you with like-minded individuals, fostering a supportive community where you can collaborate, learn, and grow together."
          ></WhyCard>
        </div>
      </div>
    </div>
  );
};

const Beginning = () => {
  return (
    <div className="flex items-center justify-center bg-[#F0EDEC]">
      <div className="container py-10">
        <h1 className="text-4xl font-semibold mb-6 text-center lg:text-left">
          Let's Make a Beginning Together
        </h1>
        <p className="text-lg mb-10 text-center lg:text-left">
          We invite you to join hands with us and curate an event in your town -
          a stepping stone towards a brighter, more fulfilling future. We
          provide you with the expertise, tools, and knowledge you need to
          become the face of influence in your community. Together, we can
          create a positive impact, not just online but also in the lives of
          those around us.
        </p>
        <div className="flex items-center flex-col lg:flex-row gap-10 w-full">
          <div className="basis-full">
            <img src="/Begining/1.png"></img>
          </div>
          <div className="basis-full">
            <img src="/Begining/2.png"></img>
          </div>
          <div className="basis-[60%]">
            <img src="/Begining/3.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

const CTA = () => {
  return (
    <div className="flex items-center justify-center bg-[#F0EDEC]">
      <div className="container py-10">
        <div className="flex bg-[#E8D5E8] rounded lg:px-20 p-16 items-center justify-between flex-col lg:flex-row gap-10">
          <h1 className="text-4xl font-semibold max-w-[650px] text-center lg:text-left">
            Fill out the form, and let's embark on this empowering journey
            together.
          </h1>
          <Button>Fill Form Here</Button>
        </div>
      </div>
    </div>
  );
};

const Ready = () => {
  return (
    <div className="flex items-center justify-center bg-[#F0EDEC]">
      <div className="container py-10 gap-10 justify-between items-center flex flex-col lg:flex-row">
        <div className="max-w-[650px]">
          <h2 className="text-5xl font-semibold mb-10  text-center lg:text-left">
            Are You Ready to Transform Your Journey?
          </h2>
          <p className="text-xl  text-center lg:text-left">
            If you're passionate about making a change, if you're ready to
            transform your challenges into opportunities
          </p>
        </div>
        <img src="/TranformImage.png" alt="" className="h-80" />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F0EDEC]">
      <div className="container py-10">
        <Image
          src="/Logo.svg"
          alt="Treasure Logo"
          width={170}
          height={40}
          className="mb-5"
        />
        <p className="max-w-[400px]">
          End to end web 3 digital stack for content creators & influencers
        </p>
      </div>
      <div className="container py-5 border-[#CACACA] border-t flex justify-between">
        <p className="text-[#444] font-medium">© 2023 All Rights Reserved. </p>
        <div className="flex gap-7">
          <p>Social Media The Influencers</p>
          <div className="flex gap-2.5">
            <a>
              <Image src="/Social/Facebook.svg" width={24} height={24} />
            </a>
            <a>
              <Image src="/Social/Twitter.svg" width={24} height={24} />
            </a>
            <a>
              <Image src="/Social/Instagram.svg" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AtTreasure />
      <WhyTreasure />
      <Beginning />
      <Ready />
      <CTA />
      <Footer />
    </div>
  );
};

export default page;
