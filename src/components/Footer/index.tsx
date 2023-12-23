import React from 'react'
import { Card, createStyles, Grid, Group, Text } from '@mantine/core'
// import {
//     IconBrandInstagram,
//     IconBrandFacebook,
//     IconBrandTwitter,
//     IconBrandYoutube,
//     IconBrandGithub,
//     IconBrandTelegram,
//     IconBrandMedium
// } from "@tabler/icons";
// import Link from 'next/link';

function Footer() {
    const useStyles = createStyles(() => ({
        img: {
            marginLeft: '5em',
            paddingTop: '4rem',
        },
        img2: {
            // paddingTop: '4rem',
        },
        heading: {
            color: 'white',
        },
        heading1: {
            color: 'white',
            paddingRight: '5em',
            marginLeft: '1em',
            marginTop: '0.5px'
        },
        footer: {
            bottom: 0,
            width: '98%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        imgnav: {
            width: '90%',
            flexDirection: 'row',
            float: 'right',
            justifyContent: "space-around",
            marginTop: '6em',
            // marginLeft: '3.5em'
        },
        img1: {
            marginLeft: '1em',
            paddingTop: '4rem',
        },
        text: {
            color: 'red'
        },
        link: {
            display: 'block',
            paddingTop: '3rem',
            paddingBottom: '3rem',
            '&:hover': {
                textDecoration: 'underline'
            }
        },
        wrapper: {
            width: '160rem',
        }
    }))
    const { classes } = useStyles()




    return (
        <div style={{ display: 'block', padding: 30 }}>
            <Card >
                <Grid>
                    <Grid.Col xs={9}>
                        <Text>
                            ©Rani Engineering Works (Rani Group Of Companies). All Rights Reserved (Terms of Use)<br />
                            Developed and Managed by IndiaMART InterMESH Limited
                        </Text>
                    </Grid.Col>
                    <Grid.Col xs={3}  >
                        <Group position='right' >

                            <img
                                className={classes.img2}
                                src="/assets/android-chrome-192x192.png"
                                width="20%"
                                alt="ImageName"
                            />
                        </Group>
                    </Grid.Col>
                </Grid>

            </Card>
        </div>
    )
}

export default Footer
