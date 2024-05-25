'use client';

import Login from "../ui/login";
import { SideBarLeft } from "../ui/sidebars";
import { SideBarRight } from "../ui/sidebars";
import { useState } from 'react';


export default function MySpace() {
    const [isOpen, setIsOpen] = useState(true);
    function handleToggle() {
        setIsOpen((prevOpen) => !prevOpen);
    } 
    return (
        <div className="flex flex-row">
            <SideBarLeft isOpen={isOpen} handleToggle={handleToggle}/>
            
            <div className={`${isOpen ? 'translate-x-0' : '-translate-x-[124px]'} m-4 transition-transform duration-1000`}> 
                grids to be placed here <br />
                to add a form to add new coding platform <br />
                {/* <span className="font-bold">
                    to move this div left if the sidebarleft is closed
                </span> --------- fixed */}
                to add a feature to pin items <br />
                to add a feature to add blog posts.
            </div>

            <SideBarRight />

        </div>

    );
}