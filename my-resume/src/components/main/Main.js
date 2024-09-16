import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Main = () => {
  return (
    <div className='row'>
      <div className='col-12 col-md-3'></div>
      <div className='col-12 col-md-6'>
        <div style={styles.content}>
          <div style={styles.textSection}>
            <h1>
              Hello! I'm <span style={styles.name}>Hasan Ali</span>, a{' '}
              <span style={styles.highlight}>Full Stack Developer</span> with over 4 years of professional experience.
            </h1>
            <p>
              I'm passionate about building scalable applications and solving complex problems. 
              I have 3 years of experience working in the startup ecosystem, where I designed, developed, and deployed 
              responsive and user-friendly web and mobile applications.
            </p>
            <p>
              My experience spans across both frontend and backend development, with a strong focus on delivering 
              scalable and efficient software solutions. I have worked extensively with various technologies and cloud platforms.
            </p>
            <h2>Technical Skills</h2>
            <p>
              <strong>Frontend:</strong> Angular, React, Ionic, Cordova, React Native <br />
              <strong>Backend:</strong> Node.js, Express.js, MySQL, PostgreSQL <br />
              <strong>Cloud Platforms:</strong> AWS (EC2, RDS, Elastic Beanstalk, Cognito) <br />
              <strong>Tools:</strong> Docker, Cloudflare, Git.
            </p>

            <h2>Professional Summary</h2>
            <p>
              I have experience designing software architecture, implementing database solutions, building UI and deploying 
              applications on cloud platforms. I'm passionate about creating efficient, scalable, and user-friendly solutions. 
              I bring strong problem-solving skills and the ability to work in fast-paced environments, managing the entire 
              software development lifecycle from start to finish.
            </p>
            <p>
      I'm always eager to collaborate on interesting projects and learn new technologies.
    </p>

    <div style={styles.buttonContainer}>
  <a href="https://www.linkedin.com/in/hasan-ali-webdev/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
    <button style={styles.primaryButton}>
      <FaLinkedin style={styles.icon} />
    </button>
  </a>
  <a href="https://github.com/hasan-web" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
    <button style={styles.secondaryButton}>
      <FaGithub style={styles.icon} />
    </button>
  </a>
</div>

          </div>

          {/* <div style={styles.projectsSection}>
            <h2>My Work</h2>
            <p>Here are a few projects I'm currently working on:</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const styles = {
  content: {
    padding: '2rem',
    fontFamily: 'system-ui, Roboto, "Helvetica Neue", sans-serif',
    color: '#333',
    textAlign: 'center',
  },
  textSection: {
    maxWidth: '650px',
    textAlign: 'left',
    marginBottom: '2rem',
    padding: '0 1rem',
  },
  name: {
    fontWeight: 700,
    color: '#2c3e50',
  },
  highlight: {
    fontWeight: 700,
    color: '#ff5722',
  },
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1.5rem',
  },
  primaryButton: {
    padding: '0.8rem 1.6rem',
    borderRadius: '25px',
    border: '2px solid #0077B5',
    backgroundColor: 'transparent',
    color: '#0077B5',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'background-color 0.3s ease',
  },
  secondaryButton: {
    padding: '0.8rem 1.6rem',
    borderRadius: '25px',
    border: '2px solid #000',
    backgroundColor: '#000',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'background-color 0.3s ease',
  },
  projectsSection: {
    maxWidth: '800px',
    marginTop: '2rem',
    padding: '0 1rem',
  },
  contactSection: {
    marginTop: '2rem',
    textAlign: 'left',
  },
  '@media (max-width: 768px)': {
    textSection: {
      padding: '0 1rem',
    },
    buttonContainer: {
      flexDirection: 'column',
      gap: '0.5rem',
    },
  },
  icon: {
    fontSize: '1.6rem',
  },
  iconLink: {
    textDecoration: 'none',
  },
};

export default Main;
