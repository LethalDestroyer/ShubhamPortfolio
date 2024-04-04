/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shubham Harne",
  title: "Hi all, I'm Shubham!",
  subTitle: emoji(
    "A passionate Python and DevOps Software Developer 🚀, I bring over 4 years of hands-on experience in crafting robust infrastructures using Terraform. My expertise spans across a diverse array of technologies, prominently including AWS services such as EC2, S3, VPC, Route53, IAM, Security Groups, ELB, ACM, and RDS. Leveraging Python libraries like boto3, I've automated and optimized various tasks, enhancing operational efficiency."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/LethalDestroyer",
  linkedin: "https://www.linkedin.com/in/shubh-harne-900175250/",
  gmail: "harne.shubh@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/shubham.harne.507",
  medium: "https://medium.com/@shubh.harne13",
  instagram: "https://www.instagram.com/__shubh01_",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I love to explore different technologies and solve complex problems. These are some of the technologies I have been exploring",
  skills: [
    emoji(
      "⚡Develop Highly Secure and Scalable Softwares"
    ),
    emoji("⚡Passionate about Leveraging Technological advances for the betterment of Society!"),
    emoji(
      "⚡Automate Data, Machine Learning, and Deployment pipelines using Jenkins and DevOps"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "P. R. POTE PATIL COLLEGE OF ENGG",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Engineering, Electronics and TeleCommunications Engineering",
      duration: "August 2017 - April 2020",
      desc: "Academics Project's ",
      descBullets: [
        "OOP",
        "System Design",
        "Microcontrollers",
        "Operating Systems",
        "Artificial Intelligence",
        "Fundamentals of Programming Langauge",
        "Represented College at Various Dance and Cricket Competitions for 3 years.",
        "Created a one project called Banking application based on Php language in final year"
      ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend (Python)", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "AWS",
      progressPercentage: "70%"
    },
    {
      Stack: "jenkins",
      progressPercentage: "60%"
    },
    {
      Stack: "terraform",
      progressPercentage: "65%"
    },
    {
      Stack: "Docker",
      progressPercentage: "70%"
    },
    {
      Stack: "Kubernates",
      progressPercentage: "30%"
    }
    
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr. Product Engineer",
      company: "LTIMindtree",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Oct 2022 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Capabilities: EC2, ECR, ECS, S3, SNS, VPC, DynamoDB, DevOps, Terraform, Apache PySpark, Data Cleaning, Data Modeling, Data Visualization, Distributed Systems",
        "Completely re-designed the existing developer centric deployment into automated CICD using Jenkins for Containerized, Batch and Real-Time deployments, increasing efficiency by 45%.",
        "Developed Automatic Resource provisioning using Terraform in AWS",
        "Automated testing module using Python scripts.",
        "Created API's based on FASTApi framework.",
        "Profeciently managed and implemented the KONG API gateway for both QA and Dev env.",
        "Engaged in configuration and management of intermidiate services such as ECR, ECS, S3 and Others"
      ]
    },
    {
      role: "Software Developer",
      company: "Chromium Web Solutions Pvt.Ltd",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Aug 2019 – July 2022",
      descBullets: [
      "Create logics for the Data processing and Computations.",
      "Responsible for the coding development using Django and MySQL.",
      "CRUD Operation using the REST",
      "Working on GIT-HUB repositories.",
      "CRUD Operation using flask and MySQL",
      "Creating API and showing it to the swagger",
      "Integration of user facing element develop by the front-end developers with the server side  logic."
    ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  // title: "Big Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  // projects: [
  //   {
  //     // image: require("./assets/images/saayaHealthLogo.webp"),
  //     // projectName: "Saayahealth",
  //     // footerLink: [
  //     //   {
  //     //     name: "Visit Website",
  //     //     url: "http://saayahealth.com/"
  //     //   }
  //     //   //  you can add extra buttons here.
  //     // ]
  //   },
  //   {
  //     // image: require("./assets/images/nextuLogo.webp"),
  //     // projectName: "Nextu",
  //     // footerLink: [
  //     //   {
  //     //     name: "Visit Website",
  //     //     url: "http://nextu.se/"
  //     //   }
  //     // ]
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
      {
        title: "Python",
        subtitle: "Completed Python Learning Course and used the knowledge to apply to a Project.",
        image: require("./assets/images/python.png"),
        footerLink: [
          {name: "Certification", url: "https://drive.google.com/file/d/1_lDJPvdltRP5ksxiBxvnl7AzFlbp_qwJ/view?usp=sharing"},
          {
            name: "See Project",
            url: "https://github.com/ameygoes/PythonDSA"
          }
        ]
      },
    {
      title: "Python testdome Certificate",
      subtitle:
        "Completed Python Certification , RANKING IN THE TOP 10%",
      image: require("./assets/images/testdome.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {name: "Certification", url: "https://www.testdome.com/certificates/243831ed6f7a4fc3ae892781a70529a7"},
      ]
    },
    {
      title: "AWS Foundation Certificate",
      subtitle:
        "Completed AWS Certification, deep learning on the AWS Foundation. ",
      image: require("./assets/images/AWS-LOGO.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {name: "Certification", url: "https://app.pluralsight.com/learner/user/courses/v2/0034e595-5367-49f8-8ef0-bb2a4bd04412/certificate"},
      ]
    }
  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I haven't write any yet, Soon I will drop a bomb only if I create something like that 😅",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  // title: "TALKS",
  // subtitle: emoji(
  //   "I WOULD LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE BUT I'M NOT READY YET 😅"
  // ),

  // talks: [
  //   {
  //     // title: "Build Actions For Google Assistant",
  //     // subtitle: "Codelab at GDG DevFest Karachi 2019",
  //     // slides_url: "https://bit.ly/saadpasta-slides",
  //     // event_url: "https://www.facebook.com/events/2339906106275053/"
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  // ],
  // display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Are you looking for a Backend Python Developer or Cloud Engine for your Organization? Please contact on below Email:.",
  number: "+91-8208677438",
  email_address: "harne.shubh@gmail.com"
};

// Twitter Section

const twitterDetails = {
  // userName: "twitter", //Replace "twitter" with your twitter username without @
  // display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};