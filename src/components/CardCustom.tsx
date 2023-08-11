import { ICardProps } from "@/app/home/types";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import React from "react";
import DoughnutChart from "./Chart";

function CardCustom(props: ICardProps) {
    return <>
        <div>
            <Card className="1/3 w-full h-56">
                <div className="flex">
                    <div className="w-1/2">
                    <CardHeader className="w-max">
                        <CardTitle>{props.cardTitle}</CardTitle>
                        <CardDescription>{props.cardDiscription}</CardDescription>
                    </CardHeader>
                    <CardContent className="w-max">
                        <h2 className="w-fit scroll-m-4 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                            ${props.cardContent}
                        </h2>
                    </CardContent>
                    <CardFooter className="w-max">
                        <p>{props.cardFooter}</p>
                    </CardFooter>
                    </div>
                    <div className="w-auto px-4 relative top-7">
                        <DoughnutChart />
                    </div>
                </div>

            </Card>
        </div>
    </>;
}

export default CardCustom;
