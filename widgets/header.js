import { Logo } from "../shared/ui";
import { Link } from "../shared/ui";

const links = [
    {link: "#", children: "что такое собака"},
    {link: "#", children: "интересные факты"},
    {link: "#", children: "породы"},
    {link: "#", children: "сгенерировать"}
]

export const Header = () =>{
    return(
        <div className="flex bg-[#4d86ff] w-screen rounded-full items-center justify-between px-9 py-5">
            <Logo />
            <nav>
                {links.map((item, i)=>{
                    return <Link key={i} link={item.link} children={item.children}/>;
                })}
            </nav>
        </div>
    );
};