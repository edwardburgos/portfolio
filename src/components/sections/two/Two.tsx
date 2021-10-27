import React from 'react';
import s from './Two.module.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import profilePhoto from '../../../assets/profilePhoto.jpg';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import typescriptLogo from '../../../assets/typescriptLogo.png';
import cssLogo from '../../../assets/cssLogo.png';
import expressLogo from '../../../assets/expressLogo.png';
import firebaseLogo from '../../../assets/firebaseLogo.png';
import googlecloudLogo from '../../../assets/googlecloudLogo.png';
import htmlLogo from '../../../assets/htmlLogo.png';
import javascriptLogo from '../../../assets/javascriptLogo.png';
import nodeLogo from '../../../assets/nodeLogo.png';
import postgresqlLogo from '../../../assets/postgresqlLogo.png';
import reactLogo from '../../../assets/reactLogo.png';
import reduxLogo from '../../../assets/reduxLogo.png';
import sequelizeLogo from '../../../assets/sequelizeLogo.png';


export default function Two() {
    const programmingLanguages = [{ name: 'Typescript', logo: typescriptLogo }, {name: 'Javascript', logo: javascriptLogo}]
    const backendstack = [{name: 'Node.js', logo: nodeLogo}, 
    {name: 'Express.js', logo: expressLogo}, {name: 'PostgreSQL', logo: postgresqlLogo}, 
    {name: 'Sequelize', logo: sequelizeLogo}]
    const frontendstack = [{name: 'React', logo: reactLogo}, {name: 'Redux', logo: reduxLogo},
    {name: 'HTML', logo: htmlLogo}, {name: 'CSS', logo: cssLogo}]
    const mobilestack = [{name: 'React Native', logo: reactLogo}]
    const cloudstack = [{name: 'Google Cloud', logo: googlecloudLogo}, 
    {name: 'Firebase', logo: firebaseLogo}]
    const softskills = ['Problem Resolution', 'Discipline', 'Organization', 'Attention to details', 'Criterion', 
    'Creative Thinking', 'Communicative', 'Leadership', 'Proactive', 'Responsible']

    return (
        <div className={s.container}>
            <div className={s.content}>
                <h1 className={s.title}>Skills</h1>
                <h3 className={s.firstSubtitle}>Promming Languages</h3>
                <div className={s.skillsContainer}>
                    {
                        programmingLanguages.map(e =>
                            <div className={s.skill}>
                                <img src={e.logo} className={s.logo} alt={e.name} />
                                <span>{e.name}</span>
                            </div>
                        )
                    }
                </div>
                <h3 className={s.subtitle}>Backend Stack</h3>
                <div className={s.skillsContainer}>
                    {
                        backendstack.map(e =>
                            <div className={s.skill}>
                                <img src={e.logo} className={s.logo} alt={e.name} />
                                <span>{e.name}</span>
                            </div>
                        )
                    }
                </div>
                <h3 className={s.subtitle}>Frontend Stack</h3>
                <div className={s.skillsContainer}>
                    {
                        frontendstack.map(e =>
                            <div className={s.skill}>
                                <img src={e.logo} className={s.logo} alt={e.name} />
                                <span>{e.name}</span>
                            </div>
                        )
                    }
                </div>
                <h3 className={s.subtitle}>Mobile Stack</h3>
                <div className={s.skillsContainer}>
                    {
                        mobilestack.map(e =>
                            <div className={s.skill}>
                                <img src={e.logo} className={s.logo} alt={e.name} />
                                <span>{e.name}</span>
                            </div>
                        )
                    }
                </div>
                <h3 className={s.subtitle}>Cloud Stack</h3>
                <div className={s.skillsContainer}>
                    {
                        cloudstack.map(e =>
                            <div className={s.skill}>
                                <img src={e.logo} className={s.logo} alt={e.name} />
                                <span>{e.name}</span>
                            </div>
                        )
                    }
                </div>
                <h3 className={s.subtitle}>Soft Skills</h3>
                <div className={s.skillsContainer}>
                    {
                        softskills.map(e =>
                            <div className={s.skill}>
                                <span>{e}</span>
                            </div>
                        )
                    }
                </div>
                {/* <div className={s.media}>
          <div className={s.icons}>
            <div>
              <div className={s.iconContainer}><IconButton className={s.iconButton} href="mailto: edwardpbn@gmail.com" target='_blank' rel="noreferrer"><MailOutlinedIcon /></IconButton></div>
              <div className={s.iconContainer}><IconButton className={s.iconButton} href='https://www.linkedin.com/in/edwardburgosdev/' target='_blank' rel="noreferrer"><LinkedInIcon /></IconButton></div>
              <div className={s.lastIconContainer}><IconButton className={s.iconButton} href='https://github.com/edwardburgos' target='_blank' rel="noreferrer"><GitHubIcon /></IconButton></div>
            </div>
          </div>
          <div className={s.profile}>
            <img src={profilePhoto} className={s.profilePhoto} alt="Edward Burgos"></img>
          </div>
        </div>
        <div className={s.description}>
          <div className={s.info}>
            <p className={s.title}>Hi, I am Edward Burgos.</p>
            <p className={s.paragraph}>Full Stack Developer based in Peru.</p>
            <p className={s.paragraph}>Experience in frontend, backend and
              mobile development.</p>
            <p className={s.paragraph}>Passionate about developing functional
              products that provide value without
              neglecting the clean, understandable and
              optimized code.</p>
            <p className={s.paragraph}>Adaptable to work under pressure and
              adjustable to delivery times through
              discipline and organization in order to help
              the progress of the projects.</p>
            <p className={s.paragraph}>Teamwork fan because it helps me to
              analyze different points of view for the
              same situation and grow as a person by
              interacting with the different members of
              it.</p>
            <p className={s.paragraph}>Wishing to be part of a company that allow
              me to improve my skills and expand my
              knowledge.</p>
          </div>
          {
            !!new Blob() ?
              <Button variant="outlined" className={s.download} href='EDWARD_BURGOS_RESUME.pdf' download>
                Download CV
              </Button>
              :
              null
          }

        </div> */}
            </div>
        </div>
    );
}