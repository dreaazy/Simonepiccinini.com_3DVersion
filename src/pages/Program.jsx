import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { staggerContainer } from "../utils/motion";

/* json with subjects */
import { storia, italiano } from "../constants";

const TopicCard = ({ index, argomento }) => {

  return (
    <motion.div
      key={`argomento-${index}`}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={argomento.img}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">
          {argomento.titolo}
        </h3>
      </div>
    </motion.div>
  );
};

const Program = () => {
  console.log("italiano:", italiano);
  console.log("storia:", storia);

  return (
    <motion.section
      variants={staggerContainer()}
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >

      <motion.div id="italiano" variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Materie Letterarie</p>
        <h2 className={`${styles.sectionHeadText}`}>Italiano.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {italiano.argomenti.map((argomento, index) => (
          <TopicCard key={index} index={index} argomento={argomento} />
        ))}
      </div>

      <motion.div id="storia" variants={textVariant()} className="mt-20">
        <p className={`${styles.sectionSubText} `}>Materie Letterarie</p>
        <h2 className={`${styles.sectionHeadText}`}>Storia.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {storia.argomenti.map((argomento, index) => (
          <TopicCard key={index} index={index} argomento={argomento} />
        ))}
      </div>

    </motion.section>
  );
};



export default Program;
