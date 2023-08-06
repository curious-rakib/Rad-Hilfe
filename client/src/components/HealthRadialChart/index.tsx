import React from 'react'
import {
    RadialBarChart,
    RadialBar,
    Legend,
    ResponsiveContainer,

} from "recharts";
import { Flex } from '@chakra-ui/react';
import { radialHealthData } from '../../data/radialHealthData';


const HealthRadialChart = () => {


    return (
        <>

            <Flex alignItems={"center"} width={'100vw'}>

                <RadialBarChart
                    width={350}
                    height={290}
                    cx={210}
                    cy={150}
                    innerRadius={50}
                    outerRadius={140}
                    barSize={10}
                    startAngle={90}
                    endAngle={360}
                    data={radialHealthData}
                >
                    <RadialBar
                        // minAngle={15}
                        label={{ position: 'end', fill: "#fff" }}

                        dataKey="health"
                    />
                    {/* <Legend
                        iconSize={10}
                        width={120}
                        height={140}
                        layout="vertical"
                        verticalAlign="middle"
                        wrapperStyle={style}
                    /> */}
                </RadialBarChart>

            </Flex>
        </>
    );
}

export default HealthRadialChart