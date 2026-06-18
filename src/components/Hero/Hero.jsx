import "./Hero.css";
import { MathJax } from "better-react-mathjax";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="label hero-label">
          Mathematics of Computation - Software Systems - Full-Stack Development
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
            <MathJax>
              {"\\( f(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k \\)"}
            </MathJax>
          </span>
        </p>
      </div>
    </section>
  );
}

export default Hero;