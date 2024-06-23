import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import useImageLoader from "./useImageLoader";
import remarkGfm from "remark-gfm";

const ProjectDetail = () => {
  const { projectName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedContent, setZoomedContent] = useState(null);

  const project = projects.find((p) => p.name === projectName);
  const mainImage = project?.image || "";
  const galleryImages = project?.images?.map((image) => image.url) || [];
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

  const handleZoom = (content) => {
    setZoomedContent(content);
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
    setZoomedContent(null);
  };

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
    <motion.section
      className={`sm:px-16 px-6 sm:py-16 md:pt-32 py-16 max-w-7xl mx-auto relative z-0`}
    >
      <div className="relative w-full h-[500px] mb-10">
        <img
          src={project.thumbnail_image}
          alt={project.name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="mt-5">
        <h2 className="text-white font-bold text-[32px]">{project.name}</h2>
        <div
          className="mt-3 text-gray-300 text-[17px] leading-[30px] text-justify"
          dangerouslySetInnerHTML={{ __html: project.description }}
        ></div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={index} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>
        {project.source_code_link && (
          <a
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-blue-500 font-bold"
          >
            View Source Code
          </a>
        )}

        {project.downloads && project.downloads.length > 0 && (
          <div className="mt-10">
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-5">
              {project.downloads.map((download, index) => (
                <div
                  key={index}
                  className="relative w-full h-[100px] p-5 flex items-center justify-center"
                >
                  <a
                    href={download.source}
                    download
                    className="text-blue-500 font-bold"
                  >
                    {download.text}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {project.code && (
        <div className="mt-10 bg-[#171D3F] p-5 rounded-md">
          <ReactMarkdown
            className="markdown"
            children={project.code}
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-4xl font-bold mb-6 mt-6" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-3xl font-bold mb-5 mt-5" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-2xl font-bold" {...props} />
              ),
              h4: ({ node, ...props }) => (
                <h4 className="text-xl font-bold" {...props} />
              ),
              h5: ({ node, ...props }) => (
                <h5 className="text-lg font-bold" {...props} />
              ),
              h6: ({ node, ...props }) => (
                <h6 className="text-base font-bold" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="text-base text-gray-300 mb-2 mt-3" {...props} />
              ),
              strong: ({ node, ...props }) => (
                <strong className="font-bold" {...props} />
              ),
              em: ({ node, ...props }) => <em className="italic" {...props} />,

              ol: ({ node, ...props }) => (
                <ol className="list-decimal list-inside mb-4" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-inside mb-4 mt-4" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="ml-6 mb-2" {...props} />
              ),
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={nightOwl}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </div>
      )}

      {project.images && project.images.length > 0 && (
        <div className="mt-10">
          <h3 className="text-white font-bold text-[24px]">Images</h3>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                className="relative w-full h-[300px] p-5 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleZoom(<img src={image.url} alt={`project_image_${index}`} className="w-full h-full object-cover rounded-2xl" />)}
              >
                <img
                  src={image.url}
                  alt={`project_image_${index}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <p className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white p-2 rounded">
                  {image.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {project.videos && project.videos.length > 0 && (
        <div className="mt-10">
          <h3 className="text-white font-bold text-[24px]">Videos</h3>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.videos.map((gif, index) => (
              <motion.div
                key={index}
                className="relative w-full h-[300px] p-5 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleZoom(<img src={gif.url} alt={`project_gif_${index}`} className="w-full h-full object-cover rounded-2xl" />)}
              >
                <img
                  src={gif.url}
                  alt={`project_gif_${index}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <p className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white p-2 rounded">
                  {gif.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeZoom}
          >
            <motion.div
              className="w-auto h-auto max-w-3xl max-h-[90vh] overflow-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {zoomedContent}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ProjectDetail;
