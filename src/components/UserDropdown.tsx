import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";
import { User, LogOut } from 'lucide-react';
import { useGlobalContext } from "@/app/context/store";
import { removeItem } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

function UserDropdown() {
    const {username, isLogin, setIsLogin, setUsername } = useGlobalContext()

    const Logout = (() => {
        setIsLogin(false)
        setUsername('')
        removeItem('isLogin')
        removeItem('username')
    })
    return <>
        <DropdownMenu>
            <DropdownMenuTrigger>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{username}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
                {/* <Button variant="outline" size="icon"> */}
                {/* <User /> */}
                {/* <span className="sr-only">Toggle theme</span> */}
                {/* </Button> */}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-9">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem onClick={Logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </>;
}

export default UserDropdown;
