import { Box, Grid, Title, useMantineTheme, Text, Space, } from '@mantine/core'
import React, { useEffect } from 'react'
import CardContainer from '../Card/index'
import AOS from 'aos';
import 'aos/dist/aos.css';
const ProductShow = () => {
    const theme = useMantineTheme()
    useEffect(() => {
        AOS.init();
    }, [])

    const NavigateData = [
        {
            image: "https://apolloinffratechblog.apolloinffratech.com/wp-content/uploads/2016/08/quality-of-raw-material-of-construction-equipment.jpg",
            header: "Construction Equipments",
            link: "/ConstructionEquipments"
        },
        {
            image: "data:image/jpeg;base64,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",
            header: "Block Making Machines",
            link: "/BlockMaking"
        },
        {
            image: "https://5.imimg.com/data5/SELLER/Default/2022/5/FU/UW/JG/7659350/machinery-for-paver-block-plant-500x500.jpg",
            header: "Designer Tiles and Paver Blocks Machines  ",
            link: "/Designertiles"
        },
        {
            image: "https://plantcaretoday.com/wp-content/uploads/wheel-barrow-01-06302017-min.jpg",
            header: "Wheel Barrow",
            link: "/WheelBarrow"
        },
        {
            image: "https://i.ytimg.com/vi/6Y_tP34lvYo/sddefault.jpg",
            header: "Concrete Mixer Machine for Construction Site",
            link: "/Concretemixer"
        },
        {
            image: "https://sog.hmtindia.co.in/wp-content/uploads/2019/01/22-1.jpg",
            header: "Block Machine",
            link: "/BlockMachine"
        },
    ]


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

            <Title order={4} color='lime' >Products</Title>
            <Grid mt={theme.spacing.md} >
                {
                    NavigateData?.map((item, i) => {
                        return (


                            <Grid.Col xs={3} key={i} >

                                <CardContainer
                                    image={item?.image}
                                    header={item?.header}
                                    link={item?.link}
                                />
                            </Grid.Col>

                        )
                    })
                }
            </Grid>




        </Box>
    )
}

export default ProductShow