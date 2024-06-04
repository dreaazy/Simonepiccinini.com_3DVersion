import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { ProjectCard } from '../components';
import { projects } from '../constants';
import {useImageLoader} from '../components'; // Adjust the path as needed

const Project = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Collect all project image URLs
  const projectImages = projects.map(project => project.img);
  const { loaded, loadCount } = useImageLoader(projectImages);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (loaded) {

      window.scrollTo(0, 0);
      setIsLoading(false);
    }
  }, [loaded]);

  if (isLoading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
        {/* <p>Loading images... {loadCount} / {projectImages.length}</p> */}
      </div>
    );
  }

  return (
    <motion.section
      variants={staggerContainer()}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0 pt-32`}
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of the projects I have worked on, demonstrating my skills and experience in various technologies. Click on a project to learn more about it.
        </motion.p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} project={project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Project;
