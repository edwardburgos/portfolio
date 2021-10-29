import React from 'react';
import Button from '@mui/material/Button'
import s from './Four.module.css'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import typescriptLogo from '../../../assets/typescriptLogo.png';
import cssLogo from '../../../assets/cssLogo.png';
import expressLogo from '../../../assets/expressLogo.png';
import firebaseLogo from '../../../assets/firebaseLogo.png';
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

export default function Four() {

    const dispatch = useDispatch();

    const app = useSelector((state: { app: "dogsapp" | "weatherapp" | "moviesapp" | "mobiledogsapp" | "portfolioapp" }) => state.app)

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: "dogsapp" | "weatherapp" | "moviesapp" | "mobiledogsapp" | "portfolioapp",
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
                'Password reset', 'Account verification', 'Email communication with the users', 'User profile edition', 'Dog registration', 'Dog edition',
                'Dog breeds search', 'Dog breeds filtering by temperament', 'Dog breeds detail', 'See other users', 'See and like other dogs'],
            deploymentLink: 'https://edwardburgosdogsapp.vercel.app',
            webDemonstration: 'https://youtu.be/4xIJKCwR1c8',
            mobileDemonstration: 'https://youtu.be/jBa50nRvCfw',
            backendSourceCode: 'https://github.com/edwardburgos/dogsappbackend',
            frontendSourceCode: 'https://github.com/edwardburgos/dogsappfrontend',
            backendstack: [{ name: 'Javascript', logo: javascriptLogo }, { name: 'Node.js', logo: nodeLogo },
            { name: 'Express.js', logo: expressLogo }, { name: 'PostgreSQL', logo: postgresqlLogo },
            { name: 'Sequelize', logo: sequelizeLogo }, { name: 'Firebase', logo: firebaseLogo }],
            frontendstack: [{ name: 'Javascript', logo: javascriptLogo }, { name: 'React', logo: reactLogo },
            { name: 'Redux', logo: reduxLogo }, { name: 'HTML', logo: htmlLogo }, { name: 'CSS', logo: cssLogo }]
        },
        weatherapp: {
            name: 'Weather app',
            description: 'Web application thats allows users to watch the weather of the cities they search for or are located in and save them to check later.',
            features: ['Add city where the user is currently located', 'Search cities by name', 'Filter cities by country', 'Save cities to check later'],
            deploymentLink: 'https://edwardburgosweatherapp.vercel.app',
            webDemonstration: 'https://youtu.be/ULR-JWNRzKU',
            mobileDemonstration: 'https://youtu.be/JwqcjxI1ebg',
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
            webDemonstration: 'https://youtu.be/v3yovxSneGU',
            mobileDemonstration: 'https://youtu.be/V3Ygyim5ucs',
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
            demonstration: 'https://youtu.be/x8SMFxhVip0',
            sourceCode: 'https://github.com/edwardburgos/mobiledogsapp',
            stack: [{ name: 'Javascript', logo: javascriptLogo }, { name: 'React Native', logo: reactLogo },
            { name: 'Redux', logo: reduxLogo }]
        },
        portfolioapp: {
            name: 'Portfolio app',
            description: 'Web application that allows users to obtain professional information about me.',
            features: ['Obtain professional information about me', 'CV download', 'Dark mode'],
            deploymentLink: 'https://edwardburgos.vercel.app/',
            webDemonstration: 'https://youtu.be/_H97m6iOzKY',
            mobileDemonstration: 'https://youtu.be/XeL57zgXKrE',
            sourceCode: 'https://github.com/edwardburgos/portfolio',
            stack: [{ name: 'Typescript', logo: typescriptLogo }, { name: 'React', logo: reactLogo },
            { name: 'Redux', logo: reduxLogo }, { name: 'HTML', logo: htmlLogo }, { name: 'CSS', logo: cssLogo }]
        },
    }

    return (
        <div className={s.container} id="portfolio">
            <div className={s.content}>
                <h1 className={s.title}>Portfolio</h1>
                <ToggleButtonGroup
                    color="primary"
                    value={app}
                    exclusive
                    onChange={handleChange}
                    sx={{ display: 'flex', flexWrap: 'wrap', marginBottom: '8px' }}
                >
                    {availableApps.map((e, index) => <ToggleButton key={index} value={e.value} sx={{ textTransform: 'none', padding: '8px', marginBottom: '8px', color: 'inherit' }} className={s.toggleButtonBorder}>{e.name}</ToggleButton>)}
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
                        {portfolioApps[app].webDemonstration ? <Button variant="outlined" className={s.button} href={portfolioApps[app].webDemonstration!} target='_blank'>Watch web demonstration</Button> : null}
                        {portfolioApps[app].mobileDemonstration ? <Button variant="outlined" className={s.button} href={portfolioApps[app].mobileDemonstration!} target='_blank'>Watch mobile demonstration</Button> : null}
                        {portfolioApps[app].demonstration ? <Button variant="outlined" className={s.button} href={portfolioApps[app].demonstration!} target='_blank'>Watch demonstration</Button> : null}
                        {portfolioApps[app].sourceCode ? <Button variant="outlined" className={s.button} href={portfolioApps[app].sourceCode!} target='_blank'>View source code</Button> : null}
                        {portfolioApps[app].backendSourceCode ? <Button variant="outlined" className={s.button} href={portfolioApps[app].backendSourceCode!} target='_blank'>View backend source code</Button> : null}
                        {portfolioApps[app].frontendSourceCode ? <Button variant="outlined" className={s.button} href={portfolioApps[app].frontendSourceCode!} target='_blank'>View frontend source code</Button> : null}
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