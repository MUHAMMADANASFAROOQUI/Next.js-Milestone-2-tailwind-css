import image2 from "../public/image2.png";
import Link from "next/link";
import Image from "next/image";
import Arrow2 from "../public/Arrow2.png"
import Arrow from "../public/Arrow.png"

export default function Footer() {
  return (
    <div>
    <div className="flex">
      <div className=" relative h-60">
        <div
          className="bg-cover  h-[43px] w-[42px] flex  items-center  relative rounded-full mt-32 ml-24"
          style={{
            backgroundImage: `url(${image2.src})`,
          }}
        >
          <div className="absolute inset-0  "></div>

          <div className="relative z-10 text-black font-bold text-6xl flex ">
            <h1 className="mt-10">Le </h1>{" "}
            <h1 className="mt-10">t's work together</h1>
          </div>
        </div>
      </div>

      <div className="container border-4 w-80  h-60 rounded-lg ml-80 mt-20 border-yellow-950">
      <h1 className="w-50 mt-6 text-2xl font-semibold ml-8 ">
          Looking for a Expert Designer?
        </h1>
        <br />
        <br />
      <div className="flex">
        <Link className="text-2xl font-bold ml-7 mb-3 mt-6 text-yellow-900" href={"http://localhost:3000/contactus"}>ABC@gmail.com</Link>
        <a href="http://localhost:3000/contactus">
        <Image
        src={Arrow2}
        alt ="Arrow.png"
        className="w-14 h-16 mt-2 hover:ml-2  " 
        /></a>
      </div>
      </div>
      <div className="container border-4 w-80  h-60 rounded-lg ml-10 mt-20 border-yellow-950">
        <h1 className="w-50 mt-6 text-2xl font-semibold ml-8 ">
          Looking for a Expert Designer?
        </h1>
        <br />
        <br />

        <div className="flex">
        <Link className="text-2xl font-bold ml-7 mb-3 mt-6 text-yellow-900" href={"http://localhost:3000/contactus"}>ABC@gmail.com</Link>
        <a href="http://localhost:3000/contactus">
        <Image
        src={Arrow2}
        alt ="Arrow.png"
        className="w-14 h-16 mt-2 hover:ml-2" 
        /></a>
      </div>
</div>
    </div>
    <h1 className="text-7xl text-center font-extrabold italic ml-44 mt-28 h-28 mr-48 mb-10 text-yellow-800 animate-ping " style={{animationDuration: "5000ms"}}>MUHAMMAD</h1>
    <div className="flex border-t-2 ml-40 mr-44 mb-28 border-yellow-950 text-yellow-900">
       
        <div className=" ml-12 text-lg font-bold mt-4 mr-16">8 Nov 2024, Muhammad Anas</div>
       <div className="flex ml-96" >
        <a href="#" className="text-lg font-bold mt-4 ">Back To Top</a>
        <a href="#">
        <Image
        src={Arrow}
        alt ="Arrow.png"
        className="w-14 h-16 rounded-full animate-spin ml-2 " style={{animationDuration: "2000ms"}} 
        /></a>
        </div>
        </div>
    </div>
  );
}
