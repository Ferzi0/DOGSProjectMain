'use client'
import Image from "next/image"
import { Button, Title } from "../shared/ui"
import placeholder from "../public/loading.jpg";
import { useState, useEffect } from "react";

export const TakeDog = () => {
    const [imageSrc, setImageSrc] = useState(placeholder);
    const [loading, setLoading] = useState(true);
    const [trigger, setTrigger] = useState(0);

    useEffect(()=>{
        if (trigger>0){
           const fetchImage = async () =>{
            try{
                const response = await fetch
                (`https://dog.ceo/api/breed/images/random`);
                const data = await response.json();
                setImageSrc(data.message);
            } catch (error) {
                console.error('Error', error);
            } finally{
                setLoading(false);
            }
        };
        fetchImage(); 
        }
        
    }, [trigger]);

    const HandClick = () => {
        setTrigger(prev=>prev+1);
    }

    return (
        <div>
            <div>
                <Title children="Pora savesti" />
                <div className="flex justify-between items-end mb-15">
                    <span className="font-[Inter] text-[128px] text-[#222733]">Собаки</span>
                    <Button children="Sluchainaia sobaka" func={()=>HandClick()}/>
                </div>
            </div>
            <div className="bg-[#F2F2F2] rounded-[50px] flex align-middle justify-between items-center p-6 mb-15">
                <div className="flex flex-col">
                    <p className="font-semibold text-[24px] font-[Montserrat]">Голова Собаки</p>
                    <p className="text-[40px] font-[Inter] text-black">lorem</p>
                </div>
                <Image src={imageSrc} height={161} width={178} alt="dog" className="wh-1 w-[178px] h-[161px] rounded-[50px]"/>
            </div>
        </div>
    )
}