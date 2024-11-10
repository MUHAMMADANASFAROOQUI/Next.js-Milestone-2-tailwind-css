import Image from 'next/image';
import picture from '../public/picture.png'; 
import picture2 from "../public/picture2.png";
import picture3 from "../public/picture3.png" 

export default function Resume() {
  return (
    <div className="bg-white ">
      <div className='pt-14 pb-28'>
      <h1 className='text-orange-400 text-4xl font-serif font-extrabold text-center'>My Resume</h1>
      <div className='ml-80 mr-80 mt-7 drop-shadow-2xl border-2'>
        
        <Image
          src={picture}
          alt="Capture"  
          width={630}   
          height={600} 
          className=''  
        />
        <Image
          src={picture2}
          alt="Capture"  
          width={630}   
          height={600} 
          className=''  
        />
        <Image
          src={picture3}
          alt="Capture"  
          width={630}   
          height={600} 
          className=''  
        />
        </div>
      </div>
    </div>
  );
}