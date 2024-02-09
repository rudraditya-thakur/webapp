import { features } from "../constants";
import styles, { layout } from "../style";
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-secondary text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Let's work together <br className="sm:block hidden" /> to create a healthier future for everyone.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      In a world striving for wellness, we envision a future where cutting-edge technology unites with compassionate care. By empowering doctors with the latest advancements, we aim to unlock a healthier tomorrow for all. This journey starts with accurate diagnoses, personalized treatments, and improved prevention, paving the way for a brighter, healthier horizon. Together, let's rewrite the script on healthcare, one life at a time.
      </p>

      <button class="mt-10 px-10 py-3 border text-[#569199] rounded-md transition-all duration-500 hover:bg-gradient-to-br hover:from-[#569199] hover:to-[#a4dad2] hover:text-white">
        <Link to="/chat" class="bg-transparent">Get Started</Link>
      </button>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
