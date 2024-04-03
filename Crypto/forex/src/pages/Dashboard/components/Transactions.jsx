import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa";
import { CustomCard } from "../../../Chakra/CustomCard";
import { Text, Box, Stack, Flex, Icon, Grid, Divider, Button } from "@chakra-ui/react";
import { Fragment } from "react";
const Transactions = () => {
    const transactions = [
        {
            id: "1",
            icon: BsCurrencyRupee,
            text: "Inr Deposit",
            amout: "+ ₹81,123.10",
            timestamp: "2022-06-09 7:06 PM",
        },
        {
            id: "2",
            icon: FaBtc,
            text: "BTC Sell",
            amout: "- 12.48513391 BTC",
            timestamp: "2022-05-27 12:32 PM",
        },
        {
            id: "3",
            icon: BsCurrencyRupee,
            text: "Inr Deposit",
            amout: "+ ₹81,123.10",
            timestamp: "2022-06-09 7:06 PM",
        },

    ]
    return (
        <CustomCard h="full">
            <Text mb="6" fontSize="sm" color="black.80">
                Recent Transactions
            </Text>
            <Stack spacing={4}>
                {
                    transactions.map((transaction, i) => (
                        <Fragment key={transactions.id}>
                            {i != 0 && <Divider />}
                            <Flex gap={4}  >
                                <Grid placeItems="center" bg="black.5" boxSize={10} borderRadius="full">
                                    <Icon as={transaction.icon} />
                                </Grid>
                                <Flex justify="space-between" w="full">
                                    <Stack spacing={0}>
                                        <Text fontSize="sm" textStyle="h6">{transaction.text}</Text>
                                        <Text fontSize="sm" color="black.40">{transaction.timestamp}</Text>
                                    </Stack>
                                    <Text fontSize="sm" textStyle="h6">{transaction.amout}</Text>

                                </Flex>
                            </Flex>
                        </Fragment>
                    ))
                }

            </Stack>
            <Button w="full" colorScheme="gray" mt="6">View All</Button>
        </CustomCard>
    )
}
export default Transactions;