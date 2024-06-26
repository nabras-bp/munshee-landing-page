import {
  HStack,
  Text,
  VStack,
  FormControl,
  Input,
  Button,
  Box,
  Stack,
  Link,
  Center,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Footer = () => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w0egw75",
        "template_wajqz9i",
        form.current,
        "yn6idBxRBXrYjNWpk"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <Box w={"full"}>
      <VStack>
        <Grid
          my={{ base: 12, md: 24 }}
          gap={{ base: 10, lg: 12, "2xl": 24 }}
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(4, 1fr)",
            "2xl": "repeat(4, 1fr)",
          }}
          templateRows={{
            base: "repeat(4, 1fr)",
            sm: "repeat(4, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(1, 1fr)",
          }}
          w={{
            base: "calc(100vw - 50px)",
            sm: "calc(100vw - 100px)",
            md: "calc(100vw - 200px)",
            lg: "calc(100vw - 200px)",
            "2xl": "calc(100vw - 200px)",
          }}
        >
          <GridItem
            w={"full"}
            colSpan={{ base: 1, sm: 1, md: 4, lg: 1, "2xl": 1 }}
          >
            <VStack align="start" spacing={{ base: 6, "2xl": 10 }}>
              <Text fontWeight={600} fontSize={40} fontFamily={"Jost"}>
                MUNSHEE
              </Text>
              <Text fontSize={16} fontWeight={400}>
                As your Business Manager, I handle strategic planning,
                operations, finances, and marketing. I ensure excellent customer
                relations, team management, and performance monitoring. My goal
                is to drive efficiency and growth for your business.
              </Text>
              <HStack as={FormControl}>
                <HStack>
                  <form ref={form} id="sendEmail" onSubmit={sendEmail}>
                    <HStack>
                      <Input
                        placeholder="Email Address"
                        borderRadius={"var(--chakra-radii-xl)"}
                        _placeholder={{
                          color: "primary.100",
                        }}
                        size={"lg"}
                        borderWidth={"2px"}
                        bgColor={"secondary.700"}
                        name="user_email"
                      />
                      <Button
                        px={10}
                        fontSize={16}
                        fontWeight={600}
                        fontFamily={"Poppins"}
                        borderRadius={"var(--chakra-radii-xl)"}
                        form={"sendEmail"}
                        type="submit"
                      >
                        Register
                      </Button>
                    </HStack>
                  </form>
                </HStack>
              </HStack>
            </VStack>
          </GridItem>
          <GridItem w={"full"}>
            <VStack align="start" spacing={{ base: 6, "2xl": 12 }}>
              <Heading as={"h6"} fontSize={30} fontWeight={400}>
                Categories
              </Heading>
              <Stack
                direction={{
                  base: "column",
                  sm: "column",
                  md: "column",
                  lg: "column",
                  "2xl": "column",
                }}
                spacing={{ base: 3, md: 4, lg: 5, "2xl": 6 }}
              >
                <Link fontSize={16} fontWeight={400} letterSpacing={"4%"}>
                  Web/ Mobile Application
                </Link>
                <Link fontSize={16} fontWeight={400} letterSpacing={"4%"}>
                  Warehouse/ Logistics
                </Link>
                <Link fontSize={16} fontWeight={400} letterSpacing={"4%"}>
                  Marketing
                </Link>
                <Link fontSize={16} fontWeight={400} letterSpacing={"4%"}>
                  Employee Managment
                </Link>
                <Link fontSize={16} fontWeight={400} letterSpacing={"4%"}>
                  Auditing
                </Link>
              </Stack>
            </VStack>
          </GridItem>
          <GridItem w={"full"}>
            <VStack align={"start"} h={"full"}>
              <Heading
                as={"h6"}
                fontSize={30}
                fontWeight={400}
                letterSpacing={"4%"}
              >
                About
              </Heading>
              <Stack
                direction={{
                  base: "column",
                  sm: "column",
                  md: "column",
                  lg: "column",
                  "2xl": "column",
                }}
                spacing={{ base: 3, md: 4, lg: 5, "2xl": 6 }}
              >
                <Link fontSize={16} fontWeight={400} letterSpacing={"4%"}>
                  About US
                </Link>
                <Link fontSize={16} fontWeight={400} letterSpacing={"4%"}>
                  Partnerships
                </Link>
                <Link fontSize={16} fontWeight={400} letterSpacing={"4%"}>
                  Finance Experts
                </Link>
                <Link fontSize={16} fontWeight={400} letterSpacing={"4%"}>
                  Project Managment
                </Link>
                <Link fontSize={16} fontWeight={400} letterSpacing={"4%"}>
                  The Team
                </Link>
              </Stack>
            </VStack>
          </GridItem>
          <GridItem w={"full"}>
            <VStack align="start" spacing={{ base: 8, "2xl": 12 }}>
              <Heading as={"h6"} fontSize={30} fontWeight={400}>
                Follow Us
              </Heading>
              <Stack
                direction={{
                  base: "column",
                  sm: "column",
                  md: "column",
                  lg: "column",
                  "2xl": "column",
                }}
                spacing={{ base: 3, md: 4, lg: 5, "2xl": 6 }}
              >
                <Link fontSize={16} fontWeight={400} letterSpacing={"4%"}>
                  Facebook
                </Link>
                <Link fontSize={16} fontWeight={400} letterSpacing={"4%"}>
                  Twitter
                </Link>
                <Link fontSize={16} fontWeight={400} letterSpacing={"4%"}>
                  Instagram
                </Link>
                <Link fontSize={16} fontWeight={400} letterSpacing={"4%"}>
                  LinkedIn
                </Link>
              </Stack>
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
      <Center bgColor={"blue.300"} py={4}>
        <Text
          textAlign={"center"}
          fontWeight={600}
          fontSize={{ base: 18, sm: 20, md: 22, lg: 22 }}
          w={{
            base: "calc(100vw - 50px)",
            sm: "calc(100vw - 100px)",
            md: "calc(100vw - 200px)",
            lg: "calc(100vw - 200px)",
            "2xl": "calc(100vw - 200px)",
          }}
          color={"secondary.800"}
        >
          Copyright @ 2024 All rights reserved Munshee
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;
