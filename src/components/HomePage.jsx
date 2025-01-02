import React from "react";
import { Link } from "react-router-dom";
import "./styles/HomePage.css"; // Import the CSS file

const HomePage = () => {
  return (
    <div>
      <div className="hero">
        <h1>Welcome to my Computational Neuroscience Journey</h1>
        <p>
          Exploring the intersection of neural networks, consciousness, and
          artificial intelligence through research and experimentation
        </p>
      </div>

      <main className="container">
        <div className="post-grid">
          <article className="post-preview">
            <h2>
              <a href="#">
                Understanding Neural Networks Through the Lens of Neuroscience
              </a>
            </h2>
            <p>
              Exploring the fascinating parallels between biological neural
              networks and their artificial counterparts...
            </p>
            <div className="post-meta">
              <span>January 2, 2025</span>
              <span>8 min read</span>
            </div>
          </article>

          <article className="post-preview">
            <h2>
              <a href="#">The Role of Chaos in Neural Systems</a>
            </h2>
            <p>
              Investigating how chaotic dynamics in neural systems contribute to
              information processing...
            </p>
            <div className="post-meta">
              <span>December 28, 2024</span>
              <span>6 min read</span>
            </div>
          </article>

          <article className="post-preview">
            <h2>
              <a href="#">Emergence of Consciousness in Complex Systems</a>
            </h2>
            <p>
              A deep dive into how consciousness might emerge from the complex
              interactions within neural networks...
            </p>
            <div className="post-meta">
              <span>December 25, 2024</span>
              <span>10 min read</span>
            </div>
          </article>
        </div>
      </main>

      <footer>
        <p>&copy; 2025 Neuro Ghost Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
