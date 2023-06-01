import CircleType from 'circletype'; 
import { useEffect } from 'react'; 

export default function SpinLogo() {
    useEffect(() => {
      new CircleType(document.querySelector('.circular-text h1'))
    }, []);
  
    return (
      <div className="circular-text">
        <h1 className='text-md'>BEST CUSTOMER EXPERIENCE</h1>
      </div>
    );
  }
  
// export default function SpinLogo(){
//     const texts = ['B','E','S','T','C','U','S','T','O','M','E','R','E','X','P','E','R','I','E','N','C','E']
//     let i = 0 ; 
//     return(

//         // <div className="flex justify-center items-center relative h-[200px] w-[200px] bg-red-500 rounded-full">
//         //     {texts.map((text, index) => (
//         //         <span className={`absolute left-1/2 transform origin-top-left  rotate-[${index * 8.3}deg]`}  key={i++}>{text}</span>
//         //     ))}
//         // </div>
        
//     )
// }