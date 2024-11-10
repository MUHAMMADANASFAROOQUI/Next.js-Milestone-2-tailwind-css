import image6 from "../public/image6.jpg"
import image7 from "../public/image7.jpg"
import image8 from "../public/image8.png"
import images9 from "../public/images9.jpg"
import images10 from "../public/images10.png"
import images11 from "../public/images11.png"
import Image from "next/image"



export default function projects(){
    return(
        
        <div className=" bg-white">
        <div className="pb-24">
            <div>
                <h1 className="text-orange-400 text-xl font-bold text-center  pt-20">Portfolio</h1>
                <h1 className="font-semibold text-center text-6xl mt-4">My Recent Work</h1>
            </div>
       <div className="flex">
        <Image
        src={image6}
        alt="project-image1"
        className="w-96 h-72 rounded-3xl ml-36 mt-11"
        />
        <Image
        src={image7}
        alt="project-2"
        className="w-2/5 h-72 rounded-2xl ml-10 mt-11"
        />
       </div>
       <div className="flex">
       <Image
        src={image8}
        alt="project-2"
        className="w-72 h-72 rounded-3xl ml-36 mt-10"
        />
        <Image
        src={images9}
        alt="project-2"
        className="w-72 h-72 rounded-3xl ml-9 border-2 mt-10"
        />
        <Image
        src={images10}
        alt="project-2"
        className="w-72 h-72 rounded-3xl ml-9 border-2 mt-10"
        />
        </div>
        <div className="flex">
        <Image
        src={image7}
        alt="project-2"
        className="w-2/5 h-72 rounded-2xl ml-36 mt-11"
        />
        <Image
        src={images11}
        alt="project-2"
        className="w-96 h-72 rounded-2xl ml-10 mt-11"
        />
        </div>
        </div>
        </div>
    )
}