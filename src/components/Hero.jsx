export default function Hero() {
    return (
        <section className="h-screen bg-black m-20 border-2 border-red-500">
            <div className="relative border-2 border-yellow-600 h-1/3">
               <span className=" [&>*]:m-4 border-2 border-pink-500 h-full w-full flex justify-evenly absolute z-20">
                    <span className="text-[155px] font-[400px]">WE</span>
                    <img src="" alt="image of furniture" />
                    <span className="text-[155px] font-[400px]">ONLY</span>
               </span>
               <span className="border-4 border-green-400 rounded-full h-24 w-24 absolute right-9 top-7"> </span>
            </div>
            <div className="h-2/3">
                <span>OFFER</span>
                <img src="" alt=" " />
                <span>
                    WELCOME TO OUR EXCLUSIVE FURNITURE WEBSITE <br />
                    DESIGNED WITH THE TOP 1% IN MIND. DISCOVER <br />
                    UNPARALLED QUALITY AND LUXURIOUS DESIGNS <br />
                    THAT WILL TRANSFORM YOUR HOME INTO A <br /> 
                    SANCTUARY OF SOPHISTICATION AND ELEGANCE <br />
                </span>
            </div>
        </section>
    )
}