import React from "react";
import { ModeToggle } from "./ModeToggle";
import UserDropdown from "./UserDropdown";

function Navbar() {
    return (
        <>
            <div className='flex items-center justify-between'>
                <h1 className="text-4xl font-bold text-center my-8">Shad-cn-Demo-AT</h1>
                <div className='flex gap-2'>
                    <ModeToggle />
                    <div className="mr-2 flex justify-self-end">
                        <UserDropdown />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
