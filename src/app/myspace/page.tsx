import Login from "../ui/login";
import { SideBarLeft } from "../ui/sidebars";
import { SideBarRight } from "../ui/sidebars";

export default function MySpace() {
    return (
        <div className="flex flex-row">
            <SideBarLeft />
            <SideBarRight />
            
            <div className="m-4"> 
                grids to be placed here <br />
                to add a form to add new coding platform <br />
                <span className="font-bold">
                    to move this div left if the sidebarleft is closed
                </span>

            </div>

        </div>

    );
}