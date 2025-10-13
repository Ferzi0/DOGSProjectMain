export const About = () => {
    return (
        <div className="relative left-40 flex bg-[#F2F2F2] rounded-4xl w-[1360px] h-[305px] items-left justify-between p-10 left-">
            <span className="font-[Inter] text-[128px] font-black">Собака</span>
            <p className="font-[Inter] text-[20px] font-black text-left">
                Домашнее животное из сем. хищных млекопитающих, к к-рому относятся также волк, лисица и др.
            </p>
            <img className="w-[370px] h-[229px] rounded-4xl" src="./chihuya-huya.jpg" alt="ЧихуяХуя"></img>
        </div>
    )
}