import { useState,useRef} from "react";
import { motion} from "motion/react";
import {contactApp} from '/src/data.js';
import star from '/src/assets/img/asterisk-svgrepo-com.svg';
import Cursor from "/src/cursor";
import noise from '/src/assets/img/noise.webp';
import certfication from '/src/assets/img/Coursera LCMH8N0QIIM1.pdf';
import { frontEnd,tools } from "/src/data";
import emailjs from '@emailjs/browser';
const buttonVariants = {
  invisible: { scale: 0 },
  visible: { scale: 1, transition: { duration: 0.6,delay:1,ease:'easeIn' } },
  hover: {
    scale: 1.1,
    backgroundColor: "#EAD653",
    color: "#1A1D1B",
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.9, transition: { duration: 0.1 } },
};
const container = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};
function AboutMe({size}) {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true);
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          alert("Message sent successfully");
          formRef.current.reset();
        })
        .catch((error) => {
          console.error("Failed to send message", error);
          alert("Failed to send message");
        })
        .finally(() => setLoading(false));
    };
  const [hover,setHover] = useState(false);
  return (
    <section style={{backgroundImage:`url(${noise})`}}  className="flex flex-col items-center w-full bg-black text-white px-20 pb-12 font-normal cursor-[url(/src/assets/img/dot.png),_pointer]">
      {size==='w-screen h-screen' && <Cursor hover={hover} />}
      <div className="h-[744px] w-full flex justify-between items-center py-20 bg-cover bg-center">
        <motion.div variants={container} initial="hidden" whileInView="show" className="w-1/3 flex flex-col gap-5 self-start">
          <motion.h1 variants={item}    className="text-7xl flex flex-col w-full font-semibold overflow-x-hidden">
            <span onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="title self-start text-primary">FRONTEND</span>
            <span onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="title self-end">DEVELOPER</span>
          </motion.h1>
          <motion.p variants={item}  onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="text-lg text-start text-white/50 ">Hi, I’m Mohamad — a junior front-end developer passionate about crafting modern, responsive, and user-friendly web experiences.</motion.p>
          <motion.a
            onMouseEnter={()=>setHover(true)} 
            onMouseLeave={()=>setHover(false)}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            animate="visible"
            initial="invisible"
            className="border border-primary px-4 py-2 w-fit text-white rounded-lg"
            href={certfication}
            download='Mohamad_Abou_Hamoud_Certification.pdf'
          >Download certifaction</motion.a>
        </motion.div>
        <motion.div variants={container} initial="hidden" whileInView='show' className="w-1/3 flex flex-col items-baseline gap-2 self-end text-lg text-white/50">
            <motion.p variants={item} className="text-primary" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} >&lt;ul&gt;</motion.p>
            <motion.div variants={item}>
              <p onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="pl-10">&lt;li&gt;Based in Saida, Lebanon&lt;/li&gt;</p>
              <p onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="pl-10">&lt;li&gt;Born in 11 September 2003&lt;/li&gt;</p>
            </motion.div>
            <motion.p variants={item} className="text-primary" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>&lt;/ul&gt;</motion.p>
        </motion.div>
      </div>
      <div className="h-[744px] w-full flex flex-col  gap-20">
        <div className=" w-full h-10 flex justify-baseline items-center gap-2 border-b border-white/50 ">
          <img loading="lazy" alt="star icon" src={star} className="h-6 opacity-50 animate-spin"/>
          <h2 className="text-lg text-white/50 ">About me</h2>
        </div>
        <motion.p variants={container} initial='hidden' whileInView='show' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="text-2xl w-3/4 leading-relaxed flex flex-col gap-5 text-gray-200">
          <motion.span variants={item}>I’m a self-taught front-end web developer, dedicated to turning ideas into creative and impactful digital experiences.</motion.span>
          <motion.span variants={item}>I specialize in building seamless, responsive, and intuitive user interfaces using modern technologies like React and Tailwind CSS.</motion.span>
          <motion.span variants={item}>By prioritizing performance, accessibility, and thoughtful design, I strive to craft web experiences that are not only visually engaging but also deliver meaningful results.</motion.span>
        </motion.p>
      </div>
      <div className="h-[744px] w-full flex flex-col  gap-20">
        <div className=" w-full h-10 flex justify-baseline items-center gap-2 border-b border-white/50 ">
          <img loading="lazy" alt="star icon" src={star} className="h-6 opacity-50 animate-spin"/>
          <h2 className="text-lg text-white/50 ">My stack</h2>
        </div>
        <div className="flex flex-col gap-16">
        <div className="flex  justify-between">
            <h3 onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="text-6xl text-primary font-semibold h-fit">Front-end</h3>
            <motion.div variants={container} initial='hidden' whileInView='show' className="w-1/2 flex flex-wrap gap-8">
            {frontEnd.map((tech) => (
                <motion.div  variants={item} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} key={tech.name} className="flex items-center gap-3 w-40">
                        <img
                        loading="lazy"
                        src={tech.src}
                        alt={tech.name}
                        className="h-12 w-12 object-cover object-center"
                        />
                    <p className="text-lg text-white/50">{tech.name}</p>
                </motion.div>
            ))}
            </motion.div>
        </div>
        <div className="flex  justify-between">
            <h3 onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="text-6xl text-primary font-semibold h-fit">Tools</h3>
            <motion.div variants={container} initial='hidden' whileInView='show' className="w-1/2 flex flex-wrap gap-8">
            {tools.map((tool) => (
                <motion.div variants={item} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} key={tool.name} className="flex items-center gap-3 w-40">
                    <img
                    loading="lazy"
                    src={tool.src}
                    alt={tool.name}
                    className="h-12 w-12"
                    />
                <p className="text-lg text-white/50">{tool.name}</p>
                </motion.div>
            ))}
            </motion.div>
        </div>
        </div>
      </div>
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="min-h-[750px] w-full flex flex-col justify-center items-center text-center gap-10 px-4"
    >
      <motion.h2 variants={item} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="text-4xl sm:text-5xl font-semibold tracking-tight"> 
        Let’s Build Something Great Together
      </motion.h2>
      <motion.p variants={item} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="text-base sm:text-lg text-white/60 max-w-2xl">
        I’m always open to discussing new projects, creative ideas, or opportunities
        to bring your vision to life.
      </motion.p>
      <motion.form variants={item} ref={formRef} onSubmit={sendEmail} className="w-full max-w-xl flex flex-col gap-4 p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-lg">
        <div className="flex gap-3">
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Your name"
            required
            className="w-full rounded-lg px-4 py-3
                      bg-white/10 border border-white/20
                      text-white placeholder:text-white/50
                      focus:outline-none focus:border-primary
                      focus:ring-1 focus:ring-primary"
          />

          <input
            name="email"
            id="email"
            type="email"
            placeholder="Email address"
            required
            className="w-full rounded-lg px-4 py-3
                      bg-white/10 border border-white/20
                      text-white placeholder:text-white/50
                      focus:outline-none focus:border-primary
                      focus:ring-1 focus:ring-primary"
          />
        </div>

        <textarea
          rows={5}
          name="message"
          id="message"
          placeholder="Tell me about your project..."
          required
          className="w-full rounded-lg px-4 py-3
                    bg-white/10 border border-white/20
                    text-white placeholder:text-white/50
                    focus:outline-none focus:border-primary
                    focus:ring-1 focus:ring-primary resize-none"
        />

        <button
          disabled={loading}
          type="submit"
          className="mt-2 w-full py-3 rounded-lg font-medium
                    bg-primary text-black
                    hover:brightness-110 active:scale-[0.98]
                    transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </motion.form>

      {/* Divider */}
      <div className="w-full max-w-xl flex items-center gap-4">
        <div className="flex-1 h-px bg-white/20" />
        <p className="text-sm text-white/60 whitespace-nowrap">
          Or reach me directly
        </p>
        <div className="flex-1 h-px bg-white/20" />
      </div>

      {/* Social Icons */}
      <motion.div
        variants={item}
        className="flex justify-center items-center gap-4"
      >
        {contactApp.map((app, index) => (
          <a
            key={index}
            href={app.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="h-12 w-12 rounded-full
                      bg-white/10 border border-white/20
                      flex items-center justify-center
                      hover:bg-primary hover:border-primary
                      transition-all hover:-translate-y-1"
          >
            <img
              src={app.icon}
              alt=""
              className="h-6 w-6"
              loading="lazy"
            />
          </a>
        ))}
      </motion.div>
    </motion.div>
    </section>
  );
}

export default AboutMe;
