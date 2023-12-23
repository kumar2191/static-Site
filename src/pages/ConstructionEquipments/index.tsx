import { Box, Grid, Title, useMantineTheme, Text, Space, } from '@mantine/core'
import React, { useEffect } from 'react'
import CardContainer from '../../components/Card/index'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Data, } from 'src/utils/prodectdetails';
const index = () => {
    const theme = useMantineTheme()
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Box mt={theme.spacing.sm} p={theme.spacing.sm} >
            <Box data-aos="fade-up-right" data-aos-duration="2000" >
                <Title order={3} color='grape' >Product Range</Title>
                <Text size="md" p={5} >
                    We are one of the noted manufacturers and suppliers of a technically advanced range
                    of Construction and Material Handling Equipments like Block Machine, Block Making Machines
                    and Mobile Vibrators. High-quality raw material is used in designing our range to make sure
                    that it stands high in both reliability and durability. Manufactured at par with international
                    quality standards, our range can be customized as per the specifications stated by the clients.
                </Text>
            </Box>
            <Space h={theme.spacing.lg} />

            <Title order={4} color='lime' >Construction Equipments</Title>
            <Grid mt={theme.spacing.md} >
                {
                    Data?.map((item, i) => {
                        return (


                            <Grid.Col xs={3} key={i} >

                                <CardContainer
                                    image={item?.image}
                                    header={item?.header}
                                />
                            </Grid.Col>

                        )
                    })
                }
            </Grid>




        </Box>
    )
}

export default index