import { Box, Grid, Group, Progress, Rating, Text, Title, useMantineTheme } from '@mantine/core'
import React from 'react'
import { BsFillHandThumbsUpFill } from 'react-icons/bs';
const index = () => {
    const theme = useMantineTheme()
    return (
        <Box sx={{
            background: '#94b6e9'
        }} >
            <Group position='center' >
                <Title>Ratings & Reviews</Title>
            </Group>
            <Grid mt={theme.spacing.md} >
                <Grid.Col xs={3} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Group position='center' sx={{
                        flexDirection: 'column'
                    }} >
                        <Box display={'flex'} sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                            <Title>4.4/5</Title>
                            <Rating size="xl" value={4.5} fractions={2} readOnly />

                        </Box>
                        <Text>Reviewed by 16 Users

                        </Text>
                    </Group>
                </Grid.Col>
                <Grid.Col xs={5} sx={{
                    // display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 50
                }} >

                    <Box sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Group position='center' mb={'sm'} >

                            <Title order={4} >Review's from Customer's</Title>
                        </Group>
                        <Progress
                            radius="xl"
                            size={24}
                            animate
                            // sx={{
                            //     width: '150%'
                            // }}
                            sections={[
                                {
                                    value: 40, color: 'green', label: `5⭐`, tooltip: <>
                                        <Box sx={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            display: 'flex'
                                        }}>

                                            <Title order={3} >50% </Title>

                                        </Box>
                                    </>
                                },
                                {
                                    value: 19, color: 'yellow', label: `4⭐`, tooltip: <>
                                        <Box sx={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            display: 'flex'
                                        }}>

                                            <Title order={3} >19% </Title>

                                        </Box>
                                    </>
                                },
                                {
                                    value: 15, color: 'indigo', label: `3⭐`, tooltip: <>
                                        <Box sx={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            display: 'flex'
                                        }}>

                                            <Title order={3} >6% </Title>

                                        </Box>
                                    </>
                                },
                                {
                                    value: 19, color: 'violet', label: `2⭐`, tooltip: <>
                                        <Box sx={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            display: 'flex'
                                        }}>

                                            <Title order={3} >19% </Title>

                                        </Box>
                                    </>
                                },
                                {
                                    value: 7, color: 'red', label: `1⭐`, tooltip: <>
                                        <Box sx={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            display: 'flex'
                                        }}>

                                            <Title order={3} >6% </Title>

                                        </Box>
                                    </>
                                },
                            ]}
                        />
                        {/* <Progress size="md" radius={'lg'} color="green" value={50} animate /> */}
                    </Box>

                </Grid.Col>
                <Grid.Col xs={4}>
                    <Box  >
                        <Group position='center' >
                            <Title order={3} > <BsFillHandThumbsUpFill color='green' /> User Satisfaction</Title>
                        </Group>
                        <Box p={'sm'} >
                            <Group position='apart' >

                                <Text>Response</Text>
                                <Text>75%</Text>
                            </Group>
                            <Progress value={52} size={'lg'} color='green' animate />
                        </Box>
                        <Box p={'sm'} >
                            <Group position='apart' >

                                <Text>Quality</Text>
                                <Text>100%</Text>
                            </Group>
                            <Progress value={100} size={'lg'} color='green' animate />
                        </Box>
                        <Box p={'sm'} >
                            <Group position='apart' >

                                <Text>Delivery   </Text>
                                <Text>100%</Text>
                            </Group>
                            <Progress value={100} size={'lg'} color='green' animate />
                        </Box>
                    </Box>
                </Grid.Col>
            </Grid>
        </Box>
    )
}

export default index