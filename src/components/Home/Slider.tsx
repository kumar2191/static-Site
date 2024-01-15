import { Grid } from '@mantine/core';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
const Slider = () => {
    const Image = [
        {
            image: "/assets/Rani/01.jpg"
        },
        {
            image: "/assets/Rani/02.jpg"
        },
        {
            image: "/assets/Rani/03.jpg"
        },
        {
            image: "/assets/Rani/04.jpg"
        },
        {
            image: "/assets/Rani/010.jpg"
        },

    ]
    return (
        <div>
            <Grid sx={{
                // background: 'black'
            }} >
                <Carousel
                    infiniteLoop
                    autoPlay
                    interval={1000}
                    swipeable
                    showThumbs={false}
                >


                    {
                        Image?.map((item: any, i: number) => {
                            return (
                                <div key={i} >
                                    <img style={{
                                        height: '500px',
                                        width: '90%'
                                    }} src={item?.image} alt="not" />

                                </div>
                            )
                        })
                    }

                </Carousel>
            </Grid>
        </div>
    )
}

export default Slider