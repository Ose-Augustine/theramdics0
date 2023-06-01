export default function Hero() {
    return (
        <section className="h-screen tracking-tighter">
            <div className="relative  h-1/3">
               <span className=" [&>*]:m-4 h-full w-full flex justify-evenly absolute z-20">
                    <span className="text-[155px] font-[400px]">WE</span>
                    <img src="./hero1.jpg" alt="image of furniture" />
                    <span className="text-[155px] font-[400px]">ONLY</span>
               </span>
               <span className="border-4 border-green-400 rounded-full h-24 w-24 absolute right-3 top-7"> </span>
            </div>
            <div className="h-2/3 relative">
                <div className="h-full w-full flex justify-items-start justify-evenly absolute">
                    <span className="text-[155px] font-[400px]">OFFER</span>
                    <img src="./hero2.jpg" alt=" " />
                    <span className="font-[14px]">
                        WELCOME TO OUR EXCLUSIVE FURNITURE WEBSITE <br />
                        DESIGNED WITH THE TOP 1% IN MIND. DISCOVER <br />
                        UNPARALLED QUALITY AND LUXURIOUS DESIGNS <br />
                        THAT WILL TRANSFORM YOUR HOME INTO A <br /> 
                        SANCTUARY OF SOPHISTICATION AND ELEGANCE <br />
                    </span>
                </div>
                <div>
                    <p className="text-[155px] font-[400px] absolute left-40 z-10 bottom-10">COMFORT</p>
                </div>
            </div>
        </section>
    )
}