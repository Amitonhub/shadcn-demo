import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";
import { User, LogOut } from 'lucide-react';
import { useGlobalContext } from "@/app/context/store";
import { removeItem } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DEFAULTAVATAR } from "@/constants";
import { useRouter } from "next/navigation";

function UserDropdown() {
    const {username, isLogin, setIsLogin, setUsername } = useGlobalContext()
    const router = useRouter()

    const Logout = (() => {
        if (typeof window !== 'undefined') {
            setIsLogin(false)
            setUsername('')
            removeItem('isLogin')
            removeItem('username')
          }
    })

    const Settings = (() => {
        router.push('/home/settings')
    })
    return (<>
       <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center">
          <Button variant="ghost" className="relative h-8 w-8 rounded-full" title={username}>
            <Avatar className="h-8 w-8">
              <AvatarImage src={DEFAULTAVATAR} alt={username} />
              <AvatarFallback>Avatar</AvatarFallback> 
            </Avatar>
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{username}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {username}@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile - developing
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing - developing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={Settings}>
            Settings - developing
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={Logout}>
            <LogOut className="pr-2"/>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </>
    )
}

export default UserDropdown;
