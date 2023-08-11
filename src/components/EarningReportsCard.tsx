import { ICardProps } from "@/app/home/types";
import {
    Card,
} from "@/components/ui/card"
import { CalendarDashboard } from "./DashboardCalender";

function EarningReportsCard(props: ICardProps) {
    return <>
        <Card className="1/3 w-full h-64">
            <div className="relative flex flex-col top-4 left-3 gap-4">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Filter by date
                </h1>
                <CalendarDashboard />
            </div>
        </Card>

    </>;
}

export default EarningReportsCard;
