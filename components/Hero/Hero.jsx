import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">

        <p className="hero-highlight">UCLA Mathematics of Computation - Full-stack Developer</p>

        <h1 className="hero-title">
          Hi, I'm <span className="hero-name">Daniil</span>
        </h1>

        <p className="hero-description">
          I build clean full-stack applications, student tools, and practical
          software systems that turn ideas into polished products.
        </p>

        <div className="hero-actions">

          <a 
            href="#projects" 
            className="button button-primary"
          >
            View Projects
          </a>

          <a
            href="https://github.com/daanniill"
            className="button button-secondary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a 
            href="https://www.linkedin.com/in/daniil-malakhov-8420a0210/" 
            className="button button-secondary" 
            target="_blank" 
            rel="noreferrer"
          >
            LinkedIn
          </a>


        </div>
      </div>
    </section>
  );
}

export default Hero;