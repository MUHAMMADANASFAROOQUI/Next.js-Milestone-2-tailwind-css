


// import Client from "../app/components/client";
// import Navbar from "./components/navbar";
// import Image from "next/image";
import Image from "next/image";
import React from "react";
import image3 from "../app/public/image3.jpg";
import image6 from "../app/public/image6.jpg";
import image7 from "../app/public/image7.jpg";
import image8 from "../app/public/image8.png";
import image9 from "../app/public/images9.jpg";
import images10 from "../app/public/images10.png";
import images11 from "../app/public/images11.png"
import Link from "next/link";


export default function Page() {
 
 
  return (
    //     <div>   <div className="bg-red-400">
    //       this is server site rendering
    //       <Client/>

    //     //</div>
    //     <div >
    //     <h1 className="text-2xl">mounting</h1>
    //     <p className="text-md">in mounting components come</p>
    //     <h1 className="text-2xl">updating</h1>
    //     <p className="text-md">in updating components are doing their task </p>
    //     <h1 className="text-2xl">unmounting</h1>
    // <p className="text-md">in unmounting components are leaving</p>
    // <h1>npx create-next-app@14.2.16 for version 14 nextjs </h1>
    // <br /><br />
    // <p>agar component ka state directly update karonga to UI update nhi hogi</p>
    //     <h1 className="text-3xl">HOOKS</h1>
    //     <p></p>
    //     <h1 className="text-3xl">UseState</h1>
    //     <p></p>

    //     </div>
    //    </div>
<div>
    <div className=" pb-20 border-b-2">
      <div>
       

        <div className="flex p-5 justify-start items-center ">
          <div className="flex items-center w-full text-6xl ml-14 font-bold">
            <div className="flex flex-col mr-2">
              <h2 className="italic text-[23px]  mt-20 font-normal text-yellow-700">
                Hello!!!
              </h2>
              <div className="">
              <p className="mt-3">I am</p>
              <p className="mt-1 mb-6">Muhammad Anas</p>
              </div>
              <h3 className="text-[20px] container w-11/12 font-normal mb-2 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique quis praesentium dolor illum, quam enim. Voluptatum,
                explicabo. Hic molestiae veniam nemo, id a nesciunt totam,
                commodi facere Lorem ipsum dolor sit amet consectetur. Lorem
                ipsum dolor sit amet{" "}
              </h3>
              <span className="italic text-[20px] animate-pulse text-center bg-yellow-700 p-3 h-12 font-semibold" style={{animationDuration: "6000ms"}}>
                Governor House IT Initiative Student
              </span>
             
      
          <Link className=" w-64 h-16 text-center pt-5  mt-6 rounded-lg bg-yellow-700 text-white text-base hover:text-lg" href={"http://localhost:3000/resume"}>View My Resume</Link>
            </div>
            
          
          
            <img
              src="https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
              alt="Profile Picture"
              className="w-96 h-96 ml-16  mt-7 mr-5 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white " >
      <div className="flex pt-24 ">
     <div className=" ml-24 text-yellow-600 font-bold text-2xl mr-10 ">Services
     <div className="flex">
      <div className=" relative h-28">
        <div
          className="bg-cover  h-[56px] w-[70px] flex  items-center   relative rounded-full mt-3   " 
          style={{
            backgroundImage: `url(${image3.src})`,
          }}
        >
          <div className="absolute inset-0  "></div>

          <div className="relative z-10 text-black font-semibold text-6xl flex ">
            <h1 className="ml-3">My </h1>{" "}
            <h1 className=" ml-3">Specialities</h1>
          </div>
          </div>
        </div>
      </div>
     </div>
     <div className="container ml-96 mt-7 opacity-55 mr-28">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt esse illum ducimus itaque aspernatur libero quisquam voluptates maxime! Ratione modi nihil sed iusto dolores porro delectus labore, enim vero impedit!</div>
    </div>
    <div className="">
      <div className="flex pb-40 ">
       
      <div className="">
      <div className="flex">
   <div className="ml-28 text-center">
   <Link className="text-lg text-orange-400 font-semibold " href={"http://localhost:3000/projects"}>Project-01</Link>
    <Image
    src ={image6}
    alt="image6"
    className="w-52 h-40 bg-gray-200 rounded-lg mt-2 " 
    />
    
    </div>
    <div className="ml-6 text-center">
   <Link className="text-lg text-orange-400 font-semibold " href={"http://localhost:3000/projects"}>Project-02</Link>
    <Image
    src ={image7}
    alt="image7"
    className="w-52 h-40 bg-gray-200 rounded-lg mt-2 " 
    />
    
    </div>
    <div className="ml-6 text-center">
   <Link className="text-lg text-orange-400 font-semibold " href={"http://localhost:3000/projects"}>Project-03</Link>
    <Image
    src ={image8}
    alt="image8"
    className="w-52 h-40 bg-gray-200 rounded-lg mt-2 " 
    />
    
    </div>
    
    
      </div>
    <div className="flex">
    <div className="ml-28 text-center mt-6">
   <Link className="text-lg text-orange-400 font-semibold " href={"http://localhost:3000/projects"}>Project-04</Link>
    <Image
    src ={images10}
    alt="images10"
    className="w-52 h-40 bg-gray-200 rounded-lg mt-2 " 
    />
    
    </div>
    <div className="ml-6 text-center mt-6">
   <Link className="text-lg text-orange-400 font-semibold " href={"http://localhost:3000/projects"}>Project-05</Link>
    <Image
    src ={image9}
    alt="image9"
    className="w-52 h-40 bg-gray-200 rounded-lg mt-2 " 
    />
    
    </div>
    <div className="ml-6 text-center mt-6">
   <Link className="text-lg text-orange-400 font-semibold " href={"http://localhost:3000/projects"}>Project-06</Link>
    <Image
    src ={images11}
    alt="images11"
    className="w-52 h-40 bg-gray-200 rounded-lg mt-2 " 
    />
    
    </div>
    </div>
    </div>
    <div className="w-80 rounded-lg animate-pulse  ml-6 bg-black" style={{animationDuration: "6000ms"}}>
      <h1 className="text-yellow-600 text-xl mt-80 ml-5 font-semibold">Say Hello !!!</h1>
     
      <Link className="text-3xl mt-2 text-white ml-5 font-semibold" href={"http://localhost:3000/contactus"}>ABC@gmail.com</Link>

</div>
    </div>
    
    </div>
    </div>
    <div className="bg-white pb-36 ">
            
            <div className="flex">
                <div>
              <h1 className=" pl-10 font-semibold text-orange-400 text-xl">Overview</h1>
              <h1 className="mt-3 font-semibold text-6xl pl-10 font-sans">Client</h1>
              <h1 className="font-semibold text-6xl pl-12 mt-3">feedback</h1>
              </div>
              <div className="flex">
                <div>
                <h1 className="container w-60 font-semibold text-lg mt-4 ml-16  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus eaque repellendus dolores adipisci maiores sapiente nemo iure praesentium aspernatur aliquid natus deserunt</h1>
                <div className="flex mt-2">
                <h1 className="ml-16 font-semibold ">____________</h1>
                <h1 className="mt-1 font-bold ml-2 text-xl">John Smith</h1>
                </div>
                </div>
                <div>
                <h1 className="container w-60 font-semibold text-lg mt-4 ml-16  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus eaque repellendus dolores adipisci maiores sapiente nemo iure praesentium aspernatur aliquid natus deserunt, facere assumenda voluptas culpa officiis </h1>
                <div className="flex mt-2">
                <h1 className="ml-16 font-semibold ">____________</h1>
                <h1 className="mt-1 font-bold ml-2 text-xl">John Smith</h1>
                </div>
                </div>
                <div>
                <h1 className="container w-60 font-semibold text-lg mt-4 ml-16  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus eaque repellendus dolores adipisci maiores sapiente nemo iure praesentium aspernatur aliquid natus deserunt, facere assumenda voluptas culpa officiis alias fuga consequuntur!</h1>
                <div className="flex mt-2">
                <h1 className="ml-16 font-semibold ">____________</h1>
                <h1 className="mt-1 font-bold ml-2 text-xl">John Smith</h1>
                </div>
                </div>
              </div>

            </div>
        </div>
        
  </div>

  );
}
