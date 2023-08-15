import { Box, Button, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import microfn from "./../../assets/microfn.svg";

const arr: ChatItem[] = [
    {
        type: "text",
        data: ["hi......", "select which issues u r facing so that we can help"],
        from: "bot",
    },
    {
        type: "option",
        data: [
            {
                selected: false,
                value: " Bike damaged",
            },
            {
                selected: false,
                value: " part replacement",
            },
            {
                selected: false,
                value: "Maintenance",
            },
            {
                selected: false,
                value: "other",
            },
        ],
        from: "user",
    },
    {
        type: "text",
        data: [
            "we r opening an Active case number 1234",
            "Which part or parts need to be replaced or repaired",
        ],
        from: "bot",
    },
    {
        type: "option",
        data: [
            {
                selected: false,
                value: " Gear shifters",
            },
            {
                selected: false,
                value: " Hub disc rotors",
            },
            {
                selected: false,
                value: "chain",
            },
            {
                selected: false,
                value: "Crank arm",
            },
            {
                selected: false,
                value: " Derailleur",
            },
            {
                selected: false,
                value: " pedal",
            },
            {
                selected: false,
                value: "Chain ring",
            },
            {
                selected: false,
                value: "casettle",
            },
        ],
        from: "user",
    },
    {
        type: "text",
        data: ["Let's book a time with support. Which day works for you?"],
        from: "bot",
    },
];

type Option = {
    selected: boolean;
    value: string;
};

type ChatItem =
    | {
        type: "text";
        data: string[];
        from: "bot";
    }
    | {
        type: "option";
        data: Option[];
        from: "user";
    };

const Chat: React.FC = () => {
    const [curindex, setCurindex] = useState<number>(0);
    const [messages, setMessages] = useState<ChatItem[]>([]);

    const addNewMessage = () => {
        if (curindex + 1 === arr.length) {
            return;
        }

        setMessages((prev) => [...prev, arr[curindex]]);

        setTimeout(() => {
            setMessages((prev) => [...prev, arr[curindex + 1]]);
            setCurindex(curindex + 2);
        }, 1000);
    };

    const handleclick = (step: number, option: number) => {
        const updatedArr = [...messages];
        updatedArr[step].data[option].selected =
            !updatedArr[step].data[option].selected;
        setMessages(updatedArr);
        // console.log(step, " ----", option);
    };

    useEffect(() => {
        addNewMessage();
    }, []);

    return (
        <div className=" overflow-y-auto">
            <div>
                {messages.map((item, index1) =>
                    item.from === 'bot' ? (
                        <div className="flex flex-col" key={index1}>
                            {item.data.map((data, index2) => (
                                <Box
                                    key={index2}
                                    bg="#EDCBEF"
                                    w="9/12"
                                    color="black"
                                    p={3}
                                    rounded="xl"
                                    m={3}
                                >
                                    {data}
                                </Box>
                            ))}
                        </div>
                    ) : (
                        <div className=" flex flex-wrap justify-end " key={index1}>
                            {item.data.map((option, index2) =>
                                option.selected === false ? (
                                    <Button
                                        key={index2}
                                        onClick={() => handleclick(index1, index2)}
                                        colorScheme="blue"
                                        size="lg"
                                        rounded="xl"
                                        h="40px"
                                        m={2}
                                        w="150px"
                                        textAlign="center"
                                        borderColor="blue.500"
                                    >
                                        {option.value}
                                    </Button>
                                ) : (
                                    <Button
                                        key={index2}
                                        onClick={() => handleclick(index1, index2)}
                                        bg="#C1FAA6"
                                        color="black"
                                        size="lg"
                                        rounded="xl"
                                        h="40px"
                                        m={2}
                                        w="150px"
                                        textAlign="center"
                                        borderColor="#C1FAA6"
                                    >
                                        {option.value}
                                    </Button>
                                )
                            )}
                        </div>
                    )
                )}
                <Button
                    onClick={addNewMessage}
                    colorScheme="green"
                    size="lg"
                    rounded="xl"
                    bg="#C1FAA6"
                    ml={16}
                    h="40px"
                    m={2}
                    w="81.5%"
                    textAlign="center"
                    borderColor="#C1FAA6"
                >
                    Confirm
                </Button>
            </div>

            <div className=" flex  justify-around p-2   sticky bottom-0">
                <Box className="bg-[#C1FAA6]" h="9" w="9" rounded="full">
                    <p className="text-black text-2xl font-semibold text-center ">+</p>
                </Box>
                <Box>
                    <Input
                        className="border border-[#C1FAA6] rounded-xl bg-[#001F3F] w-[300px] p-2 px-3"
                        type="text"
                    />
                </Box>
                <div className=" text-2xl">
                    {/* <img className=" h-8 " src={microfn} alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default Chat;
