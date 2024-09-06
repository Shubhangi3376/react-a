import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faCalendar } from '@fortawesome/free-solid-svg-icons';
import MyImage from './shubs.jpg';
import './App.css'; // Your custom CSS
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faList } from '@fortawesome/free-solid-svg-icons/faList';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
function App() {
  return (
    <div className="profile-card">
      <img src={MyImage} alt="Your Profile Photo" className="profilepic" />
      <h2>SHUBHANGI SINGH</h2>
      <p><FontAwesomeIcon icon={faBriefcase} /> Student</p>
      <p><FontAwesomeIcon icon={faHome} /> Mysuru, India</p>
      <p><FontAwesomeIcon icon={faEnvelope} /> singhshubhangi3009@gmail.com</p>
      <p><FontAwesomeIcon icon={faPhone} /> 8660813376</p>
      <p><FontAwesomeIcon icon={faList} /> www.linkedin.com/in/shubhangi-singh-961788243</p>
      <div className="skills">
        <h3><FontAwesomeIcon icon={faStar} /> Skills</h3>
        <div className="skill">
          <span className="skill-name">Ability to Work Under Pressure</span>
          <div className="progress-bar">
            <span style={{ width: '90%' }}>90%</span>
          </div>
        </div>
        <div className="skill">
          <span className="skill-name">Fast Learner</span>
          <div className="progress-bar">
            <span style={{ width: '80%' }}>80%</span>
          </div>
        </div>
        <div className="skill">
          <span className="skill-name">Ability to work in a team</span>
          <div className="progress-bar">
            <span style={{ width: '75%' }}>75%</span>
          </div>
        </div>
        <div className="skill">
          <span className="skill-name">Effective Time Management</span>
          <div className="progress-bar">
            <span style={{ width: '70%' }}>70%</span>
          </div>
        </div>
        <div className="skill">
          <span className="skill-name">Programming</span>
          <div className="progress-bar">
            <span style={{ width: '85%' }}>85%</span>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="section">
        <h2><FontAwesomeIcon icon={faBriefcase} /> Work Experience</h2>
        <div className="job">
          <h3>Student</h3>
          <p>Mysuru, India</p>
          <p className="date"><FontAwesomeIcon icon={faCalendar} /> Jan 2020 - Current</p>
          <p>Working on various academic projects and gaining experience in different domains such as AI, ML, and Web Development.</p>
        </div>
      </div>
      <div className="section">
        <h2><FontAwesomeIcon icon={faGraduationCap} /> Education</h2>
        <div className="education">
          <h3>GSSSIETW, Mysuru</h3>
          <p className="date"><FontAwesomeIcon icon={faCalendar} /> 2020 - 2024</p>
          <p>BE in CSE (Artificial Intelligence and Machine Learning)<br />Grades - CGPA 8.0</p>
        </div>
        <div className="education">
          <h3>Learner’s PU College</h3>
          <p className="date"><FontAwesomeIcon icon={faCalendar} /> 2020 - 2022</p>
          <p>Grades - 91.16%</p>
        </div>
        <div className="education">
          <h3>Anantha Geetha Vidyalaya</h3>
          <p className="date"><FontAwesomeIcon icon={faCalendar} /> 2010 - 2020</p>
          <p>Grades - 90.25%</p>
        </div>
      </div>
      <div className="side">
      <div className="section">
        <h2><FontAwesomeIcon icon={faGraduationCap} /> Courses</h2>
        <div className="education">
          <h3>AWS Academy Cloud Foundations</h3>
        </div>
        <div className="education">
          <h3>Generative AI Fundamentals</h3>
        </div>
        <div className="education">
          <h3>Data Structures in C</h3>
        </div>
      </div>

      <div className="section">
        <h2><FontAwesomeIcon icon={faGraduationCap} /> Certifications</h2>
        <div className="education">
          <h3>Attended Emerging Cybersecurity Threat Workshop, Telecom Regulatory Authority of India, Mysore</h3>
        </div>
        <div className="education">
          <h3>Attended WE-DAY conducted on Women Entrepreneurs Day, held by ASPERA in collaboration with VVCE X IUCEE, Mysore</h3>
        </div>
        <div className="education">
          <h3>Attended 3 days workshop on MERN</h3>
        </div>
        <div className="education">
          <h3>Achieved 3rd place in the VTU Volleyball Sports, KIT, TIPTUR</h3>
        </div>
      </div>

      <div className="section">
        <h2><FontAwesomeIcon icon={faGraduationCap} /> Languages</h2>
        <div className="education">
          <h3>English - Fluent</h3>
        </div>
        <div className="education">
          <h3>Hindi - Fluent</h3>
        </div>
        <div className="education">
          <h3>Kannada - Fluent</h3>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default App; 



