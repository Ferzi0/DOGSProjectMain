import { Logo } from "../shared/ui";
import { Link } from "../shared/ui";

const links = [
    {link: "#", children: "Что такое собака?"},
    {link: "#", children: "Интересные факты!"},
    {link: "#", children: "Породы"},
    {link: "#", children: "Сгенерировать"}
]

export const Header = () =>{
    return(
        <div className="flex top-28 bg-[#4d86ff] rounded-full items-center justify-between px-9 py-5">
            <Logo />
            <nav className="flex items-center gap-14">
                {links.map((item, i)=>{
                    return <Link key={i} link={item.link} children={item.children}/>;
                })}
            </nav>
        </div>
    );
};