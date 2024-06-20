import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import logoImage from './logo.png'
import image1 from './image-1.png'
import aboutImage1 from './about-1.png'
import aboutImage2 from './about-2.png'
import employeeImage1 from './employee-1.png'
import employeeImage2 from './about-2.png'
import employeeImage3 from './about-2.png'
import employeeImage4 from './about-2.png'
import websitetemplate1img from './website-example-1.png'
import websitetemplate2img from './website-example-2.png'
import contactImage1 from './contact-1.png'
import contactImage2 from './contact-2.png'
import contactImage3 from './contact-3.png'
import legalImage1 from './legal-1.png'
import { Button } from 'react-bootstrap';
import SocialIcon1 from './social-icon-1.png'
import { ContactForm } from './ContactForm'


export const NavBar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showAbout, setShowAbout] = useState(false);

  const handleNavClick = (section) => {
    document.body.getElementsByClassName("content-container")[0].style.opacity = "100%";
    document.body.getElementsByClassName("content-container")[0].style.animation = "DisappearStatusContainer 0.25s ease-out forwards"
    setTimeout(() => {
      setActiveSection(section);

      document.body.getElementsByClassName("content-container")[0].style.opacity = "0%";
      document.body.getElementsByClassName("content-container")[0].style.animation = "DisplayStatusContainer 0.25s ease-in forwards";
    }, 250);
  };

  function HomeHeader() {
    return (
      <>
        <div className='image-1-header'>
          <img src={image1}></img>
        </div>
        <div className="home-1-header">
          <h2>
            Dream your site today.
          </h2>
          <h3>
            Embark on a journey of dreams becoming to a reality.
          </h3>
          <Button
            onClick={() => handleNavClick('about-2')}
            variant="outline-light">Start Today.</Button>
        </div>
      </>
    )
  }
  function WebsitePage(website) {
    function HandleClick(website) {
      var targetUrl = null;
      if (website == "budget.ai") {
        targetUrl = "https://dreamscapeoff.github.io/budgetai.github.io/";
      };
      if (targetUrl != null) {
        window.open(targetUrl, '_blank');
      }
    }

    return (
      <>
        <div className="website-container">
          <img src={websitetemplate1img}></img>
          <h2>budget.ai</h2>
          <h3 id="in-progress-tag">[In-progress]</h3>
          <p>
            "budget.ai" is a service that was primarily developed in order to ensure the securement
            of your money against recent inflation. Figures prove that people need money management,
            and what better way to help you but with the help of Artificial Intelligence.
          </p>

          <Button
            onClick={() => HandleClick('budget.ai')}
            variant="outline-light">View Website</Button>
        </div>
        <div className="website-container">
          <img src={websitetemplate2img}></img>
          <h2>YEGWave</h2>
          <h3 id="not-posted-tag">[N/A]</h3>
          <p>
            "YEGWAVE" was a site developed to fight against the recent propoganda posted on "Instagram"
            regarding news in our city. Certified individuals with verified witness accounts will be
            avaliable to tackle the most confusing times in our history.
          </p>
        </div>
      </>
    )
  }

  function ContactUs2() {
    return (
      <>
        <div className="contactus-header">
          <h2>Note</h2>
          <h3>
            Please fill out this form dilligently to ensure
            our team can get to you as soon as possible.
            <br />
            <br />
            Please provide <strong>ALL</strong> of your possible contact information in the "Message" box.
            This is essential to ensure we have multiple ways of reaching you in-case of
            unintentional website errors.
          </h3>
          <h4>
            Estimated Wait Time:
            <br />
            <br />
            <span>
              Two Business Days, in sha Allah.
            </span>
          </h4>
        </div>
        <div id="success-container" className="result-container">
          <h2>You have successfully sent your request!</h2>
          <h3>Alhamdulillah. Please check your email for further instructions.</h3>

          <img src={contactImage2}></img>
        </div>
        <div id="cooldown-container" className="result-container">
          <h2>You are on a cooldown!</h2>
          <h3>Please wait before you send another request.</h3>

          <img src={contactImage3}></img>
        </div>

        <div className='contact-form-container'>
          <ContactForm />
        </div>
      </>
    )
  }
  function LegalInformation() {
    const HandleClick = () => {
      const targetUrl = "https://1drv.ms/w/c/29df76145f18809c/EajZxSkzqkRAsGw4cnFG1RUBe4V7qjCsMaE9vtImfvMSOg?e=7KFpPg";
      window.open(targetUrl, '_blank');
    }

    return (
      <>
        <div className="about-0-header">
          <img src={legalImage1}></img>
        </div>
        <div className="about-1-header">
          <h2>
            Know your rights.
          </h2>
          <h3>
            Understand what you are getting into before any final decisions.
          </h3>

          <Button
            onClick={HandleClick}
            variant="outline-info">
            Continue</Button>{' '}
        </div>
      </>
    )
  }
  function ContactUs() {
    return (
      <>
        <div className="about-0-header">
          <img src={contactImage1}></img>
        </div>
        <div className="about-1-header">
          <h2>
            Ready to get started?
          </h2>
          <h3>
            Begin the process by contacting the team.
          </h3>

          <Button
            onClick={() => handleNavClick('contact-2')}
            variant="outline-info">
            Continue</Button>{' '}
        </div>
      </>
    )
  }
  function AboutUs4() {
    return (
      <>
        <div className="about-2-header">
          <div className="two-img-container">
            <img src={aboutImage2}></img>

            <Button
              onClick={() => handleNavClick('contact-2')}
              variant="outline-info">
              Get Started Today!</Button>{' '}
          </div>
          <h3>
            Your website is our responsibility.
          </h3>
          <h4>
            Step 1. Conversate
          </h4>
          <p>
            Our team's policy is to initiate discussions with all clients before implementing any designs. The success of your website depends greatly on this stage of the process. During this phase, we will identify any requirements or preferences you may have in order to gain a clear understanding of the services you seek.
          </p>
          <h4>
            Step 2. Design
          </h4>
          <p>
            After our discussion, our team will inform our designers to start styling all the pages, buttons, and other assets on your site. We ensure that all aspects are addressed, and any proposed changes will be run by you before being finalized.
          </p>
          <h4>
            Step 3. Action
          </h4>
          <p>
            The process of your site is planned to begin after the "Design" stage. From this point forward, you will receive daily to bi-daily updates regarding your site's development. This stage is the shortest of the few.
          </p>
        </div>
      </>
    )
  }
  function AboutUs3() {
    return (
      <>
        <div className="info-websites-header">
          <h2>
            Our previous works.
          </h2>
          <h3>
            It's not many! [Recently Established Company!]
          </h3>
          <Button
            onClick={() => handleNavClick('about-4')}
            variant="outline-info">
            Continue!</Button>{' '}
        </div>
        <div className="about-websites-header">
          <WebsitePage />
        </div>
      </>
    )
  }
  function AboutUs2() {
    const users = {
      "1": {
        Img: "",
        Name: "Noel Ramadan",
        Role: "CEO",
        Background: "Noel, the founder of Dreamxscape, utilized years of programming knowledge to establish a trustworthy and accountable company, Dreamxscape."
      },
      "2": {
        Img: "",
        Name: "Jayde Pelle",
        Role: "Front End Developer",
        Background: "By honing his skills and gaining recognition for his gentle design and interface, Jayde has proven himself more than qualified to be part of the Dreamxscape team."
      },
      "3": {
        Img: "",
        Name: "Joel Ramadan",
        Role: "Designer",
        Background: "The sleek and unique designs created by Joel keep Dreamxscape's products refined and sharp with every new production."
      },
      "4": {
        Img: "",
        Name: "Miriam",
        Role: "Master of the Spreadsheet",
        Background: "Miriam efficiently manages client relations at Dreamxscape."
      },
    }

    function HandleClick(employee) {
      var targetUrl = null;
      if (employee == "1") {
        targetUrl = "https://www.instagram.com/dreamscape_off/";
      } else if (employee == "2") {
        targetUrl = "https://www.instagram.com/morgan_treeman0/";
      } else if (employee == "3") {
        targetUrl = "https://www.instagram.com/jramadn.__/";
      } else if (employee == "4") {
        targetUrl = "https://www.instagram.com/dreamscape_off/";
      };
      if (targetUrl != null) {
        window.open(targetUrl, '_blank');
      }
    }

    return (
      <>
        <div className="info-employees-header">
          <h2>
            Meet our team.
          </h2>
          <h3>
            Don't be a random, get to know us!
          </h3>
          <Button
            onClick={() => handleNavClick('about-3')}
            variant="outline-info">
            Continue</Button>{' '}
        </div>
        <div className="about-employees-header">
          <div className="employee-container">
            <img src={employeeImage1 || ""} alt="Employee Image" />  {/* Set default empty alt text */}
            <h2>{users["1"].Name || "N/A"}</h2>
            <h3>{users["1"].Role || "N/A"}</h3>
            <p>{users["1"].Background || "No background information available."}</p>
            <button
            onClick={() => HandleClick('1')}>
              <img src={SocialIcon1}></img>
            </button>
          </div>
          <div className="employee-container">
            <img src={employeeImage2 || ""} alt="Employee Image" />  {/* Set default empty alt text */}
            <h2>{users["2"].Name || "N/A"}</h2>
            <h3>{users["2"].Role || "N/A"}</h3>
            <p>{users["2"].Background || "No background information available."}</p>
            <button
            onClick={() => HandleClick('2')}>
              <img src={SocialIcon1}></img>
            </button>
          </div>
          <div className="employee-container">
            <img src={employeeImage3 || ""} alt="Employee Image" />  {/* Set default empty alt text */}
            <h2>{users["3"].Name || "N/A"}</h2>
            <h3>{users["3"].Role || "N/A"}</h3>
            <p>{users["3"].Background || "No background information available."}</p>
            <button
            onClick={() => HandleClick('3')}>
              <img src={SocialIcon1}></img>
            </button>
          </div>
        </div>
      </>
    )
  }
  function AboutUs() {
    return (
      <>
        <div className="about-0-header">
          <img src={aboutImage1}></img>
        </div>
        <div className="about-1-header">
          <h2>
            Just who are you dealing with?
          </h2>
          <h3>
            Don't be down, we got you covered, in sha Allah.
          </h3>

          <Button
            onClick={() => handleNavClick('about-2')}
            variant="outline-info">
            Continue</Button>{' '}
        </div>
      </>
    )
  }
  return (
    <>
      <Navbar data-bs-theme="dark">
        <Container>
          <Navbar.Brand
            onClick={() => handleNavClick('home')}
            href="#home">
            <img
              src={logoImage}
              width="75"
              height="75"
              className="d-inline-block align-top"
              alt="company logo"
              id="navbar-logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => handleNavClick('about')}
              href="#about">
              About Us
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavClick('contact')}
              href="#contact">
              Get In Contact
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavClick('legal')}
              href="#legal">
              Legal Information
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="content-container">
        {activeSection === 'home' && <HomeHeader />}
        {activeSection === 'about' && <AboutUs />}
        {activeSection === 'about-2' && <AboutUs2 />}
        {activeSection === 'about-3' && <AboutUs3 />}
        {activeSection === 'about-4' && <AboutUs4 />}
        {activeSection === 'contact' && <ContactUs />}
        {activeSection === 'contact-2' && <ContactUs2 />}
        {activeSection === 'legal' && <LegalInformation />}
      </div>
    </>
  );
}

