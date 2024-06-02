import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { projects } from '../constants';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import useImageLoader from './useImageLoader';
import remarkGfm from 'remark-gfm';

const ProjectDetail = () => {
  const { projectName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const project = projects.find((p) => p.name === projectName);

  const mainImage = project?.image || "";
  const galleryImages = project?.images?.map(image => image.url) || [];
  const imageUrls = [mainImage, ...galleryImages];
  const { loaded, loadCount } = useImageLoader(imageUrls);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (loaded) {
      setIsLoading(false);
    }
  }, [loaded]);

  if (isLoading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
        {/* <p>Loading images... {loadCount} / {imageUrls.length}</p> */}
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
            className="markdown"
            children={project.code}
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({node, ...props}) => <h1 className="text-4xl font-bold mb-6 mt-6" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-3xl font-bold" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-2xl font-bold" {...props} />,
              h4: ({node, ...props}) => <h4 className="text-xl font-bold" {...props} />,
              h5: ({node, ...props}) => <h5 className="text-lg font-bold" {...props} />,
              h6: ({node, ...props}) => <h6 className="text-base font-bold" {...props} />,
              p: ({node, ...props}) => <p className="text-base text-gray-300" {...props} />,
              strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
              em: ({node, ...props}) => <em className="italic" {...props} />,
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '');
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
                );
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
