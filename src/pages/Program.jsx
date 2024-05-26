import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { storia, italiano } from "../constants";

const TopicCard = ({ index, argomento, type }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (argomento.titolo) {
      navigate(`/program/${type}/${encodeURIComponent(argomento.titolo)}`);
    } else {
      console.error("The argomento object is missing a titolo property:", argomento);
    }
  };

  return (
    <motion.div
      key={`argomento-${index}`}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-tertiary p-5 rounded-2xl sm:w-[340px] md:w-[290px] xl:w-[340px] w-full cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative w-full h-[230px]">
        <img
          src={argomento.img}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{argomento.titolo}</h3>
      </div>
    </motion.div>
  );
};

const Program = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0 pt-32`}
    >
      <motion.div id="italiano" variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Materie Letterarie</p>
        <h2 className={`${styles.sectionHeadText}`}>Italiano.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {italiano.argomenti.map((argomento, index) => (
          <TopicCard key={index} index={index} argomento={argomento} type="italiano" />
        ))}
      </div>

      <motion.div id="storia" variants={textVariant()} className="mt-20">
        <p className={`${styles.sectionSubText}`}>Materie Letterarie</p>
        <h2 className={`${styles.sectionHeadText}`}>Storia.</h2>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {storia.argomenti.map((argomento, index) => (
          <TopicCard key={index} index={index} argomento={argomento} type="storia" />
        ))}
      </div>
    </motion.section>
  );
};

export default Program;
