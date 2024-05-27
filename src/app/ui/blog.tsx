import { BlogProps } from "./types";

export default function Blog({isOpen, handleToggle}: BlogProps) {
    return (
        <div className={`m-2 ${isOpen ? 'h-[200px] w-[160px]' : 'h-[240px] w-[260px]'} md:w-[260px] md:h-[240px] lg:w-[260px] lg:h-[240px] border-2 rounded-md text-white bg-gradient-to-b from-black to-black/20 
            transition-all duration-1000 ease-in-out
        `}>
            <h1 className="mb-2"> blog title </h1>
            <p className="px-2 text-start"> blog disciprion</p>
        </div>
    ); 
}