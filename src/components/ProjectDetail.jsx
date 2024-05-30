import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { projects } from '../constants';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ProjectDetail = () => {
  const { projectName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const project = projects.find((p) => p.name === projectName);

  const totalImages = project?.images?.length || 0;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate loading delay
    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    if (imagesLoaded === totalImages) {
      setIsLoading(false);
    }
  }, [imagesLoaded, totalImages]);

  if (isLoading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <motion.section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <div className="relative w-full h-[500px] mb-10">
        <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-2xl" />
      </div>
      <div className="mt-5">
        <h2 className="text-white font-bold text-[32px]">{project.name}</h2>
        <div
          className="mt-3 text-gray-300 text-[17px] leading-[30px] text-justify"
          dangerouslySetInnerHTML={{ __html: project.description }}
        ></div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={index} className={`text-[14px] ${tag.color}`}>#{tag.name}</span>
          ))}
        </div>
        {project.source_code_link && (
          <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-blue-500 font-bold">
            View Source Code
          </a>
        )}
      </div>

      {project.code && (
        <div className="mt-10 bg-black p-5 rounded-md">
          <h3 className="text-white font-bold text-[24px]">Code</h3>
          <ReactMarkdown
            children={project.code}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={okaidia}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          />
        </div>
      )}

      {project.images && project.images.length > 0 && (
        <div className="mt-10">
          <h3 className="text-white font-bold text-[24px]">Gallery</h3>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {project.images.map((image, index) => (
              <div key={index} className="relative w-full h-[300px] p-5">
                <img
                  src={image.url}
                  alt={`project_image_${index}`}
                  className="w-full h-full object-cover rounded-2xl"
                  onLoad={handleImageLoad}
                />
                <p className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white p-2 rounded">{image.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default ProjectDetail;
