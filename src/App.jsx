import Hero from "./components/Hero";

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
     <Hero />
    </div>
  )
}