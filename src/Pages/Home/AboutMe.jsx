export default function AboutMe() {
  return (
    <section id="AboutMe" className="  container px-4 mx-auto max-w-[1280px]">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="text-justify text-2xl text-slate-600">
            Hi, I’m Anindya Nag, a lecturer at Northern University of Business
            and Technology Khulna (NUBTK), Bangladesh. I hold a Bachelor’s
            degree from Adamas University, Kolkata, and an MSc in Computer
            Science and Engineering from Khulna University.
          </p>
          <p className="text-justify text-2xl text-slate-600">
            My research focuses on NLP, Artificial Intelligence, IoT,
            Blockchain, Cloud Computing, and Networking Systems. I am passionate
            about advancing technology through research and inspiring future
            tech innovators.
          </p>
        </div>
      </div>
    </section>
  );
}
