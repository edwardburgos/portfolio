import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import s from './Three.module.css'
import henryLogo from '../../../assets/henryLogo.png'
import idatLogo from '../../../assets/idatLogo.png'
import icpnaLogo from '../../../assets/icpnaLogo.png'
import { Button } from '@mui/material';

export default function Three() {
    return (
        <div className={s.container} id='education'>
            <div className={s.content}>
                <h1 className={s.title}>Education</h1>
                <Timeline>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ py: 2, paddingRight: '12px', paddingLeft: '0', maxWidth: '66px', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}
                            variant="body2"
                        >
                            <div>
                                <span className='block'>July 2021</span>
                                <span className='block'>-</span>
                                <span className='block'>April 2021</span>
                            </div>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot className={s.dot}>
                                <img src={henryLogo} className={s.logo} alt="HENRY" />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ paddingLeft: '12px', paddingRight: '0', py: 2, fontSize: '14px', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                            <div>
                                <span className='block bold eighteenpx'>HENRY</span>
                                <span className='block bold'>Full Stack Development</span>
                                <span className='block thin'>Acquisition of coding skills.</span>
                                <Button variant="outlined" sx={{ textTransform: 'none', marginTop: '8px' }} href='EDWARD_BURGOS_HENRY_CERTIFICATE.pdf' download>
                                    Download certificate
                                </Button>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ py: 2, paddingRight: '12px', paddingLeft: '0', maxWidth: '66px', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}
                            variant="body2"
                        >
                            <div>
                                <span className='block'>February 2021</span>
                                <span className='block'>-</span>
                                <span className='block'>February 2018</span>
                            </div>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot sx={{ backgroundColor: 'white' }}>
                                <img src={idatLogo} className={s.idatLogo} alt="IDAT" />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ paddingLeft: '12px', paddingRight: '0', py: 2, fontSize: '14px', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                            <div>
                                <span className='block bold eighteenpx'>IDAT INSTITUTE</span>
                                <span className='block bold'>Information Systems Development</span>
                                <span className='block thin'>Acquisition of knowlegde about technological
                                    processes, data analysis and coding.</span>
                                <Button variant="outlined" disabled sx={{ textTransform: 'none', marginTop: '8px' }} className={s.inProcess} href='EDWARD_BURGOS_IDAT_CERTIFICATE.pdf' download>
                                    Certificate in process
                                </Button>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ py: 2, paddingRight: '12px', paddingLeft: '0', maxWidth: '66px', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}
                            variant="body2"
                        >
                            <div>
                                <span className='block'>December 2016</span>
                                <span className='block'>-</span>
                                <span className='block'>January 2014</span>
                            </div>

                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot sx={{ backgroundColor: 'white' }}>
                                <img src={icpnaLogo} className={s.idatLogo} alt="ICPNA" />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ paddingLeft: '12px', paddingRight: '0', py: 2, fontSize: '14px', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                            <div>
                                <span className='block bold eighteenpx'>ICPNA</span>
                                <span className='block bold'>English Language Program</span>
                                <span className='block'>Acquisition of knowledge about English that
                                    allows me to speak the language in a fluent way.</span>
                                <Button variant="outlined" sx={{ textTransform: 'none', marginTop: '8px', paddingRight: '16px' }} href='EDWARD_BURGOS_ICPNA_CERTIFICATES.pdf' download>
                                    Download certificate
                                </Button>
                                <Button variant="outlined" sx={{ textTransform: 'none', marginTop: '8px' }} href='https://www.efset.org/cert/Bu3X7f'>
                                    EF SET 2021 Certificate
                                </Button>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    );
}