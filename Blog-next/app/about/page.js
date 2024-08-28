"use client";
import './about.css'
export default function About() {
       
  return (
    <main className="about-container">
      <div className="about-content">
        <h1>About Our Blog</h1>
        <p>
          Welcome to our blog! We are passionate about sharing stories,
          experiences, and ideas that spark curiosity and foster learning. Our
          mission is to create an engaging platform for readers who love to
          explore new perspectives.
        </p>

        <div className="vision-section">
          <h2>Our Vision</h2>
          <img
            src="https://www.risely.me/wp-content/uploads/2023/03/Risely-Featured-Image-Mohit-7-1024x576.webp"
            alt="Vision"
            className="about-image"
          />
          <p>
            We envision a world where knowledge is accessible to everyone. Our
            blog is dedicated to bringing insightful and diverse content to
            readers everywhere, inspiring them to think deeply and grow
            intellectually.
          </p>
        </div>

        <div className="mission-section">
          <h2>Our Mission</h2>
          <img
            src="https://fabrikbrands.com/wp-content/uploads/Company-Mission-Statement-1.jpg"
            alt="Mission"
            className="about-image"
          />
          <p>
            Our mission is to provide high-quality articles that inform,
            educate, and entertain. Whether you're looking for in-depth
            analysis, personal stories, or creative insights, our blog offers
            something for everyone.
          </p>
        </div>

        <div className="values-section">
          <h2>Our Core Values</h2>
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/691/352/original/core-values-concept-with-people-man-and-woman-raising-word-on-paper-together-with-modern-flat-style-free-vector.jpg"
            alt="Values"
            className="about-image"
          />
          <ul>
            <li>Inclusivity: We celebrate diverse voices and perspectives.</li>
            <li>Creativity: We believe in the power of creativity to inspire.</li>
            <li>Integrity: We are committed to providing accurate and honest content.</li>
            <li>Growth: We strive to continuously learn and evolve.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
