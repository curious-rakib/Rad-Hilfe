import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Cards from "../../components/Cards";


const Home = () => {
    return (
        <div>
            <Text>Good Morning, <br /> Urich</Text>
            <Flex
                justifyContent={'space-between'}
                alignItems={'center'}

            >
                <Text>Riding Condition:Fair</Text>
                <Text>18°C</Text>
            </Flex>
            <Grid
                p={4}

                templateRows='repeat(4, 1fr)'
                templateColumns='repeat(6, 1fr)'
                gap={4}
            >
                <GridItem rowSpan={4} colSpan={2}  >
                    <Cards name={"My Bike"} w={""} h={"200px"} bg={"fourth"} color={'black'} ></Cards>
                </GridItem>
                <GridItem colSpan={4} rowSpan={2} bg='' >
                    <Cards name={"My Care Plans"} w={""} h={"90px"} bg={"accent"} color={'black'} ></Cards>
                </GridItem>
                <GridItem colSpan={4} rowSpan={2} bg='' >
                    <Cards name={"Request Support"} w={""} h={"90px"} bg={"third"} color={'black'} ></Cards>
                </GridItem>
                <GridItem colSpan={6} bg='' >
                    <Cards name={"My Bike Health"} w={""} h={"90px"} bg={"accent"} color={'black'} ></Cards>
                </GridItem>

            </Grid>
        </div>
    );
};

export default Home;