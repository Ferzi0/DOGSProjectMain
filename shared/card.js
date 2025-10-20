'use client'
import Image from "next/image";
import placeholder from "../public/loading.jpg";
import { useState, useEffect } from "react";

export const Card=()=>{
    const [imageSrc, setImageSrc] = useState(placeholder);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImage = async () => {
            try{
                const responce = await fetch
                ('https://dog.ceo/api/breeds/image/random');
                const data = await responce.json();
                setImageSrc(data.message);
            } catch (error) {
                console.error('Error', error);
            } finally {
                setLoading(false);
            }
        };
        fetchImage();
        },
    []);
    return(
        <div className="w-[263px] h-[189px]">
            <Image className="rounded-[50px]" src={imageSrc} height={189} width={263} alt="ADog"/>
        </div>
    )
}