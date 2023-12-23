import { Avatar, Box, Card, Grid, Group, Rating, Text, } from '@mantine/core'
import React, { useEffect, } from 'react'
import { useStyles } from "./Styles";
import AOS from 'aos';
import 'aos/dist/aos.css';
type CardProps = {
    name: string,
    date: string,
    text1: string,
    text2: string,
    text3: string,
    text4: string,

};

const index: React.FC<CardProps> = (props) => {
    const { name, date, text1, text2, text3, text4, } = props;
    // console.log(header);
    const { classes } = useStyles();
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <Card
                shadow="sm"
                p={'xl'}
                className={classes.card}
            >
                <Group position='apart' >

                    <Box display={'flex'} sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Avatar color="cyan" radius="xl"  >{name}</Avatar>
                        <Rating defaultValue={3} size="sm" readOnly />
                    </Box>
                    <Text>{date}</Text>
                </Group>
                <Grid>
                    <Grid.Col xs={12}>
                        <Box display={'flex'} sx={{
                            flexDirection: 'column',
                        }}>
                            <Text>{text1}</Text>
                            <Text>{text2}</Text>

                            <Text> <b>Product Name :</b>
                                {text3}</Text>
                            <Text>{text4}
                            </Text>

                        </Box>
                    </Grid.Col>
                </Grid>



            </Card>

        </>
    )
}

export default index