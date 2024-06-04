import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, aboutMe } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-[250px] h-[320px] green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
        <div
            className='bg-tertiary rounded-[20px] py-5 px-12 h-full flex flex-col justify-evenly items-center'
        >
            <img
                src={icon}
                alt='web-development'
                className='w-16 h-16 object-contain'
            />

            <h3 className='text-white text-[20px] font-bold text-center'>
                {title}
            </h3>
        </div>
    </motion.div>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                I'm a skilled software developer with experience in TypeScript and
                JavaScript, and expertise in frameworks like React, Node.js, and
                Three.js. I'm a quick learner and collaborate closely with clients to
                create efficient, scalable, and user-friendly solutions that solve
                real-world problems. Let's work together to bring your ideas to life!
            </motion.p>

            <div className='mt-20 flex flex-row flex-wrap gap-10 justify-center'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>

            <motion.div variants={textVariant()} className="mt-20">
                <p className={styles.sectionSubText}>Me</p>
                <h2 className={styles.sectionHeadText}>{aboutMe.title}</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                {aboutMe.introduction}
            </motion.p>

            {aboutMe.hobbies.map((hobby, index) => (
                <div key={index}>
                    <h2 className={styles.sectionHeadText}>{hobby.name}</h2>
                    <img className="w-16 h-16 object-contain" src={hobby.img} alt={hobby.name} />
                    <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">{hobby.description}</p>
                </div>
            ))}

        </>
    );
};

export default SectionWrapper(About, "about");
