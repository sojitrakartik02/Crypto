import { HStack, Stack, Icon, Text, Tag, Button } from "@chakra-ui/react";
import { AiOutlineArrowUp, AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineArrowDown } from 'react-icons/ai';
const PortfolioSection = () => {
    return (
        <HStack
         justify="space-between" bg="white" borderRadius="xl" p="6"
            flexDir={{
                base: "column",
                xl: "row",
            }}
            align={{
                base: "flex-start",
                xl: "center",
            }}
            spacing={{ base: "4", xl: "0" }}
        >
            <HStack 
            spacing={{
                base: "0",
                xl: "16",
            }}
                flexDir={{
                    base: "column",
                    xl: "row",
                }}
                align={{
                    base: "flex-start",
                    xl: "center",
                }}
            >
                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="sm" >Total Portfolio value</Text>
                        <Icon as={AiOutlineInfoCircle} />
                    </HStack>
                    <Text textStyle="h2" fontWeight="medium">₹ 112,312.24</Text>
                </Stack>

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
                            <Tag colorScheme="gray">BTC</Tag>
                        </HStack>
                        <HStack>
                            <Text textStyle="h2" fontWeight="medium">₹ 1,300.00</Text>
                            <Tag colorScheme="gray">INR</Tag>
                        </HStack></HStack>

                </Stack>
            </HStack>


            <HStack>
                <Button
                    leftIcon={
                        <Icon as={AiOutlineArrowDown} />
                    }
                >Deposite</Button>
                <Button
                    leftIcon={
                        <Icon as={AiOutlineArrowUp} />
                    }
                >WithDraw</Button>
            </HStack>

        </HStack>
    )
}
export default PortfolioSection;