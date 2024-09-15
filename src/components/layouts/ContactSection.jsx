import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      className="flex min-h-screen w-full items-center justify-center bg-slate-100 p-8 text-center dark:bg-slate-950"
      id="Contact"
    >
      <div>
        <h2 className="text mb-10 text-2xl font-bold text-slate-600 dark:text-emerald-300">
          Let's stay in touch!
        </h2>
        <h3 className="mb-10 text-slate-600 dark:text-slate-300">
          Feel free to reach out for collaborations or questions!
        </h3>
        <div className="mb-5 flex justify-center">
          <a
            href="https://github.com/fardanmaulaazizi"
            className="mr-3 text-3xl text-slate-600 dark:text-emerald-300"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/fardanmaula/"
            className="mr-3 text-3xl text-slate-600 dark:text-emerald-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:fardanmaula114@gmail.com"
            className="text-3xl text-slate-600 dark:text-emerald-300"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="mb-5 text-slate-600 dark:text-slate-300">Or</p>
        <a
          href="/cv/cv-fardan-maula-azizi.pdf"
          className="font-bold text-slate-600 underline hover:text-slate-300 dark:text-emerald-300"
        >
          Download My CV
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
