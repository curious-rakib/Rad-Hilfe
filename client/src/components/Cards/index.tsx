import { Card } from '@chakra-ui/react';


const setCard = ({ name, w, h, bg, color }: {
    name: string;
    w: string;
    h: string;
    bg: string;
    color: string;

}) => {
    return (

        <Card
            w={w}
            h={h}
            color={color}
            bg={bg}
            fontWeight={100}

        >
            {name}
        </Card>

    );
};

export default setCard;