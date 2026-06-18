import "./Hero.css";
import { MathJax } from "better-react-mathjax";
import profileImage from "../../assets/profile.png";
// adjust path if Hero.jsx is in a different folder

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <p className="label hero-label">
            Mathematics of Computation · Software Systems · Full-Stack Development
          </p>

          <h1 className="hero-title">
            Daniil Malakhov
          </h1>

          <p className="hero-description">
            Hello! I'm Daniil, a UCLA Mathematics of Computation student building
            full-stack applications, software tools, and technical projects at
            the intersection of math and software engineering.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
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

          <p className="hero-equation">
            Current Favorite Formula: <br />
            <span className="equation">
              <MathJax inline>
                {"\\( f(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k \\)"}
              </MathJax>
            </span>
          </p>
        </div>

        <div className="hero-image-wrapper">
          <img
            src={profileImage}
            alt="Daniil Malakhov"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;