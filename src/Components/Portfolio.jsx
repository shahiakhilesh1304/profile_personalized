/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    "title": "Cohort Intelligence",
    "description": "Managed pipeline to enhance targeted advertising and led product development, improving performance by 36.8%.",
    "url": "https://jioads.jio.com/"
  },
  {
    "title": "Point Of Interest",
    "description": "Designed ETL flows to integrate datasets and optimize user interest mapping within the Cohort Intelligence system.",
    "url": "https://jioads.jio.com/"
  },
  {
    "title": "Retargeting",
    "description": "Developed an ETL pipeline for user targeting, enhancing segmentation and improving marketing efficiency.",
    "url": "https://jioads.jio.com/"
  },
  {
    "title": "Custom Audience",
    "description": "Designed Flask API to trigger Spark jobs for personalized campaign targeting and SMS/RCS communications.",
    "url": "https://jioads.jio.com/"
  },
  {
    "title": "UIDUpload",
    "description": "Built a Flask API for user identification based on BPID, IFA, or secondary ID, ensuring precise targeting.",
    "url": "https://jioads.jio.com/"
  },
  {
    "title": "Intercambio",
    "description": "Developed data ingestion pipeline using Azure Databricks, reducing processing time by 45% for claims data.",
    "url": "https://github.com/shahiakhilesh1304/Intercambio.git/"
  },
  {
    "title": "Pizza Delivery Management",
    "description": "Platform-dependent pizza delivery management system built using C++.",
    "url": "https://github.com/shahiakhilesh1304/pizza-delivery-management"
  },
  {
    "title": "DumbCharades Game",
    "description": "Developed a PyGame-based 'Dumb Charades' game for location guessing using Python.",
    "url": "https://github.com/shahiakhilesh1304/DumbCharades"
  },
  {
    "title": "Mailing",
    "description": "Automated mailing system using Python with SMTP integration for report generation.",
    "url": "https://github.com/shahiakhilesh1304/mailing"
  },
  {
    "title": "FitBit Case Study",
    "description": "Case study analyzing data from a Fitbit band to predict human behavior based on their mood.",
    "url": "https://github.com/shahiakhilesh1304/FitBitCaseStudy"
  },
  {
    "title": "Panda Tutorial",
    "description": "Comprehensive tutorial on using Pandas library in Python for data analysis.",
    "url": "https://github.com/shahiakhilesh1304/PandaTutorial"
  },
  {
    "title": "Employee Management System",
    "description": "Java-based employee management system to manage employee details and records.",
    "url": "https://github.com/shahiakhilesh1304/Employee-Management-System"
  },
  {
    "title": "Loyaletics Business Case Study",
    "description": "Case study solving data challenges for leading global brands with AI and analytics.",
    "url": "https://github.com/shahiakhilesh1304/Loyaletics_Business_Case_Study"
  },
  {
    "title": "SOAP API",
    "description": "SOAP API using Spring Boot, Hibernate, and JPA repositories with MongoDB.",
    "url": "https://github.com/shahiakhilesh1304/SOAPAPI"
  },
  {
    "title": "Find Nearest Place to Target Sales",
    "description": "Python-based solution to find the nearest branch eligible to make a sale at the lowest cost.",
    "url": "https://github.com/shahiakhilesh1304/FindNearestPlaceToTargetSales"
  },
  {
    "title": "Activation and Inactivation of Patient Data",
    "description": "Managed activation and inactivation of patient data for healthcare systems.",
    "url": "https://github.com/shahiakhilesh1304/Activation-and-Inactivation-of-Patient-Data"
  },
  {
    "title": "Medanta Hospital Operations",
    "description": "Custom Groovy script for managing hospital operations at Medanta.",
    "url": "https://github.com/shahiakhilesh1304/MedantaCustonScript"
  },
  {
    "title": "Mailing and Report Creation",
    "description": "Automated mailing of reports using Python and SMTP integration.",
    "url": "https://github.com/shahiakhilesh1304/MailingAndReportCreation"
  },
  {
    "title": "PowerTuff",
    "description": "Power management and optimization system for SAR Group.",
    "url": "https://github.com/shahiakhilesh1304/PowerTuff"
  },
  {
    "title": "Mooving",
    "description": "Java-based APIs for managing collections in a database system.",
    "url": "https://github.com/shahiakhilesh1304/collectionapis"
  },
  {
    "title": "Livfast-Livguard Admin Module",
    "description": "Admin module for Livfast-Livguard systems, built using CSS.",
    "url": "https://github.com/shahiakhilesh1304/Livfast-Livguard-Admin-Module"
  },
  {
    "title": "Eagleshots",
    "description": "PHP-based project to manage photography operations.",
    "url": "https://github.com/shahiakhilesh1304/Eagleshots"
  },
  {
    "title": "TicTacToe",
    "description": "JavaScript-based Tic-Tac-Toe game.",
    "url": "https://github.com/shahiakhilesh1304/tictactoe.git"
  },
  {
    "title": "PhoneBook",
    "description": "Android-based SQLite app to manage contacts secretly.",
    "url": "https://github.com/shahiakhilesh1304/PhoneBook.git"
  },
  {
    "title": "Automation of Mentoring System",
    "description": "8-module web application for automating mentoring systems.",
    "url": "https://github.com/shahiakhilesh1304/Automation-of-mentoring-system.git"
  },
  {
    "title": "Java JDBC Project",
    "description": "Basic JDBC project using Java with menu-driven commands and input/output via the command line.",
    "url": "https://github.com/shahiakhilesh1304/Java.git"
  },
  {
    "title": "JioTV Analytics",
    "description": "Analyzes user clicks to views conversion rates, recommending related movies based on this data.",
    "url": "https://jio.com/jioTV"
  }
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
     
      </div>
    </section>
  );
};

export default Portfolio;
