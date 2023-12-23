import { Grid } from '@mantine/core';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    const Image = [
        {
            image: "https://4.imimg.com/data4/HV/RG/MY-1981111/concrete-mixing-machine-with-diesel-engine-500x500.jpg"
        },
        {
            image: "https://5.imimg.com/data5/SELLER/Default/2021/9/CO/GX/NU/1981111/block-shifting-trolley-500x500.JPG"
        },
        {
            image: "https://3.imimg.com/data3/BQ/UM/MY-4034565/latest-pictures-motoe-010415-007-500x500.jpg"
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
                    interval={3000}
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