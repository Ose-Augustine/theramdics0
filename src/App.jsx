import Hero from "./components/Hero";
import Time from "./components/Time";

export default function App() {
  return (
    <div className="text-white">
     <header className="text-white bg-[#0D0D0D] p-6 flex justify-between justify-items-center">
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
            <div>WE OFFER THE MOST BEAUTIFUL</div>
            <div className="px-4">HOMES AND APARTMENTS</div>
            <div>AVAILABLE FOR RENT AND SALES</div>
          </p>
        </div>
        <div className="relative h-max w-max">
          <img className="my-6"src="./lounge.jpg" alt="Picture of a lounge area with a sofa, pillows and fairly lit room" />
          <div className=" h-32 w-32 rounded-full flex justify-center items-center  bg-black absolute ">
            <div>SHRWL</div>
          </div>
        </div>
     </main>
     
    </div>
  )
}