import { Button, Flex, HStack, Icon, Stack, Text, Image, Tabs, TabList, TabPanels, TabPanel, Tab } from "@chakra-ui/react";
import { CustomCard } from "../../../Chakra/CustomCard";
import { BsArrowUpRight } from 'react-icons/bs';
import { AiFillPlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
const PriceSection = () => {
    const timeStamps = ["7:15 PM", "8:15 PM", "9:15 PM", "10:15 PM", "11:15 PM"]

    return (
        <CustomCard>
            <Flex justify="space-between" align="start">
                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="sm" >Wallet Balances</Text>

                    </HStack>
                    <HStack spacing={4}
                        flexDir={{
                            base: "column",
                            sm: "row",
                        }}
                        align={{
                            base: "flex-start",
                            sm: "center",
                        }}
                    >
                        <HStack >
                            <Text textStyle="h2" fontWeight="medium">22.39401000</Text>
                            <HStack fontWeight="medium" color="green">
                                <Icon as={BsArrowUpRight} />
                                <Text fontSize="sm" fontWeight="medium">22%</Text>

                            </HStack>

                        </HStack>
                    </HStack>

                </Stack>
                <HStack>
                    <Button
                        leftIcon={
                            <Icon as={AiFillPlusCircle} />
                        }
                    >Buy</Button>
                    <Button
                        leftIcon={
                            <Icon as={AiOutlineMinusCircle} />
                        }
                    >Sell</Button>
                </HStack>
            </Flex>
            <Tabs variant='soft-rounded' colorScheme='green'>
                <Flex justify="end" >
                    <TabList bg="black.5" p="3px">
                        {
                            ["1H", "1D", "1W", "1M"].map((tab) => (
                                <Tab
                                    _selected={{ bg: "white" }}
                                    key={tab} fontSize="sm" p="6px" borderRadius="4">{tab}</Tab>
                            ))
                        }


                    </TabList>
                </Flex>
                <TabPanels>
                    <TabPanel>
                        <Image w="100%" src="\Graph.png" mt="48px" />
                        <HStack justify="space-between">
                            {
                                timeStamps.map((timeStamp) => (
                                    <Text
                                        key={timeStamp} fontSize="sm" color="black.80"
                                    >{timeStamp}</Text>
                                ))
                            }
                        </HStack>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </CustomCard>
    )
}
export default PriceSection;