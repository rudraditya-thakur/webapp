import styles from "../style";
import { doctor } from '../assets';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      {/* Content Section */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-secondary ss:leading-[100.8px] leading-[75px]">
            Your Trusted <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Healthcare Partner</span>{" "}
          </h1>
        </div>
        <button class="mt-10 px-10 py-3 border text-[#569199] rounded-md transition-all duration-500 hover:bg-gradient-to-br hover:from-[#569199] hover:to-[#a4dad2] hover:text-white">
          <a href="/chat" class="bg-transparent">Get Started</a>
        </button>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          At the forefront of AI healthcare, MedMind Innovision pioneers transformative diagnostics, leveraging advanced algorithms to detect rare diseases early, revolutionizing patient care.
        </p>
      </div>
      {/* Image Section */}
      <div className={`mx-auto flex flex-col md:flex-row ${styles.flexStart}`}>
        <img src={doctor} alt="Hero" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default Hero;
