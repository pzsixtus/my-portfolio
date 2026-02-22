import "../styles/Home.css";
import profilePic from "../assets/profile.jpg";

function Home() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Hello, I'm <span>Ikemefuna Sixtus</span>
        </h1>
        <h2>Web Developer</h2>
        <p>
          I am a passionate web developer focused on building clean, responsive,
          and scalable web applications. I enjoy learning new technologies and
          growing step by step.
        </p>
      </div>

      <div className="hero-image">
        <img src={profilePic} alt="Profile" />
      </div>
    </section>
  );
}

export default Home;
