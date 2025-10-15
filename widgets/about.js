export const About = () => {
    return (
        <div className="relative flex bg-[#F2F2F2] rounded-4xl p-10 items-left justify-between mb-16 mt-7">
            <div className="mb-[20px]">
                <span className="font-[Inter] text-[128px] font-black">Собака</span>
                <p className="font-[Montserrat] text-[20px] font-black w-[680px]">
                    Домашнее животное из сем. хищных млекопитающих, к которому относятся также волк, лисица и др.
                </p>
            </div>
            <img className="w-[370px] rounded-4xl" src="./chihuya-huya.jpg" alt="ЧихуяХуя"></img>
        </div>
    )
}