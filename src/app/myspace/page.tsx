'use client';

import Login from "../ui/login";
import { SideBarLeft } from "../ui/sidebars";
import { SideBarRight } from "../ui/sidebars";
import { useState } from 'react';
import  Grid  from "../ui/grid";


export default function MySpace() {
    const [isOpen, setIsOpen] = useState(true);
    function handleToggle() {
        setIsOpen((prevOpen) => !prevOpen);
    } 
    // const width = isOpen ? 'w-[calc(100%-124px)]' : 'w-full';
    return (
        <div className="flex flex-row">
            <SideBarLeft isOpen={isOpen} handleToggle={handleToggle}/>
            
            <div className={`${isOpen ? 'ml-[4px]' : 'ml-[-120px]'} m-4
                transition-all duration-1000 flex-grow text-center
                `}
                > 
                grids to be placed here <br />
                {/* to add a form to add new coding platform <br /> */}
                {/* <span className="font-bold">
                    to move this div left if the sidebarleft is closed
                </span> --------- fixed */}
                to add a feature to pin items. <br />
                to add a button in navbar to add new coding platform. <br />
                to make the create blog page


                <div className="md:hidden ml-[-60px]">
                    <Grid />
                </div>
                <div className="hidden md:block">
                    <Grid />
                </div>
            </div>
            <SideBarRight />

        </div>

    );
}