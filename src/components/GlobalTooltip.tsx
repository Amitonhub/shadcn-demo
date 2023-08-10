import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import React from "react";

function GlobalTooltip(name : string) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>Hover</TooltipTrigger>
                <TooltipContent>
                    <p>{name}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default GlobalTooltip;

