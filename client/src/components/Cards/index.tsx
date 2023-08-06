import { Box, Card, Center, CircularProgress, Flex, Text } from '@chakra-ui/react';
import HealthRadialChart from '../../components/HealthRadialChart';

const setCard = ({ name, w, h, bg, py, px, color, textStyle }: {
    name: string;
    w: string;
    h: string;
    bg: string;
    color: string;
    textStyle: string;
    py: string;
    px: string

}) => {
    return (

        <Card
            w={w}
            h={h}
            color={color}
            bg={bg}
            fontWeight={100}
            sx={
                { borderRadius: "20px" }
            }



        >
            {
                name === 'My Bike Health' ? <>
                    <Flex
                        alignItems="center"
                        justifyContent="center"
                    ><Text textStyle={textStyle} px={px} py={py}> {name}</Text>
                        <CircularProgress value={70} size='100px' mr={5} /></Flex>
                </> : <Text textStyle={textStyle} px={px} py={py}> {name}</Text>
            }


        </Card>

    );
};

export default setCard;