import Image from "next/image";
import Pict from "../public/img/dog-1.jpg"

export const Card=()=>{
    return(
        <div>
            <Image className="rounded-4xl" src={Pict} alt="ADog"/>
        </div>
    )
}