import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

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

const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

/* PctoImage card */
const PctoImage = ({ name, image }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className="bg-tertiary p-5 rounded-2xl mx-auto"
    >
      <div className="relative w-full">
        <img
          src={image}
          alt="project_image"
          className="w-full h-auto object-contain rounded-2xl"
        />
      </div>

      <h1 className="text-center mt-5 text-xl">{name}</h1>
    </motion.div>
  );
};



const Pcto = () => {
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

        <PctoImage name={"my host family"} image={S1_hostFamily} />
      </motion.div>

      {/* slide 2 */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-4">
          Bexhill on-sea
        </h1>
        <p className="text-justify mb-6">
          Is a seaside town and civil parish in the Rother District in the
          county of East Sussex in South East England. It is located along
          the Sussex Coast and between the towns of Hastings and Eastbourne
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img className="w-full h-full object-cover rounded-2xl" src={S2_beach} alt="" />
          <img className="w-full h-full object-cover rounded-2xl" src={S2_bexhill} alt="" />
          <img className="w-full h-full object-cover rounded-2xl" src={S2_sea} alt="" />
        </div>
      </motion.div>

      {/* slide 3 */} {/* LOCATION */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
          Location
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {/* container first image */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 w-full">
              <img
                src={S3_england}
                alt="position in England"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
            <div className="md:w-1/2 w-full flex items-center justify-center text-center md:text-left mt-4 md:mt-0">
              <h2>Position in England</h2>
            </div>
          </div>

          {/* container second image */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 w-full">
              <img
                src={S3_locationCity}
                alt="position in City"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
            <div className="md:w-1/2 w-full flex items-center justify-center text-center md:text-left mt-4 md:mt-0">
              <h2>Position in City</h2>
            </div>
          </div>
        </div>
      </motion.div>




      {/* slide 4 */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
          Where did I study?
        </h1>
        <p className="md:text-right text-center mb-6">
          Bexhill College offers diverse courses for nearly 2000 students aged
          16-19, with modern facilities and emphasis on extracurricular
          activities like sports and performing arts.
        </p>

        <div className="flex flex-col gap-4">

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 w-full">
              <img
                src={S4_college}
                alt="My college"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
            <div className="md:w-1/2 w-full flex items-center justify-center text-center md:text-left mt-4 md:mt-0">
              <h2>My college</h2>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 w-full">
              <img
                src={S4_bus}
                alt="Position in City"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
            <div className="md:w-1/2 w-full flex items-center justify-center text-center md:text-left mt-4 md:mt-0">
              <h2>Position in City</h2>
            </div>
          </div>

        </div>
      </motion.div>



      {/* slide 5 */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
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
              <h2>Business</h2>
              <p className="hidden md:block">Detailed description about Business studies goes here.</p>
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
              <h2>Mathematics</h2>
              <p className="hidden md:block">Detailed description about Mathematics studies goes here.</p>
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
              <h2>Economics</h2>
              <p className="hidden md:block">bla bla bla bla bla bla bla bla bla</p>
            </div>
          </div>

        </div>
      </motion.div>



      {/* slide 6 */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
          Facilities
        </h1>
        <p className="mb-6">
          Bexhill College boasts modern facilities for various interests,
          including a theatre for performances, music rooms for practice and
          recording, extensive sports amenities, a variety of dining options,
          and recreational spaces for gaming, studying, and relaxation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          <img className="w-full md:w-auto md:max-w-xs h-auto object-contain rounded-2xl" src={S6_band} alt="Band Room" />
          <img className="w-full md:w-auto md:max-w-xs h-auto object-contain rounded-2xl" src={S6_library} alt="Library" />
          <img className="w-full md:w-auto md:max-w-xs h-auto object-contain rounded-2xl" src={S6_refectory} alt="Refectory" />
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
            <img className="w-54 md:w-80 h-auto object-cover rounded-2xl" src={S7_basket} alt="Basket" />
            <img className="w-54 md:w-80 h-auto object-cover rounded-2xl" src={S7_chemistry} alt="Chemistry" />
            <img className="w-54 md:w-80 h-auto object-cover rounded-2xl" src={S7_football} alt="Football" />
          </div>
        </div>
      </motion.div>



      {/* slide 8 */}

      {/* slide 7 */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
          Host Family
        </h1>
        <p className="mb-6">
          I lived with a loving host family with whom I frequently spent time,
          going to the cinema, and enjoying each other's company. Though my
          time with them has passed, we still keep in touch and I hope to see
          them again soon in the future.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          <img className="w-full md:w-auto h-80 object-cover rounded-2xl" src={S8_kid} alt="Kid" />
          <img className="w-full md:w-auto h-80 object-cover rounded-2xl" src={S8_london} alt="London" />
          <img className="w-full md:w-auto h-80 object-cover rounded-2xl" src={S1_hostFamily} alt="Host Family" />
        </div>
      </motion.div>



      {/* slide 9 */}

      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
        Experiences
        </h1>
        <p className="mb-6">
        I got to know and adapted to a different lifestyle, traveling and
          meeting new places and people that enriched me.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          <img className="w-full md:w-auto h-80 object-cover rounded-2xl" src={S9_brighton} alt="Kid" />
          <img className="w-full md:w-auto h-80 object-cover rounded-2xl" src={S9_bros} alt="London" />
          <img className="w-full md:w-auto h-80 object-cover rounded-2xl" src={S9_nino} alt="Host Family" />
        </div>
      </motion.div>

      {/* slide 10 */}


      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
        What I learned
        </h1>
        <p className="mb-6">
        This is was one of the best and most important experiences of my
          life that changed me deeply. The most enrichfull thing was meeting
          new people from all the world that gave me and teached me a
          different lent with whith seing the world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          <img className="w-full md:w-auto h-80 object-cover rounded-2xl" src={S10_bruxell} alt="Kid" />
          <img className="w-full md:w-auto h-80 object-cover rounded-2xl" src={S10_flags} alt="London" />
          <img className="w-full md:w-auto h-80 object-cover rounded-2xl" src={S10_sun} alt="Host Family" />
        </div>
      </motion.div>

      {/* slide 11 */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
          Thank you
        </h1>
        <div className="flex justify-center gap-4">
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S11_thankyou} alt="" />
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S11_nature} alt="" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SectionWrapper(Pcto, "");
