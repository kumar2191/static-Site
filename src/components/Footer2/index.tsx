import React from 'react'
// import Script from 'next/script';
import { Box, Grid, Text, Title } from '@mantine/core';
import { ImLocation } from 'react-icons/im';

const index = () => {
    return (
        <Box mt={110} className='body' >

            <footer className="footer">
                <Grid>
                    <Grid.Col xs={12}>

                        <div className="waves">
                            <div className="wave" id="wave1"></div>
                            <div className="wave" id="wave2"></div>
                            {/* <div className="wave" id="wave3"></div>
                            <div className="wave" id="wave4"></div> */}
                        </div>
                    </Grid.Col>
                    <Grid.Col xs={12}>
                        <Box>
                            <Title order={2}>

                                <ImLocation color='red' />  Reach Us
                            </Title>
                            <Title order={6}>

                                Rajesh K. (General Manager)
                            </Title>
                            <Text>

                                Rani Engineering Works (Rani Group Of Companies)<br />
                                No. 1413-C, Rani Complex, Sathy Road, Ganapathy<br />
                                Coimbatore - 641006, Tamil Nadu, India
                            </Text>
                        </Box>
                    </Grid.Col>
                    <Grid.Col xs={12}>
                        {/* <Box>
                            <Title order={2}>

                                <ImLocation color='red' />  Reach Us
                            </Title>
                            <Title order={6}>

                                Rajesh K. (General Manager)
                            </Title>
                            <Text>

                                Rani Engineering Works (Rani Group Of Companies)<br />
                                No. 1413-C, Rani Complex, Sathy Road, Ganapathy<br />
                                Coimbatore - 641006, Tamil Nadu, India
                            </Text>
                        </Box> */}
                    </Grid.Col>
                </Grid>
                {/* <ul className="social-icon">
                    <li className="social-icon__item">
                        <a className="social-icon__link" href="#">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>
                    <li className="social-icon__item">
                        <a className="social-icon__link" href="#">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </li>
                    <li className="social-icon__item">
                        <a className="social-icon__link" href="#">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                    </li>
                    <li className="social-icon__item">
                        <a className="social-icon__link" href="#">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>
                </ul>
                <ul className="menu">
                    <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">About</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>
                </ul>
                <p>&copy;2021 Nadine Coelho | All Rights Reserved</p> */}
            </footer>
            {/* <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" strategy="beforeInteractive" />
            <Script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" strategy="beforeInteractive" /> */}

        </Box>
    )
}

export default index