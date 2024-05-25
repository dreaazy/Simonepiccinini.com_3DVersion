// ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const ProjectCard = ({ index, project }) => {
  return (
    <motion.div
      key={`project-${index}`}
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <Link to={`/projects/${project.name}`}>
        <div className="relative w-full h-[230px]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{project.short_description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className={`text-[12px] ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
