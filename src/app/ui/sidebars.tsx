'use client';
import Image from 'next/image';
import { SideBarLeftProps } from './types';

export function SideBarLeft({isOpen, handleToggle}: SideBarLeftProps) {
    
    // const [isOpen, setIsOpen] = useState(true);
    // function handleToggle() {
    //     setIsOpen((prevOpen) => !prevOpen);
    // } 

    return (
        <div className={`md:w-36 w-36 flex flex-row 
            gap-0
            relative 
            ${isOpen ? 'translate-x-0' : 'translate-x-[-124px]'}
            transition-transform duration-1000 ease-in-out
        `}>
            <div className={`
                flex flex-col shadow-lg 
                min-h-screen rounded-sm
                md:w-[100%] w-[124px]
                bg-blue-700 
                border-r
                transition-transform duration-1000 ease-in-out 
                md:translate-x-0 px-4 py-8 items-center
            `}>
                
                <Image className='rounded-full justify-self-start'
                    src="/photo.jpeg" alt="myspace photo" 
                    height={100} width={100}   
                />
                <span className='mt-40'> Github </span>
                <span> Linkedin </span>
                <span> Twitter </span>
                <span> Leetcode </span>
            </div>
            <button className={`
                bg-black/50
                text-white
                text-sm
                h-8 w-5
                md:hidden
                text-start
                m-0
            `}
            onClick={handleToggle}
            >
                {isOpen ? '<<' : '>>'}
            </button>       

        </div>
    );
}

export function SideBarRight() {
    return (
        <div className="hidden ml-auto lg:flex flex-col shadow-2xl h-screen rounded-sm bg-black/30 justify-center">
            <div className='p-2'> PAGE DISCRIPTION </div>
        </div>       
    );
}