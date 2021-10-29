import React from 'react';
import s from './Two.module.css';
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

    const programmingLanguages = [{ name: 'Typescript', logo: typescriptLogo }, { name: 'Javascript', logo: javascriptLogo }]
    const backendstack = [{ name: 'Node.js', logo: nodeLogo },
    { name: 'Express.js', logo: expressLogo }, { name: 'PostgreSQL', logo: postgresqlLogo },
    { name: 'Sequelize', logo: sequelizeLogo }]
    const frontendstack = [{ name: 'React', logo: reactLogo }, { name: 'Redux', logo: reduxLogo },
    { name: 'HTML', logo: htmlLogo }, { name: 'CSS', logo: cssLogo }]
    const mobilestack = [{ name: 'React Native', logo: reactLogo }]
    const cloudstack = [{ name: 'Firebase', logo: firebaseLogo }]
    const softskills = ['Problem Resolution', 'Discipline', 'Organization', 'Attention to details', 'Criterion',
        'Creative Thinking', 'Communicative', 'Leadership', 'Proactive', 'Responsible']

    return (
        <div className={s.container} id="skills">
            <div className={s.content}>
                <h1 className={s.title}>Skills</h1>
                <h3 className={s.firstSubtitle}>Promming Languages</h3>
                <div className={s.skillsContainer}>
                    {
                        programmingLanguages.map((e, index) =>
                            <div className={s.skill} key={index}>
                                <img src={e.logo} className={s.logo} alt={e.name} />
                                <span>{e.name}</span>
                            </div>
                        )
                    }
                </div>
                <h3 className={s.subtitle}>Backend Stack</h3>
                <div className={s.skillsContainer}>
                    {
                        backendstack.map((e, index) =>
                            <div className={s.skill} key={index}>
                                <img src={e.logo} className={s.logo} alt={e.name} />
                                <span>{e.name}</span>
                            </div>
                        )
                    }
                </div>
                <h3 className={s.subtitle}>Frontend Stack</h3>
                <div className={s.skillsContainer}>
                    {
                        frontendstack.map((e, index) =>
                            <div className={s.skill} key={index}>
                                <img src={e.logo} className={s.logo} alt={e.name} />
                                <span>{e.name}</span>
                            </div>
                        )
                    }
                </div>
                <h3 className={s.subtitle}>Mobile Stack</h3>
                <div className={s.skillsContainer}>
                    {
                        mobilestack.map((e, index) =>
                            <div className={s.skill} key={index}>
                                <img src={e.logo} className={s.logo} alt={e.name} />
                                <span>{e.name}</span>
                            </div>
                        )
                    }
                </div>
                <h3 className={s.subtitle}>Cloud Stack</h3>
                <div className={s.skillsContainer}>
                    {
                        cloudstack.map((e, index) =>
                            <div className={s.skill} key={index}>
                                <img src={e.logo} className={s.logo} alt={e.name} />
                                <span>{e.name}</span>
                            </div>
                        )
                    }
                </div>
                <h3 className={s.subtitle}>Soft Skills</h3>
                <div className={s.skillsContainer}>
                    {
                        softskills.map((e, index) =>
                            <div className={s.skill} key={index}>
                                <span>{e}</span>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}