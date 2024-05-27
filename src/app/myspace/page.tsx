'use client';

import Login from "../ui/login";
import { SideBarLeft } from "../ui/sidebars";
import { SideBarRight } from "../ui/sidebars";
import { useState } from 'react';
import  Grid  from "../ui/grid";
import Blog from "../ui/blog";


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
                <h1 className="text-2xl text-start px-2"> Immediate Tasks: </h1>
                each blog post has to redirect to the bog<br />
                to add a feature to pin items. <br />
                to make the create blog page
                
                <div className="flex flex-row flex-wrap justify-center">
                    <Blog isOpen={isOpen} handleToggle={handleToggle}/>
                    <Blog isOpen={isOpen} handleToggle={handleToggle}/>
                    <Blog isOpen={isOpen} handleToggle={handleToggle}/>
                </div>

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