import React from 'react';
import s from './One.module.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import profilePhoto from '../../../assets/profilePhoto.jpg';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FileSaver from 'file-saver';


export default function SearchBar() {
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
            <p className={s.title}>Hi, I am Edward Burgos</p>
            <p className={s.subtitle}>Fullstack Developer</p>
            <p className={s.paragraph}>Experience in backend, frontend and mobile development</p>
          </div>
          {
            !!new Blob() ?
              <Button variant="outlined" className={s.download} onClick={() => FileSaver.saveAs("https://edwardburgos.vercel.app/static/media/EDWARD_BURGOS_RESUME.pdf", "EDWARD_BURGOS_RESUME.pdf")}>
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