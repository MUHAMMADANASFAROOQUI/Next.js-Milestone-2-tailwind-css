import Image from "next/image"
import image3 from "../public/image3.jpg"
import image4 from "../public/image4.webp"
import images5 from "../public/images5.png"
import images6 from "../public/images6.png"

export default function contactUs(){
    return(
        
        <div  className="bg-slate-100 pt-20 h-screen">
        <div className="flex">
        <div>
        <h1 className="text-orange-400   ml-20 font-semibold text-xl">Contact</h1>
        <div className="">
      <div className=" relative h-28">
        <div
          className="bg-cover  h-[54px] w-[68px] flex  items-center   relative rounded-full mt-4 ml-16   " 
          style={{
            backgroundImage: `url(${image3.src})`,
          }}
        >
          <div className="absolute inset-0  "></div>

          <div className="relative z-10 text-black font-semibold text-6xl  ">
            <h1 className="ml-5 mt-12">Let's </h1>{" "}
            <h1 className=" ml-3">Connect</h1>
            <div className="">
               
            </div>
           
          </div>
          
          </div>
          <div className="flex ">        
              <Image
          src={image4}
          alt= "contact-email "
          className="w-11 ml-20 mt-20 pb-5 border-b-2"
          />
          <div className="pb-5 border-b-2">
          <div className="container mt-20 text-base pl-4">Email us</div>
          <h1 className="container  text-base pl-4 font-semibold w-80">ABC@gmail.com</h1>
          </div>
          </div>
          </div>
          <div className="flex mt-8 ">        
              <Image
          src={images5}
          alt= "contact-email "
          className="w-16 ml-16 mt-20 pb-5 border-b-2"
          />
          <div className="pb-5 border-b-2">
          <div className="container mt-20 text-base pl-4">Call us</div>
          <h1 className="container  text-base pl-4 font-semibold w-80">+1 234 567 890 | +1 234 567 890</h1>
          </div>
          
          </div>
          <div className="flex  ">        
              <Image
          src={images6}
          alt= "contact-email "
          className="w-16 ml-16 mt-5  pb-5 border-b-2"
          />
          <div className="pb-5 border-b-2">
          <div className="container mt-4  text-base pl-4">Office Address</div>
          <h1 className="container  text-base pl-4 font-semibold w-80">+1 234 567 890 </h1>
          </div>
          
          

        </div>
        </div>
        </div>
        <form className="ml-40">
            <div className="flex ">
            <div>
            <fieldset>
                <legend>Your Name</legend>
                <div className="border-2 mt-2 rounded-xl">
               
                <input type="text" className=" bg-slate-100 h-14   w-64" placeholder="   ex.Muhammad" required/>
                </div>
            </fieldset>
            <fieldset className="mt-5">
                <legend>Your Contact No.</legend>
                <div className="border-2 mt-2 rounded-xl">
               
                <input type="text" className=" bg-slate-100 h-14   w-64" placeholder="   ex.123-456-789-0" required />
                </div>
            </fieldset>
            </div>
            <div className="ml-4">
            <fieldset >
                <legend>Your Email Address</legend>
                <div className="border-2 mt-2 rounded-xl">
               
                <input type="text" className=" bg-slate-100 h-14   w-64" placeholder="   ex.ABC@gmail.com" required />
                </div>
            </fieldset>
            <fieldset className="mt-5">
                <legend>Subject</legend>
                <div className="border-2 mt-2 rounded-xl">
               
                <input type="text" className=" bg-slate-100 h-14   w-64" placeholder="   Your Subject" required/>
                </div>
            
            </fieldset>
            </div >
            </div>
            <div>
                <fieldset className="mt-6">
                    <legend className="">Message</legend>
                    <div className="border-2 mt-4 rounded-xl">
                    <input type="text" className="bg-slate-100   h-20 w-full   " placeholder="  Type Your Message" required />
                    </div>
                </fieldset>
            </div>
            <button className="bg-black w-40 h-12 rounded-lg mt-8 text-white">Submit</button>
        </form>
       
        </div>
        </div>
        
    )
}