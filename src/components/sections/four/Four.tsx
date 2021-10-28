import React, { useState, useEffect } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import s from './Four.module.css'
import henryLogo from '../../../assets/henryLogo.png'
import idatLogo from '../../../assets/idatLogo.png'
import icpnaLogo from '../../../assets/icpnaLogo.png'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { transform } from 'typescript';
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
import { appsType } from '../../../types'
import { modifyApp } from '../../../actions';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link
} from "react-router-dom";

export default function Four() {

    // const [app, setApp] = useState<string>('dogsapp');

    const dispatch = useDispatch();
    const app = useSelector((state: { app:  "dogsapp" | "weatherapp" | "moviesapp" | "mobiledogsapp" | "portfolioapp" }) => state.app)
    
    // console.log(match)
    // if (match.url.slice(11).length && ["dogsapp", "weatherapp", "moviesapp", "mobiledogsapp", "portfolioapp"].includes(match.url.slice(11))) {
    //     setApp(match.url.slice(11))
    //     console.log(match.url.slice(11))
    // }

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment:  "dogsapp" | "weatherapp" | "moviesapp" | "mobiledogsapp" | "portfolioapp",
    ) => {
        dispatch(modifyApp(newAlignment));

    };

    const availableApps = [{ value: "dogsapp", name: "Dogs app" }, { value: "weatherapp", name: "Weather app" },
    { value: "moviesapp", name: "Movies app" }, { value: "mobiledogsapp", name: "Mobile dogs app" },
    { value: "portfolioapp", name: "Portfolio app" }]

    const portfolioApps: appsType = {
        dogsapp: {
            name: 'Dogs app',
            description: 'Web application thats allows users to login, search dog breeds, register dogs, see other dogs and see other users.',
            features: ['Login with password', 'Login without password', 'Google Login', 'Google One Tap Login',
                'Password reset', 'Email communication with the users', 'User profile edition', 'Dog registration', 'Dog edition',
                'Dog breeds search', 'Dog breeds filtering by temperament', 'Dog breeds detail', 'See other users', 'See and like other dogs'],
            deploymentLink: 'https://edwardburgosdogsapp.vercel.app',
            webDemostration: 'https://open.spotify.com/',
            mobileDemostration: 'https://open.spotify.com/',
            backendSourceCode: 'https://github.com/edwardburgos/dogsappbackend',
            frontendSourceCode: 'https://github.com/edwardburgos/dogsappfrontend',
            backendstack: [{ name: 'Javascript', logo: javascriptLogo }, { name: 'Node.js', logo: nodeLogo },
            { name: 'Express.js', logo: expressLogo }, { name: 'PostgreSQL', logo: postgresqlLogo },
            { name: 'Sequelize', logo: sequelizeLogo }, { name: 'Google Cloud', logo: googlecloudLogo },
            { name: 'Firebase', logo: firebaseLogo }],
            frontendstack: [{ name: 'Javascript', logo: javascriptLogo }, { name: 'React', logo: reactLogo },
            { name: 'Redux', logo: reduxLogo }, { name: 'HTML', logo: htmlLogo }, { name: 'CSS', logo: cssLogo }]
        },
        weatherapp: {
            name: 'Weather app',
            description: 'Web application thats allows users to watch the weather of the cities they search for or are located in and save them to check later.',
            features: ['Add city where the user is currently located', 'Search cities by name', 'Filter cities by country', 'Save cities to check later'],
            deploymentLink: 'https://edwardburgosweatherapp.vercel.app',
            webDemostration: 'https://open.spotify.com/',
            mobileDemostration: 'https://open.spotify.com/',
            backendSourceCode: 'https://github.com/edwardburgos/weatherappbackend',
            frontendSourceCode: 'https://github.com/edwardburgos/weatherappfrontend',
            backendstack: [{ name: 'Javascript', logo: javascriptLogo }, { name: 'Node.js', logo: nodeLogo },
            { name: 'Express.js', logo: expressLogo }, { name: 'PostgreSQL', logo: postgresqlLogo },
            { name: 'Sequelize', logo: sequelizeLogo }],
            frontendstack: [{ name: 'Typescript', logo: typescriptLogo }, { name: 'React', logo: reactLogo },
            { name: 'Redux', logo: reduxLogo }, { name: 'HTML', logo: htmlLogo }, { name: 'CSS', logo: cssLogo }]
        },
        moviesapp: {
            name: 'Movies app',
            description: 'Web application thats allows users to search and save movies, companies, people of the film industry and movie collections. Also, we can find movies by gender, find trending movies and sort by some parameters.',
            features: ['Search movies by name', 'Search people of the film industry', 'Search companies', 'Search movie collections',
                'Save favorite movies', 'Save favorite people of the film industry', 'Save favorite companies', 'Save favorite movie collections',
                'Find movies by gender', 'Find trending movies', 'Sort movies by popularity (Ascending / Descending)', 'Sort movies by release date (Ascending / Descending)',
                'Sort movies by revenue (Ascending / Descending)', 'Sort movies by best rated (Ascending / Descending)', 'Sort movies by most rated (Ascending / Descending)'],
            deploymentLink: 'https://edwardburgosmoviesapp.vercel.app',
            webDemostration: 'https://open.spotify.com/',
            mobileDemostration: 'https://open.spotify.com/',
            sourceCode: 'https://github.com/edwardburgos/moviesapp',
            stack: [{ name: 'Typescript', logo: typescriptLogo }, { name: 'React', logo: reactLogo },
            { name: 'Redux', logo: reduxLogo }, { name: 'HTML', logo: htmlLogo }, { name: 'CSS', logo: cssLogo }]
        },
        mobiledogsapp: {
            name: 'Mobile dogs app',
            description: 'Mobile application for iOS and Android thats allows users to search dogs breeds and filter by temperament.',
            features: ['Search dog breeds', 'Filter by temperaments'],
            expoDeployment: 'https://expo.dev/@edwardpbn/mobiledogsapp',
            downloadApk: 'https://expo.io/artifacts/7dbe3396-0e2b-4f12-888d-bd2d604593a1',
            demostration: 'https://open.spotify.com/',
            sourceCode: 'https://github.com/edwardburgos/mobiledogsapp',
            stack: [{ name: 'Javascript', logo: javascriptLogo }, { name: 'React', logo: reactLogo },
            { name: 'Redux', logo: reduxLogo }]
        },
        portfolioapp: {
            name: 'Portfolio app',
            description: 'Web application that allows users to obtain professional information about me.',
            features: ['Obtain professional information about me', 'Dark mode'],
            deploymentLink: 'https://edwardburgos.vercel.app/',
            webDemostration: 'https://open.spotify.com/',
            mobileDemostration: 'https://open.spotify.com/',
            sourceCode: 'https://github.com/edwardburgos/portfolio',
            stack: [{ name: 'Typescript', logo: typescriptLogo }, { name: 'React', logo: reactLogo },
            { name: 'Redux', logo: reduxLogo }, { name: 'HTML', logo: htmlLogo }, { name: 'CSS', logo: cssLogo }]
        },

    }

    return (
        <div className={s.container} id="dogsapp">
            <div className={s.content}>
                <h1 className={s.title}>Portfolio</h1>
                <ToggleButtonGroup
                    color="primary"
                    value={app}
                    exclusive
                    onChange={handleChange}
                    sx={{ display: 'flex', flexWrap: 'wrap', marginBottom: '8px' }}
                >
                    {availableApps.map((e, index) => <ToggleButton key={index} value={e.value} sx={{ textTransform: 'none', padding: '8px', marginBottom: '8px', color: 'inherit' }} className={s.toggleButtonBorder}><Link to={`#${e.value}`} className={s.noDecoration}>{e.name}</Link></ToggleButton>)}
                </ToggleButtonGroup>
                <div className={s.appDescription}>
                    <h2 className={s.onlyBottom}>{portfolioApps[app].name}</h2>
                    <h3 className={s.smallBottom}>General description</h3>
                    <p className={s.noMargin}>{portfolioApps[app].description}</p>
                    <h3 className={s.onlyTop}>Links</h3>
                    <div className={s.onlyBottom}>
                        {portfolioApps[app].deploymentLink ? <Button variant="outlined" className={s.button} href={portfolioApps[app].deploymentLink!} target='_blank'>Try it now</Button> : null}
                        {portfolioApps[app].expoDeployment ? <Button variant="outlined" className={s.button} href={portfolioApps[app].expoDeployment!} target='_blank'>Try on Expo</Button> : null}
                        {portfolioApps[app].downloadApk ? <Button variant="outlined" className={s.button} href={portfolioApps[app].downloadApk!} target='_blank'>Download APK</Button> : null}
                        {portfolioApps[app].webDemostration ? <Button variant="outlined" className={s.button} href={portfolioApps[app].webDemostration!} target='_blank'>Watch web demostration</Button> : null}
                        {portfolioApps[app].mobileDemostration ? <Button variant="outlined" className={s.button} href={portfolioApps[app].mobileDemostration!} target='_blank'>Watch mobile demostration</Button> : null}
                        {portfolioApps[app].demostration ? <Button variant="outlined" className={s.button} href={portfolioApps[app].demostration!} target='_blank'>Watch demostration</Button> : null}
                        {portfolioApps[app].sourceCode ? <Button variant="outlined" className={s.button} href={portfolioApps[app].sourceCode!} target='_blank'>View source code</Button> : null}
                        {portfolioApps[app].backendSourceCode ? <Button variant="outlined" className={s.button} href={portfolioApps[app].backendSourceCode!} target='_blank'>View backend source code</Button> : null}
                        {portfolioApps[app].frontendSourceCode ? <Button variant="outlined" className={s.button} href={portfolioApps[app].frontendSourceCode!} target='_blank'>Watch frontend source code</Button> : null}
                    </div>
                    <h3 className={s.smallBottom}>Detailed features</h3>
                    <ul className={s.onlyBottom}>
                        {portfolioApps[app].features.map((e, index) => <li key={index}>{e}</li>)}
                    </ul>
                    <h3 className={s.noMargin}>Used tools</h3>
                    {portfolioApps[app].stack && portfolioApps[app].stack!.length ?
                            <div className={s.skillsContainer}>
                                {
                                    portfolioApps[app].stack!.map((e, index) =>
                                        <div className={s.skill} key={index}>
                                            <img src={e.logo} className={s.logo} alt={e.name} />
                                            <span>{e.name}</span>
                                        </div>
                                    )
                                }
                            </div> : null}
                    {portfolioApps[app].frontendstack && portfolioApps[app].frontendstack!.length ?
                        <>
                            <h4 className={s.onlyTop}>Frontend Stack</h4>
                            <div className={s.skillsContainer}>
                                {
                                    portfolioApps[app].frontendstack!.map((e, index) =>
                                        <div className={s.skill} key={index}>
                                            <img src={e.logo} className={s.logo} alt={e.name} />
                                            <span>{e.name}</span>
                                        </div>
                                    )
                                }
                            </div>
                        </> : null}
                    {portfolioApps[app].backendstack && portfolioApps[app].backendstack!.length ?
                        <>
                            <h4 className={s.noMargin}>Backend Stack</h4>
                            <div className={s.skillsContainer}>
                                {
                                    portfolioApps[app].backendstack!.map((e, index) =>
                                        <div className={s.skill} key={index}>
                                            <img src={e.logo} className={s.logo} alt={e.name} />
                                            <span>{e.name}</span>
                                        </div>
                                    )
                                }
                            </div>
                        </> : null}
                </div>
            </div>
        </div>
    );
}