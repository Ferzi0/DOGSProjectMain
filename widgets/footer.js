import { Span } from "next/dist/trace";
import { Header } from "./header";

export const Footer=()=>{
    return (
    <div className="text-center flex flex-col gap-6">
        <Header/>
        <span className="text-grey-400 mt-10">
            Торгашов Эдуард 2025©
        </span>
    </div>
    )
}