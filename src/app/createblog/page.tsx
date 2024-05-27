import { Lavishly_Yours } from "next/font/google";

export default function CreateBlog() {
    return (
        <div className="mx-auto w-[80%] ">
            <h1 className="m-4 text-2xl text-center"> What is on your mind Today</h1>

            <form>
                <input type="text" className="w-full border border-gray-300 rounded p-2" placeholder="Title"/>


            </form>


        </div>
    );
}