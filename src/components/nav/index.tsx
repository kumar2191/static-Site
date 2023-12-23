import React, { useState } from "react";
import {
  createStyles,
  Header,
  Group,
  Divider,
  Box,
  Burger,
  Drawer,
  Container,
  Grid,
  Image,
  NumberInput,
  Title,
  TextInput,
  Button,
  Textarea,
  Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Link from "next/link";

const useStyles = createStyles((theme) => ({
  inner: {
    height: 70,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 1000,
    fontSize: theme.fontSizes.lg,
    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
  },
  link1: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
  },
  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colors.dark[7],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
      paddingleft: "2em",
    },
  },
  imgHidden: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
      paddingleft: "2em",
    },
  },

  hidden_BtnCointainer: {
    display: "none",
    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  logo: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  box1: {
    borderLeft: "1px solid #97FBFF",
    padding: "2em",
    height: "1rem",
  },
  box2: {
    border: "1px solid #97FBFF",
  },
  lmg: {
    width: "15px",
    height: "10px",
    float: "right",
  },
  name: {
    paddingBottom: "em",
  },
  subdiv: {
    borderRight: "2px solid #97FBFF",
    height: "100%",
    alignContent: "center",
    paddingRight: "1em",
  },
  subdiv2: {
    borderRight: "2px solid #97FBFF",
    height: "100%",
    alignContent: "center",
    paddingRight: "1em",
  },
  btntext: {
    display: "inline-flex",
    alignItems: "center",
    padding: " 0 24px",
    color: "black",
    height: "100%",
    borderRight: "1px solid #97FBFF",
  },
  button: {
    border: "2px solid #97FBFF",
    width: "auto",
    height: "auto",
    padding: "5px",
    display: "flex",
    wordSpacing: "0.5px",
  },
  linkLabel: {
    marginRight: 5,
    color: "white",
  },
}));




export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const { classes, theme } = useStyles();

  return (
    <Box mb={70}  >
      <Header height={70} px="md" >
        <Container className={classes.inner} fluid>
          <Group className={classes.imgHidden}>
            <Link href="/">
              <Image
                src="/assets/android-chrome-192x192.png"
                width={70}
                height={50}
                alt="ImageName"
                style={{
                  cursor: "pointer",
                  padding: 5,
                  borderRadius: '50%'

                  // background: 'white'
                  // marginTop: -20
                }}
              />
            </Link>
          </Group>
          <Group className={classes.logo}>
            <Link href="/">
              <img
                src="/assets/android-chrome-192x192.png"
                width={50}
                height={50}
                alt="ImageName"
                style={{
                  cursor: "pointer",
                }}
              />
            </Link>
          </Group>

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}>

            <Link
              href={{
                pathname: "/",
              }}>
              <a className={classes.link}>Home</a>
            </Link>

            <Link
              href={{
                pathname: "/product",
              }}>
              <a className={classes.link}>Product</a>
            </Link>
            <Box
              sx={{
                cursor: 'pointer'
              }}
              onClick={() => {
                setModalOpen(true)
              }}
            >
              <a className={classes.link}>Contatus</a>
            </Box>
            <Link
              href={{
                pathname: "/about",
              }}>
              <a className={classes.link}>About</a>
            </Link>


          </Group>


          <Burger
            ml={10}
            size={"sm"}
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Container>
      </Header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="md"
        padding="md"
        title="Rani Engineering Works"
        className={classes.hiddenDesktop}
        zIndex={1000000}>
        {/* <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md"> */}
        <Divider
          my="sm"
          color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
        />
        <Grid>

          {/* <Grid.Col xs={12} >

            <Link
              href={{
                pathname: "/",
              }}>
              <a onClick={() => closeDrawer()} className={classes.link}>
                <Group position="center" >

                  <IconHome />
                  <Text  >Home</Text>
                </Group>
              </a>
            </Link>
          </Grid.Col> */}
          <Grid.Col xs={12}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '20px'
            }} >
              {/* <IconCoin /> */}
              <Link
                href={{
                  pathname: "/",
                }}>
                <a onClick={() => closeDrawer()} className={classes.link}>
                  Home
                </a>
              </Link>
            </Box>

          </Grid.Col>


          <Grid.Col xs={12}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '20px'
            }} >
              {/* <IconCoin /> */}
              <Link
                href={{
                  pathname: "/product",
                }}>
                <a onClick={() => closeDrawer()} className={classes.link}>
                  Product
                </a>
              </Link>
            </Box>

          </Grid.Col>
          <Grid.Col xs={12}>
            <Box sx={{
              display: 'flex',
              // justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '20px'
            }} >
              {/* <IconCoin /> */}
              <Box onClick={() => {
                setModalOpen(true)
              }}>
                <a onClick={() => closeDrawer()} className={classes.link}>
                  Contact Us
                </a>
              </Box>
            </Box>

          </Grid.Col>
          <Grid.Col xs={12}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '20px'
            }} >
              {/* <IconCoin /> */}
              <Link
                href={{
                  pathname: "/about",
                }}>
                <a onClick={() => closeDrawer()} className={classes.link}>
                  About
                </a>
              </Link>
            </Box>

          </Grid.Col>






          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />


        </Grid>
      </Drawer>
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

    </Box>
  );
}
