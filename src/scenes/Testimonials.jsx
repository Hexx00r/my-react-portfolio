import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Here's What People are Saying About My Work. Aliquam aliquet integer
          ut fames odio in at. At magna ornare dictum lectus.
        </p>
      </motion.div>
    
      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
        className="max-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
          "Thanks for all your hard work on the project. Your dedication to the stack really paid off, and we're thrilled with the results"
          </p>
        </motion.div>

        <motion.div
        className="max-auto relative bg-rose-500 max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl ">
          "Working with you has been a pleasure. You're an excellent communicator and a talented MERN stack developer. I look forward to collaborating with you again in the future."
          </p>
        </motion.div>
        
        <motion.div
        className="max-auto relative bg-orange-300 max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
          Exceptional MERN stack developer with impressive skills. Clean, well-organized code time and within budget."
          </p>
        </motion.div>
      </div>

  </section>
)
}
export default Testimonials;