import React, {useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Summary.css";

const Summary = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS using plural word */
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 75 },
    { skill: "React Native", ratingPercentage: 75 },
    { skill: "Ruby on Rails", ratingPercentage: 85 },
    { skill: "Python", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: ".NET", ratingPercentage: 75 },
    { skill: "Azure", ratingPercentage: 90 },
    { skill: "AWS", ratingPercentage: 90 },
    { skill: "Node.JS", ratingPercentage: 70 },
    { skill: "Redux", ratingPercentage: 70 },



  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "June", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at once",
      subHeading: "Technologies Used: ReactJS, Bootstrap, Git, Heroku",
    },
    {
      title: "Vegan Delivery Application",
      duration: { fromDate: "May", toDate: "2022" },
      description:
        "An E-commerce App that allows users to login and logout as well as adding new categories and foodtypes. The Application allows the users to CRUD items using an API. The Application is deployed on Azure."
        ,
      subHeading: "Technologies Used: Ruby, Bootstrap, Git, Heroku",
    },
    {
      title: "Candle E-Commerce Store",
      duration: { fromDate: "April", toDate: "2022" },
      description:
        "A Candle E-Commerce Store thats allows you to shop for various items in the store. The Application has variables and attributes to enable easy filteration of data items. The Application is currently online and it was created using WordPress.",
      subHeading: "Technologies Used: ReactJS, Bootstrap",
    },
    {
      title: "E-commerce Website",
      duration: { fromDate: "Dec", toDate: "2021" },
      description:
        "Online ecommerce website for showcasing and selling products online with payment system integration",
  
    },
  ];

  /*  Education */
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Altcademy"}
        subHeading={"CODING BOOTCAMP"}
        fromDate={"2021"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"University Of Port Harcourt "}
        subHeading={"BACHELORS IN EDUCATION"}
        fromDate={"2013"}
        toDate={"2016"}
      />
      <ResumeHeading
        heading={"Texas Southern University ~ Houston, TX USA"}
        subHeading={"BACHELORS IN ACCOUNTING"}
        fromDate={"2009"}
        toDate={"2012"}
      />
      <ResumeHeading
        heading={"ITTT"}
        subHeading={"CERTIFIED ESL TEACHER "}
        fromDate={"2020"}
        toDate={"∞"}
      />
      <ResumeHeading
        heading={"High School"}
        subHeading={"Atlantic Hall Secondary School"}
        fromDate={"2003"}
        toDate={"2009"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
       
        <div className="experience-description">
          <span className="resume-description-text">
            Backend developer at INNOUS (September 2021 - December 2021)
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed an ecommerce online website with the dashboard for
            managing products, managing reviews, users, and payments.
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.
            Using ~  MongoDb, React , Express and Node JS
          </span>
          <br />

          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

  

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Web Development"
        
        description="I enjoy coding as a hobby and the fulfillment i get from creating software."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I love to challenge my reflexes a lot while competing in football games , pushing the rank and having interactive gaming sessiosn excites me the most.
        some of my favourite games are EA FIFA (Gamertag: @obideyvex19 ~PS)"
      />
      <ResumeHeading
        heading="Sports/Fitness"
        description="Exercising gives me the ability to have a better mental health and emotional wellbeing."
      />
      <ResumeHeading
        heading="Music"
        description="I enjoy listening to soothing music"
      />
      <ResumeHeading
      heading="Art (Graphic or 3d)"
      description="I have a knack for art. I love giving 2d objects i draw life by animating them on Blender or Maya. "
    />
    </div>,
    
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt=""
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="summary-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="summary-content">
        <ScreenHeading title={"Summary"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;