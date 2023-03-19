import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion"
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)")

return (
   <section
    id="home"
    className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
   >
    
   {/*IMAGE SECTION */}
  <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2"
  >{isAboveLarge ? (
    <div className="relative z-0 ml-20 before:absolute before:-top-0 before:-left-0 before:rounded-t-[400px]
            before:w-80 before:max-w-[40/assets/paul.png0px] md:before:max-w-[300px] before:h-96 before:border-2 before:border-orange-300 before:z-[-1]"
    >
 <img
      alt="profile"
      className="hover:filter hover:saturate-150 transition duration-500 z-5 w-full max-w-[400px] md:max-w-[600px]"
      src="assets/paul.png"
    />   
     </div> 
  ) : (
      <img
        alt="profile"
        className="z-10 w-full max-w-[400px] md:max-w-[600px]"
        src="assets/paul.png"
      />
  )}
  </div>

    {/* MAIN TEXT*/}
  <div className="z-30 basis-2/5 mt-12 md:mt-32">
    {/* HEADINGS */}
     <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.5 }}
     transition={{ duration: 0.5 }}
     variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0},
     }}
     >
     <p className="text-6xl font-playfair z-10 text-center md:text-start">
      Paul {""}
      <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
      >
        Sunny
      </span>
     </p>

     <p className="mt-10 mb-7 text-sm text center md:text-start">
     I am a Aspiring full stack developer with a role is to use MongoDB, Express.js, React, and Node.js to design, develop, and maintain web applications. I will work with both front-end and back-end technologies to build full-stack web applications, develop RESTful APIs, and integrate different systems and services. Additionally, I will be responsible for optimizing the performance of the application, ensuring its scalability, and ensuring the security of the application. Good communication skills and the ability to work collaboratively with other developers are also important for success in this role.
     </p>
     </motion.div>

     {/* CALL TO ACTIONS */}
     <motion.div
     className="flex mt-5 justify-center md:justify-start"
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.5 }}
     transition={{ delay: 0.2, duration: 0.5 }}
     variants={{
      hidden: { opacity : 0, x: -50 },
      visible: { opacity:1, x: 0},
     }}>
     
     <AnchorLink className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
      onClick={() => setSelectedPage("contact")}
      href="#contact"
      >
        Contact Me
     </AnchorLink>
     <AnchorLink
     className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
     onClick={() => setSelectedPage("contact")}
     href="#contact"
     >
     <div className="bg-deep-blue hover:text-rose-500 transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
        Let's talk.
     </div>
     </AnchorLink>
     </motion.div>

     <motion.div
     className="flex mt-5 justify-center md:justify-start"
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.5 }}
     transition={{ delay: 0.4, duration: 0.5 }}
     variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0},
     }}>
        <SocialMediaIcons />
     </motion.div>

  </div>
 </section>
)};
 

export default Landing;