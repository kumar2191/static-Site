import { Box, Button, Grid, Group, Modal, NumberInput, TextInput, Textarea, Title, useMantineTheme } from '@mantine/core'
import React, { useState } from 'react'

function index() {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const theme = useMantineTheme()
    return (
        <>
            <Box sx={{
                // background: '#a2dee8',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }} >
                <Button size='xl' variant='gradient' onClick={() => {
                    setModalOpen(true)
                }} >Send Your Enquiry</Button>

            </Box>
            <Modal
                closeOnClickOutside={false}
                transition="fade"
                transitionDuration={300}
                transitionTimingFunction="ease"
                overlayColor={
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[9]
                        : theme.colors.gray[2]
                }
                overlayOpacity={0.55}
                overlayBlur={3}
                size="md"
                opened={modalOpen}
                onClose={() => {
                    setModalOpen(false)
                }}
                overflow="outside"
                style={{
                    borderRadius: "20px",
                }}
                title={<Title order={4}>Enquiry</Title>}
            >
                <Grid>
                    <Grid.Col xs={6}>
                        <NumberInput hideControls placeholder='Enter your Number' label="Phone Number" />

                    </Grid.Col>
                    <Grid.Col xs={6}>
                        <TextInput placeholder='Enter your Name' label="Name" />

                    </Grid.Col>
                    <Grid.Col xs={12}>
                        <Textarea placeholder='Describe Your Requirements in Detail' label="Name" />

                    </Grid.Col>
                    <Grid.Col xs={12}>
                        <Group position='center'>

                            <Button variant='gradient' >
                                Enquiry
                            </Button>
                        </Group>
                    </Grid.Col>
                </Grid>

            </Modal>
        </>
    )
}

export default index