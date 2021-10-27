import React from 'react';
import s from './One.module.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import profilePhoto from '../../../assets/profilePhoto.jpg';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';


export default function One() {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.media}>
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
            <h1>Hi, I am Edward Burgos.</h1>
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

        </div>
      </div>
    </div>
  );
}