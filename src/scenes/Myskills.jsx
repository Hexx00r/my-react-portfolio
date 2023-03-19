  import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Myskills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
     {/* HEADER AND IMAGE SECTION */}
     <div className="md:flex md:justify-between md:gap-16 mt-32">
       <motion.div
       className="md:w-1/3"
       innitial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       transition={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0},
       }}
       >
        <p className="font-playfiar font-semibold text-4xl mb-5">
          My <span className="text-red">SKILLS</span>
        </p> 
        <LineGradient width="w-1/3" />
        <p className="mt-2 mb-7">
        Mern stack Development using Node Js Express and Mongodba and React js, Good Problem Solving Skills, Buildig scallable Restful APIs, Using Stripes as a payment gateaway.
        </p>      
       </motion.div>

       <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-orange-300 before:z-[-1]"
            >
              <img
                alt="skilss"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img
              alt="skills"
              className="z-10" 
              src="assets/skills-image.png"
            />
          )}
       </div>
     </div>

     {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          "Built several projects using MERN stack: MongoDB, Express.js, React, and Node.js. Enjoyed the efficiency, flexibility, and seamless integration.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-rose-500 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          "Developing a MERN-based social media platform to connect individuals worldwide, with real-time messaging and AI-powered content recommendations."
          </p>
        </motion.div>

        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-orange-400 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          "Create dynamic web apps with the MERN stack! Use MongoDB, Express.js, React, and Node.js to build scalable and efficient full-stack applications."
          </p>
        </motion.div>
      </div>
    </section>
  )
}


export default Myskills;