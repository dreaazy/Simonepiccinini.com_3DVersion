import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { storia, italiano } from "../constants";

const TopicDetail = () => {
  const { type, title } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  let argomento;

  if (type === "italiano") {
    argomento = italiano.argomenti.find((a) => a.titolo === decodeURIComponent(title));
  } else if (type === "storia") {
    argomento = storia.argomenti.find((a) => a.titolo === decodeURIComponent(title));
  }

  useEffect(() => {
    // Simulate loading process, you can replace it with actual loading logic
    const timer = setTimeout(() => setIsLoading(false), 2000); // Adjust the timeout as needed
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!argomento) {
    return <div>Argomento not found</div>;
  }

  return (
    <motion.section className={`sm:px-16 px-6 sm:py-16 md:pt-32 py-16 max-w-7xl mx-auto relative z-0`}>
      <h2 className="text-white font-bold text-[32px]">{argomento.titolo}</h2>
      <div className="relative w-full h-[500px] mb-10">
        <img src={argomento.img} alt={argomento.titolo} className="w-full h-full object-cover rounded-2xl" />
      </div>

      {argomento.vita && (
        <div className="mt-5 text-secondary">
          <h3 className="text-2xl font-semibold mb-4">Vita</h3>
          <p>{argomento.vita}</p>
        </div>
      )}
      
      <div className="mt-5">
        {argomento.argomenti && (
          <ul className="mt-5 text-secondary">
            {argomento.argomenti.map((subArgomento, index) => (
              <li key={index} className="mt-2 flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-semibold mb-4">{subArgomento.titolo}</h3>
                  <p>{subArgomento.spiegazione}</p>
                </div>
                {subArgomento.img && (
                  <div className="mt-2 md:mt-0 md:ml-5 md:w-1/2">
                    <img src={subArgomento.img} alt={subArgomento.titolo} className="w-full h-auto object-cover rounded-2xl mb-5" />
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.section>
  );
};

export default TopicDetail;
