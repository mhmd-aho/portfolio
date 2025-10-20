import { imageArray } from "./data";

export default function Pictures(){
    return(
    <div className='h-screen flex justify-baseline items-baseline gap-10'>
                   { imageArray.map((img,index)=>(
                    <div className='flex flex-col justify-center items-center gap-2' key={index}>
                        <img className={`${img.name === 'Dot' || img.name === 'Settings icon'?'w-20':'w-40'}`} src={img.src} alt={img.name} />
                        <p>{img.name}</p>
                    </div>
                    ))}
                </div>
                )
}