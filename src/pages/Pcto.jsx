import React, {useEffect, useState} from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { useImageLoader } from "../components";

import {
  S1_hostFamily,
  S2_beach,
  S2_bexhill,
  S2_sea,
  S3_england,
  S3_locationCity,
  S4_bus,
  S4_college,
  S5_business,
  S5_economics,
  S5_mate,
  S6_band,
  S6_library,
  S6_refectory,
  S7_basket,
  S7_chemistry,
  S7_football,
  S8_kid,
  S8_london,
  S9_brighton,
  S9_bros,
  S9_nino,
  S10_bruxell,
  S10_flags,
  S10_sun,
  S11_nature,
  S11_thankyou,
} from "../assets/pcto";

const Pcto = () => {

  const [isLoading, setIsLoading] = useState(true);

  // Collect all project image URLs
  const pctoImages = [
    S1_hostFamily,
    S2_beach,
    S2_bexhill,
    S2_sea,
    S3_england,
    S3_locationCity,
    S4_bus,
    S4_college,
    S5_business,
    S5_economics,
    S5_mate,
    S6_band,
    S6_library,
    S6_refectory,
    S7_basket,
    S7_chemistry,
    S7_football,
    S8_kid,
    S8_london,
    S9_brighton,
    S9_bros,
    S9_nino,
    S10_bruxell,
    S10_flags,
    S10_sun,
    S11_nature,
    S11_thankyou,
  ];

  const { loaded, loadCount } = useImageLoader(pctoImages);

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

   /*  const loadingPercentage = Math.round((loadCount / pctoImages.length)); */

    return (
      <div className="spinner-container">
        <div className="spinner"></div>
        {/* <p>{loadingPercentage}%</p> */}
      </div>
    );
  }

  return (
    <motion.section
      variants={staggerContainer()}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="max-w-7xl mx-auto relative z-0 pt-32 px-6"
    >
      {/* slide 1 */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
          Exchange student <span>experience</span>
        </h1>

        <img
          className="w-full h-full object-cover rounded-2xl"
          src={S1_hostFamily}
          alt=""
        />
      </motion.div>
      {/* slide 2 */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-4">
          Bexhill on-sea
        </h1>
        <p className="text-justify mb-6">
          Is a seaside town and civil parish in the Rother District in the
          county of East Sussex in South East England. It is located along the
          Sussex Coast and between the towns of Hastings and Eastbourne
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={S2_beach}
            alt=""
          />
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={S2_bexhill}
            alt=""
          />
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={S2_sea}
            alt=""
          />
        </div>
      </motion.div>
      {/* slide 3 */} {/* LOCATION */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
          Location
        </h1>
        <div className="flex justify-center gap-4">
          <img
            className="w-full md:w-auto h-96 object-cover rounded-2xl"
            src={S3_england}
            alt="England"
          />
          <img
            className="w-full md:w-auto h-96 object-cover rounded-2xl"
            src={S3_locationCity}
            alt="City"
          />
        </div>
      </motion.div>
      {/* slide 4 */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
          Where did I study?
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 w-full">
              <img
                src={S4_college}
                alt="My college"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
            <div className="md:w-1/2 w-full flex flex-col items-center justify-center text-center md:text-left mt-4 md:mt-0">
              <h2 className="text-2xl">Bexhill college</h2>
              <p className="hidden md:block ml-8 text-xl">
                Bexhill College is a sixth form college in the south-east of
                England. The college is based in Bexhill-on-Sea, East Sussex and
                is located on Penland Road, north-east of the town centre. The
                college is rated Outstanding as of its latest Ofsted report,
                which took place in 2024.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      {/* slide 5 */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl xl:text-5xl md:text-left text-center mb-8">
          What did I study?
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 w-full">
              <img
                className="w-full h-auto object-contain rounded-2xl"
                src={S5_business}
                alt="Business"
              />
            </div>
            <div className="md:w-1/2 w-full flex flex-col items-center justify-center text-center md:text-left mt-4 md:mt-0">
              <h2 className="text-2xl">Business</h2>
              <p className="hidden md:block ml-8 text-xl">
                In this Business course, I learned how the commercial world
                operates, from small start-ups to multinational corporations.
                Using real and current case studies, I developed business
                knowledge and skills in data interpretation and problem-solving,
                aiding in making tactical and strategic decisions in various
                business environments.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 w-full">
              <img
                className="w-full h-auto object-contain rounded-2xl"
                src={S5_mate}
                alt="Mathematics"
              />
            </div>
            <div className="md:w-1/2 w-full flex flex-col items-center justify-center text-center md:text-left mt-4 md:mt-0">
              <h2 className="text-2xl">Mathematics</h2>
              <p className="hidden md:block ml-8 text-xl">
                The course is divided into pure mathematics, mechanics, and
                statistics. Pure mathematics builds on GCSE topics like algebra,
                functions, graphs, trigonometry, and vectors, and introduces
                differentiation and integration. Statistics expands on GCSE
                concepts with a focus on probability and hypothesis testing.
                Mechanics studies the motion of objects and the forces
                influencing them.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 w-full">
              <img
                className="w-full h-auto object-contain rounded-2xl"
                src={S5_economics}
                alt="Economics"
              />
            </div>
            <div className="md:w-1/2 w-full flex flex-col items-center justify-center text-center md:text-left mt-4 md:mt-0">
              <h2 className="text-2xl">Economics</h2>
              <p className="hidden md:block ml-8 text-xl ">
                In this course, I learned how markets operate and the role of
                government in addressing market failures. I analyzed economic
                performance measures and assessed macroeconomic policies.
                Studying Economics allowed me to debate issues like unemployment
                benefits and the impact of immigration on societal wealth.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      {/* slide 6 */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
          Facilities
        </h1>
        <p className="mb-6 text-xl">
          Bexhill College boasts modern facilities for various interests,
          including a theatre for performances, music rooms for practice and
          recording, extensive sports amenities, a variety of dining options,
          and recreational spaces for gaming, studying, and relaxation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          <img
            className="w-full md:w-auto md:max-w-xs h-auto object-contain rounded-2xl"
            src={S6_band}
            alt="Band Room"
          />
          <img
            className="w-full md:w-auto md:max-w-xs h-auto object-contain rounded-2xl"
            src={S6_library}
            alt="Library"
          />
          <img
            className="w-full md:w-auto md:max-w-xs h-auto object-contain rounded-2xl"
            src={S6_refectory}
            alt="Refectory"
          />
        </div>
      </motion.div>
      {/* slide 7 */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
          Enrichment Courses
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <ul className="mb-6 md:w-1/2 w-full text-left md:text-3xl  text-2xl list-disc list-inside">
            <li>Fitness and Sport</li>
            <li>English, Humanities</li>
            <li>Languages Art’s</li>
            <li>Media and Performance</li>
            <li>Food</li>
            <li>Health & Social Care</li>
            <li>Social Sciences</li>
            <li>Business Economics & Law</li>
            <li>Maths and I.T</li>
            <li>Science</li>
            <li>Cross College</li>
          </ul>
          <div className="flex flex-col md:w-1/2 w-full justify-center items-center gap-4">
            <img
              className="w-54 md:w-80 h-auto object-cover rounded-2xl"
              src={S7_basket}
              alt="Basket"
            />
            <img
              className="w-54 md:w-80 h-auto object-cover rounded-2xl"
              src={S7_chemistry}
              alt="Chemistry"
            />
            <img
              className="w-54 md:w-80 h-auto object-cover rounded-2xl"
              src={S7_football}
              alt="Football"
            />
          </div>
        </div>
      </motion.div>
      {/* slide 8 */}
      {/* slide 7 */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
          Host Family
        </h1>
        <p className="mb-6 text-xl">
          I lived with a loving host family with whom I frequently spent time,
          going to the cinema, and enjoying each other's company. Though my time
          with them has passed, we still keep in touch and I hope to see them
          again soon in the future.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          <img
            className="w-full md:w-auto h-80 object-cover rounded-2xl"
            src={S8_kid}
            alt="Kid"
          />
          <img
            className="w-full md:w-auto h-80 object-cover rounded-2xl"
            src={S8_london}
            alt="London"
          />
          <img
            className="w-full md:w-auto h-80 object-cover rounded-2xl"
            src={S1_hostFamily}
            alt="Host Family"
          />
        </div>
      </motion.div>
      {/* slide 9 */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
          Experiences
        </h1>
        <p className="mb-6 text-xl">
          I got to know and adapted to a different lifestyle, traveling and
          meeting new places and people that enriched me.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          <img
            className="w-full md:w-auto h-80 object-cover rounded-2xl"
            src={S9_brighton}
            alt="Kid"
          />
          <img
            className="w-full md:w-auto h-80 object-cover rounded-2xl"
            src={S9_bros}
            alt="London"
          />
          <img
            className="w-full md:w-auto h-80 object-cover rounded-2xl"
            src={S9_nino}
            alt="Host Family"
          />
        </div>
      </motion.div>
      {/* slide 10 */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
          What I learned
        </h1>
        <p className="mb-6 text-xl">
          This was one of the most significant and transformative experiences of
          my life. The most enriching aspect was meeting people from around the
          world who provided me with new perspectives and ways of seeing the
          world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          <img
            className="w-full md:w-auto h-80 object-cover rounded-2xl"
            src={S10_bruxell}
            alt="Kid"
          />
          <img
            className="w-full md:w-auto h-80 object-cover rounded-2xl"
            src={S10_flags}
            alt="London"
          />
          <img
            className="w-full md:w-auto h-80 object-cover rounded-2xl"
            src={S10_sun}
            alt="Host Family"
          />
        </div>
      </motion.div>
      {/* slide 11 */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl  xl:text-5xl md:text-left text-center mb-8">
          Thank you
        </h1>
        <div className="flex justify-center gap-4">
          <img
            className="w-full md:w-auto h-96 object-cover rounded-2xl"
            src={S11_thankyou}
            alt="Host Family"
          />
          <img
            className="w-full md:w-auto h-96 object-cover rounded-2xl"
            src={S11_nature}
            alt="Host Family"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SectionWrapper(Pcto, "");
