import { metaContent } from "../public/Alltext";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Button from "./components/Button/Button";
import styles from "./landing.module.css";
import Image from "next/image";
import developer from "../public/images/Yared_Gari_29-removebg-preview.png";
import banner from "../public/images/macDesktop.jpeg"
import {
  WifiIcon,
  ComputerIcon,
} from "./components/Icons/IconComponents/Icons";
import { heroContent } from "../public/Alltext";
import AnimatedHeader from "./components/AnimatedHeader/AnimatedHeader";
import Aboutpage from "./HomeSections/about/Aboutpage";
import SkillPage from "./HomeSections/skills/Skillpage";
import Experiance from "./HomeSections/experiances/Experiancepage";
import Educations from "./HomeSections/educations/Educationpage";
import TransitionEffect from "./components/TransitionEffect/TransitionEffect";

export const metadata: Metadata = {
  title: metaContent.home.title || "home",
  description: metaContent.home.desc || "home page",
};
export default function HomePage() {
  return (
    <>
      <TransitionEffect />
      <main className={styles["landing-container"]}>
        <div className={styles.herocontainer}>
          <AnimatedHeader
            text={heroContent.heroHeader}
            className={styles.heroheader}
            className2={styles.headContainer}
          />
          <p className={styles.herodesc}>{heroContent.herodesc}</p>
          <div className={styles.herobtns}>
            <div className={styles.btn}>
              <Button
                label="Get in touch"
                variant="primary"
                type="link"
                icon={<WifiIcon className={styles.wifiIcon} />}
                to="/contactme"
              />
            </div>
            <div className={styles.btn}>
              <Button
                label="My Works"
                variant="secondary"
                icon={<ComputerIcon className={styles.computerIcon} />}
                type="link"
                to="/projects"
              />
            </div>
          </div>
        </div>
        <div className={styles.banner}>
          <Image
            src={developer}
            alt="Yared's photo"
            width={420}
            priority
            className={styles.myphoto}
          />
          <Image src={banner} alt="banner" width={500} height={500} className={styles.landingcover} priority/>
        </div>
      </main>
      <section>
        <Aboutpage />
      </section>
      <section>
        <SkillPage />
      </section>
      <section>
        <Experiance />
      </section>
      <section>
        <Educations />
      </section>
    </>
  );
}
