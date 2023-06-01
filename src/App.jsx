import Hero from "./components/Hero";
import NestedIcon from "./components/NestedIcon";
import Organise from "./components/Organise";
import SpinLogo from "./components/SpinLogo";
import Time from "./components/Time";

export default function App() {
  return (
    <div className="text-white">
     <header className="text-white  bg-[#0D0D0D] p-6 flex justify-between justify-items-center">
      <div>RealEstate &reg;</div>
      <div>
        <a className="mr-4"href="#">HOME</a>
        <a className="mr-4"href="#">FORSALE</a>
        <a className="mr-4"href="#">FORRENT</a>
        <a className="mr-4"href="#">ABOUT</a>
      </div>
      <button className="rounded-full px-8 py-4 border-2 border-white">Free Consult</button>
      
     </header>
     <main className="bg-black bg-opacity-95 p-4">
        <Hero />
        <div className="flex justify-between border-b-2 border-white my-28">
          <div><Time /></div>
          <div>
            <span>PREMIUM WOOD MATERIALS.</span>
            <span>TAKE A LOOK</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-[400px] text-[300px]">Aesthetic. </p>
          <p className="flex flex-col">
            <p>WE OFFER THE MOST BEAUTIFUL</p>
            <p className="px-4">HOMES AND APARTMENTS</p>
            <p>AVAILABLE FOR RENT AND SALES</p>
          </p>
        </div>
        <div className="relative">
          <img className="my-6"src="./lounge.jpg" alt="Picture of a lounge area with a sofa, pillows and fairly lit room" />
          <div className=" h-32 w-32 rounded-full flex justify-center items-center  bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-[24px]">SHRWL</div>
          </div>
        </div>
        <div className="p-6 flex justify-between mb-32">
          <p>
            <div className="p-4">
              <i></i>
            </div>
          </p>
          <p className="text-[40px] uppercase tracking-tighter leading-[48px]">
            Indulge in the ultimate luxury with our <br />
            handcrafted furniture pieces. Impeccable <br />
            quality, exquisite design, and premium <br />
            materials are the hallmarks of our <br />
            collections. Browse our curated <br />
            selection and experience the opulence of <br /> high-end furniture.
          </p>
        </div>
        <section className="uppercase">
          <p className=" text-[96px]"> What we offer</p>
          <p className="text-[#A5A5A5]">
            We offer the most beautiful homes and <br /> apartments available for rent and sales
          </p>
        </section>
        <div className="w-screen flex">
            <div className="w-1/3 ">
              <Organise />
            </div>
            <div className="border-white border-2 grid grid-cols-2 border-l-transparent">
              <Organise />
              <img src="/Rectangle4.jpg" alt="Dimly lit room with dark sofa and wall pictures" />
              <img src="./Rectangle3.jpg" alt="Golden lamps" />
              <Organise />
            </div>
        </div>
        <section className=" uppercase pl-20 text-[96px] leading-[115px]">
          <div>
          Impeccable quality, <br /> exquisite design, and <br />premium materials are <br /> the hallmarks of our <br /> collections. 
          </div>
          <div className="flex justify-evenly">
            <div>
              <span>01/20</span>
              <span className="text-[40px]">pcs</span>
            </div>
            <div>
              -
            </div>
            <div>
              2023
            </div>
          </div>
        </section>
        <section className="flex w-screen min-h-max border-y-2 border-white">
          <div className="bg-white text-black mr-6 w-1/3 p-8">
            <p className="text-[163px] uppercase text-clip leading-[137px] mb-10">RE <br /> alE <br />STA <br /> TE</p>
            <div className="[&>*]:mb-5 [&>*>*]:mr-3">
              <div>
                 <button className="border-2 border-black p-2  rounded-full">CHAIRS</button><button className="border-2 border-black p-2  rounded-full">TABLES</button>
              </div>
              <div>
                 <button className="border-2 border-black p-2  rounded-full">OAK</button><button className="border-2 border-black p-2   rounded-full">WALNUT</button>
              </div>
              <div>
                <button className="border-2 border-black p-2   rounded-full">LEATHER</button><button className="border-2 border-black p-2  rounded-full">CLOTH</button>
              </div>
            </div>
          </div>
          <div className="min-h-full w-2/3 text-[50px] flex flex-col justify-end p-10" style={{backgroundImage: 'url(./Rectangle5.jpg)'}}>
              <div>
                <span className="mr-16">PRODUCT NAME</span><span>$5,430</span>
              </div>
              <p className="text-[20px]">CATEGORY</p>
          </div>
        </section>
        <section>
          <p className="text-[280px]">RealEstate</p>
        </section>
     </main>
     <footer className="bg-black bg-opacity-95 flex justify-evenly">
        <NestedIcon />
        <div>
          <p className="border-b-[#545454]  text-[#545454] text-[128px] leading-[124px]">love our stuff? <br /> send us an email.</p>
          <p className="">
            <i className="border-white border-2 rounded-full p-4"><img src="./facebook.jpg" alt="facebook icon" /></i><i className="border-white border-2 rounded-full p-4"><img src="./instagram.jpg" alt="instagram icon" /></i><i className="border-white border-2 rounded-full p-4"><img src="linkedin.jpg" alt="linkedin icon" /></i>
            
          </p>
        </div>
        <SpinLogo />
     </footer>
    </div>
  )
}