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
    <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <h1>x</h1>
        </div>
      </div>
      <h1>{name}</h1>
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
        <div className="flex justify-center gap-4">
          <img
            className="w-3 md:w-48 h-auto object-cover"
            src={S1_hostFamily}
            alt=""
          />
        </div>
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

      {/* slide 3 */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
          Location
        </h1>
        <div className="flex justify-center gap-4">
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S3_england} alt="" />
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S3_locationCity} alt="" />
        </div>
      </motion.div>

      {/* slide 4 */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
          Where did I study?
        </h1>
        <p className="md:text-right mb-6">
          Bexhill College offers diverse courses for nearly 2000 students aged
          16-19, with modern facilities and emphasis on extracurricular
          activities like sports and performing arts.
        </p>
        <div className="flex justify-center gap-4">
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S4_college} alt="" />
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S4_bus} alt="" />
        </div>
      </motion.div>
    
      {/* slide 5 */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
          What did I study?
        </h1>
        <div className="flex justify-center gap-4">
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S5_business} alt="" />
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S5_mate} alt="" />
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S5_economics} alt="" />
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
        <div className="flex justify-center gap-4">
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S6_band} alt="" />
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S6_library} alt="" />
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S6_refectory} alt="" />
        </div>
      </motion.div>

      {/* slide 7 */}
      <motion.div variants={textVariant()} className="mb-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
          Enrichment Courses
        </h1>
        <p className="mb-6">
          Fitness and Sport <br />
          English, Humanities <br />
          Languages Art’s <br />
          Media and Performance <br />
          Food <br />
          Health & Social care <br />
          Social Sciences <br />
          Business Economics & <br />
          Law Maths and I.T <br />
          Science <br />
          Cross College <br />
        </p>
        <div className="flex justify-center gap-4">
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S7_basket} alt="" />
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S7_chemistry} alt="" />
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S7_football} alt="" />
        </div>
      </motion.div>

      {/* slide 8 */}
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
        <div className="flex justify-center gap-4">
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S8_kid} alt="" />
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S8_london} alt="" />
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S1_hostFamily} alt="" />
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
        <div className="flex justify-center gap-4">
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S9_brighton} alt="" />
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S9_bros} alt="" />
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S9_nino} alt="" />
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
        <div className="flex justify-center gap-4">
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S10_bruxell} alt="" />
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S10_flags} alt="" />
          <img className="w-40 md:w-48 h-auto object-cover rounded-2xl" src={S10_sun} alt="" />
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
