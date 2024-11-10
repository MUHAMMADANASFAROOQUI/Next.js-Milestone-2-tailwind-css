import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="">
        <header className="bg-yellow-700">
          {/* Header Content */}
          <div className="container flex flex-wrap h-20 mx-auto p-5 ml-5 mr-0 flex-col md:flex-row items-center">
            <img
              src="https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
              alt=""
              className="w-11 h-11 rounded-full animate-spin border-yellow-950" style={{animationDuration: "10000ms"}}
            />

          
            <Link className="italic ml-3  font-medium text-[23px] font-serif mr-12" href={"http://localhost:3000/"}>Muhammad Anas</Link>

            <nav className="ml-80">
              <Link
                className="text-slate-100 font-semibold text-[17px] "
                href="http://localhost:3000/"
              >
                Portfolio
              </Link>
              <Link
                className="text-slate-100  font-semibold ml-7 text-[17px]"
                href="http://localhost:3000/aboutus"
              >
                About Us
              </Link>
              <Link
                className="text-slate-100  font-semibold ml-7 text-[17px]"
                href="http://localhost:3000/contactus"
              >
                Let's Talk
              </Link>
              <Link
                className="text-slate-100  font-semibold ml-7 text-[17px]"
                href="http://localhost:3000/projects"
              >
                Projects
              </Link>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
