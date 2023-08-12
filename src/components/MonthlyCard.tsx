import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { MonthlyChart } from "./MonthlyChart";


function MonthlyCard() {
    return <>
        <Card className="w-full">
            <CardHeader className="!flex-row justify-between">
                <CardTitle>Monthly Activity</CardTitle>
                <div className="flex gap-3">
                <CardDescription>
                    months : 12
                    </CardDescription>
                <CardDescription>year : 2023</CardDescription>
                </div>
            </CardHeader>
            <div className="flex h-72 justify-center w-full">
                <MonthlyChart/>
            </div> 
            <CardFooter>
            </CardFooter>
        </Card>

    </>;
}

export default MonthlyCard;
