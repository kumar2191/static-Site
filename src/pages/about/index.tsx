import React from 'react'
import RatingsandReviews from '../../components/RatingPage/index'
import RatingCard from '../../components/ReviewCard/index'
import { Grid } from '@mantine/core'
const index = () => {
    const data = [{
        name: 'S',
        date: "21-September-22",
        text1: "Saravanakumar",
        text2: "Tiruchirappalli, Tamil Nadu",
        text3: "Heavy Duty Wheelbarrow",
        text4: "Good enough",
    },
    {
        name: 'D',
        date: "29-August-21",
        text1: "Dharma Champana Rathore",
        text2: "Solapur, Maharashtra",
        text3: "Everon Impex Brick Making Machines",
        text4: "Good enough",
    },
    {
        name: 'AK',
        date: "21-September-22",
        text1: "Ajith Kumar",
        text2: "Chennai, Tamil Nadu",
        text3: "Heavy Duty Wheelbarrow",
        text4: "Good enough",
    },
    ]
    return (
        <div>
            <RatingsandReviews />
            <Grid>
                {
                    data?.map((item) => {
                        return (
                            <Grid.Col xs={4}>
                                <RatingCard
                                    name={item.name}
                                    date={item.date}
                                    text1={item.text1}
                                    text2={item.text2}
                                    text3={item.text3}
                                    text4={item.text4}

                                />

                            </Grid.Col>

                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default index