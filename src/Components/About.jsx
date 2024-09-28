/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I’m Akhilesh Pratap Shahi, a dedicated Data Engineer with over 5 years of experience in designing and optimizing data pipelines, solving complex data problems, and enhancing customer experiences. Currently, I’m a Deputy Manager at Jio, where I specialize in building scalable data architectures and leveraging technologies like Apache Spark, Hadoop, and Azure Databricks.\n\nWith a strong foundation in Python, Scala, and Java, and hands-on expertise in Big Data ecosystems, I’m passionate about pushing the boundaries of data engineering. Whether I’m developing solutions in cloud environments or delivering guest lectures on Python and Java, my goal is to empower others with knowledge and create impactful, data-driven outcomes.\n\nI’m also pursuing an M.S. in Computer Science with a focus on ML/AI, aiming to expand my expertise in emerging technologies. I invite you to explore my portfolio to learn more about my journey and projects.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
"Data Engineering",
"designing",
"building",
"optimizing scalable data pipelines",
"ETL/ELT processes",
"Apache Spark", 
"Hadoop",
"Azure Databricks",
"Python", 
"Scala",
"Java", 
"SQL",
"Cloud and Big Data Technologies",
"Google BigQuery",
"Big Data",
"Apache Kafka",
"PySpark",
"Data Modeling & Analysis",
"Data modeling", 
"Data wrangling",
"Data visualization",
"Machine Learning & AI",
"Leadership & Communication",
"mentoring teams", 
"delivering technical lectures", 
"collaborating across departments"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Thank you for taking the time to visit my profile and learn a little bit about me. I hope you find something here that catches your interest!";
const highlists = ["🚀 I’m a B.Tech Graduate major in Computer Science",
  "👨My Technical skill are Python, Java 8, DSA, J2SE, J2EE, Servlet, Spring, Hibernate, Spring Boot, JSP, C, C++, OOPS, JPA Repository, Maven, Groovy, etc.",
  "💬 I am currently learning Data Science , NLP , Machine Learning , Data Analysis",
  "📫 How to reach me akhileshpra.shahi@gmail.com"
];
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>
          {detailOrQuote},
          <ul
          style={{
            textAlign: "left",
            columns: 1,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {highlists.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}</ul></p>
      </div>
    </section>
  );
};

export default About;
