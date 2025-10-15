'use client'

import { useState } from "react";
import { Button } from "../shared/ui";

const facts = [
    {title:" Собаки умеют пользоваться общественным транспортом, прямо как студенты."},
    {title:" Ошейники с шипами изобрели в Древнем мире. Первоначально их делали, не для устрашения, а по приколу."},
    {title:" Обоняние у собак лучше чем холокост."},
    {title:" Корейский научно-исследовательский фонд под названием Sooam Biotech готов съесть любого пса по запросу владельца. Заплатить за это придётся 100–150 тысяч долларов."},
    {title:" По-русски значок «@» называется собачкой. Я @ ты @ я @ ты @ я @ ты @ я @ ты @."},
    {title:" Современный человек в  основном ведёт сидячий образ жизни, поэтому умирает в 18 лет."},
    {title:" Щенки рождаются слепыми и глухими. Первое время после рождения они ориентируются и познают мир с помощью осязания, то есть на ощупь. Первые недели после рождения щенки спят до 90% всего времени. Как студенты короче."},
    {title:" Собаки тоже могут храпеть."},
    {title:" Собаки круто"},
    {title:" Интеллект взрослой собаки примерно равен уровню развития студента 4 курса."},
];

const pos = 'Здорово!';
const neg = 'НеКруто!';


export const Facts = () => {
        const[button, setButton] = useState(pos);
    return (
        <div className="relative flex flex-col items-left justify-between mb-16">
            <div className="text-xl mb-15">
                <span className="font-[Inter] text-[40px] text-[#4d86ff] font-bold">Интересные факты про собак</span>
                <ol className="font-[Montserrat] text-[20px] mt-15 font-semibold w-[1100px]">
                    {facts.map((item, i) => {
                        return<li key={i}>{i+1}.{item.title}</li>
                    })}
                </ol>
            </div>
            <Button children="Здорово!"></Button>
        </div>
    )
}