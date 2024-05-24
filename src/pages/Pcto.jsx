import React from "react";

import Tilt from "react-tilt";

import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

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
    <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
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
      </Tilt>
    </motion.div>
  );
};

const Pcto = () => {
  return (
    <div>
      {/* slide 1 */}
      <div className="container mx-auto max-w-screen-lg">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
            Exchange student <span>experience</span>
          </h1>

          <div className="flex justify-center gap-4">
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S1_hostFamily}
              alt=""
            />            
          </div>
        </div>
      </div>

      {/* slide 2 */}
      <div className="container mx-auto max-w-screen-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center">
              Bexhill on-sea
            </h1>
            <p className="text-justify">
              Is a seaside town and civil parish in the Rother District in the
              county of East Sussex in South East England. It is located along
              the Sussex Coast and between the towns of Hastings and Eastbourne
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img className="w-full h-full object-cover" src={S2_beach} alt="" />
            <img
              className="w-full h-full object-cover"
              src={S2_bexhill}
              alt=""
            />
            <img className="w-full h-full object-cover" src={S2_sea} alt="" />
          </div>
        </div>
      </div>

      {/* slide 3 */}
      <div className="container mx-auto max-w-screen-lg">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
            Location
          </h1>
          <div className="flex justify-center gap-4">
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S3_england}
              alt=""
            />
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S3_locationCity}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* slide 4 */}

      <div className="container mx-auto max-w-screen-lg">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
          Where did I study?
          </h1>
          <p className="md:text-right">
            Bexhill College offers diverse courses for nearly 2000 students aged
            16-19, with modern facilities and emphasis on extracurricular
            activities like sports and performing arts.
          </p>
          <div className="flex justify-center gap-4">
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S4_college}
              alt=""
            />
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S4_bus}
              alt=""
            />            
          </div>
        </div>
      </div>
    
      {/* slide 5 */}
      <div className="container mx-auto max-w-screen-lg">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
            What did I study?
          </h1>
          <div className="flex justify-center gap-4">
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S5_business}
              alt=""
            />
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S5_mate}
              alt=""
            />
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S5_economics}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* slide 6 */}

      <div className="container mx-auto max-w-screen-lg">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
            Facilities
          </h1>
          <p>
            Bexhill College boasts modern facilities for various interests,
            including a theatre for performances, music rooms for practice and
            recording, extensive sports amenities, a variety of dining options,
            and recreational spaces for gaming , studying and relaxation
          </p>
          <div className="flex justify-center gap-4">
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S6_band}
              alt=""
            />
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S6_library}
              alt=""
            />
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S6_refectory}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* slide 7 */}

      <div className="container mx-auto max-w-screen-lg">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
            Enrichment Courses
          </h1>
          <p>
            Fitness and Sport <br />
            English, Humanities
            <br />
            Languages Art’s
            <br />
            Media and Performance
            <br />
            Food
            <br />
            Health & Social care
            <br />
            Social Sciences
            <br />
            Business Economics &<br />
            Law Maths and I.T
            <br />
            Science
            <br />
            Cross College
            <br />
          </p>
          <div className="flex justify-center gap-4">
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S7_basket}
              alt=""
            />
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S7_chemistry}
              alt=""
            />
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S7_football}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* slide 8 */}

      <div className="container mx-auto max-w-screen-lg">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
            Host Family
          </h1>
          <p>
            I lived with a loving host family with whom I frequently spent time,
            going to the cinema, and enjoying each other's company. Though my
            time with them has passed, we still keep in touch and I hope to see
            them again soon in the future.
          </p>
          <div className="flex justify-center gap-4">
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S8_kid}
              alt=""
            />
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S8_london}
              alt=""
            />
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S1_hostFamily}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* slide 9 */}

      <div className="container mx-auto max-w-screen-lg">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
            Experiences
          </h1>
          <p>
            I got to know and adapted to a different lifestyle, traveling and
            meeting new places and people that enriched me.
          </p>
          <div className="flex justify-center gap-4">
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S9_brighton}
              alt=""
            />
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S9_bros}
              alt=""
            />
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S9_nino}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* slide 10 */}

      <div className="container mx-auto max-w-screen-lg">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
            What I learned
          </h1>
          <p>
            This is was one of the best and most important experiences of my
            life that changed me deeply. The most enrichfull thing was meeting
            new people from all the world that gave me and teached me a
            different lent with whith seing the world.
          </p>
          <div className="flex justify-center gap-4">
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S10_bruxell}
              alt=""
            />
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S10_flags}
              alt=""
            />
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S10_sun}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* slide 10 */}
      <div className="container mx-auto max-w-screen-lg">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl md:text-left text-center mb-8">
            Thank you
          </h1>

          <div className="flex justify-center gap-4">
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S11_thankyou}
              alt=""
            />
            <img
              className="w-40 md:w-48 h-auto object-cover"
              src={S11_nature}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Pcto, "");
