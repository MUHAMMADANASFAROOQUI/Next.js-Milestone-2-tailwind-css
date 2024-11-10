import Link from "next/link"


export default function aboutUs(){
    return(
        <>
        <div className="bg-orange-200 h-screen">
        <div className="flex">
            <div>
        <img
              src="https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
              alt="Profile Picture"
              className="w-96  ml-32  pt-24 mr-5 drop-shadow-2xl"
            />
            </div>
            <div>
                <div>
                    <div className="mt-20 ml-28 mr-20 " >
                        <h1 className="font-bold text-orange-400 text-2xl">About Me</h1>
                        <h1 className="font-bold text-5xl mt-3 font-serif">Muhammad Anas</h1>
                        <h1 className="font-semibold text-2xl mt-4">UI UX Designer</h1>
                        <p className="font-semibold text-lg mt-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores <br /> voluptatibus cumque unde numquam consectetur consequatur <br /> doloribus optio cum hic porro</p>
                        <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla facilis <br /> hic harum  veniam similique, iste dicta voluptatum, odit consectetur ipsum <br /> qui. Autem, mollitia reiciendis quos ea quas accusantium corporis molestias.</p>
                <br />
                <div className="mt-3 animate-bounce" style={{animationDuration: "1500ms"}}>
                   <Link className="  bg-yellow-950  text-orange-300 font-semibold pl-6 pr-6 pt-4 pb-4  rounded-xl " href={"http://localhost:3000/resume"}>View My Resume</Link>
                   </div>
                    </div>
                </div>
            </div>
            </div>
            <div>
        <h1></h1>
        </div>
        </div>
        <div className="bg-white h-screen">
            
            <div className="flex">
                <div>
              <h1 className="pt-28 pl-10 font-semibold text-orange-400 text-xl">Overview</h1>
              <h1 className="mt-3 font-semibold text-6xl pl-10 font-sans">Client</h1>
              <h1 className="font-semibold text-6xl pl-12 mt-3">feedback</h1>
              </div>
              <div className="flex">
                <div>
                <h1 className="container w-60 font-semibold text-lg mt-40 ml-16  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus eaque repellendus dolores adipisci maiores sapiente nemo iure praesentium aspernatur aliquid natus deserunt</h1>
                <div className="flex mt-2">
                <h1 className="ml-16 font-semibold ">____________</h1>
                <h1 className="mt-1 font-bold ml-2 text-xl">John Smith</h1>
                </div>
                </div>
                <div>
                <h1 className="container w-60 font-semibold text-lg mt-40 ml-16  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus eaque repellendus dolores adipisci maiores sapiente nemo iure praesentium aspernatur aliquid natus deserunt, facere assumenda voluptas culpa officiis </h1>
                <div className="flex mt-2">
                <h1 className="ml-16 font-semibold ">____________</h1>
                <h1 className="mt-1 font-bold ml-2 text-xl">John Smith</h1>
                </div>
                </div>
                <div>
                <h1 className="container w-60 font-semibold text-lg mt-40 ml-16  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus eaque repellendus dolores adipisci maiores sapiente nemo iure praesentium aspernatur aliquid natus deserunt, facere assumenda voluptas culpa officiis alias fuga consequuntur!</h1>
                <div className="flex mt-2">
                <h1 className="ml-16 font-semibold ">____________</h1>
                <h1 className="mt-1 font-bold ml-2 text-xl">John Smith</h1>
                </div>
                </div>
              </div>

            </div>
        </div>
        
        </>
    )
}