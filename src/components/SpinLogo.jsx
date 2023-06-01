export default function SpinLogo(){
    const texts = ['B','E','S','T','C','U','S','T','O','M','E','R','E','X','P','E','R','I','E','N','C','E']
    let i = 0 ; 
    return(
        <div>
            {texts.map((text, index) => (
                <span style={{transform: `rotate(${index*8.3}deg)`}} key={i++}>{text}</span>
            ))}
        </div>
        
    )
}