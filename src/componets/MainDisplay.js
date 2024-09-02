import React from 'react'

const MainDisplay = () => {
    return (
        <div class=" m-2 h-[70pc] md:h-[33pc] ">
            <div class="m-1 h-[6pc] md:[8pc] lg:[9pc] rounded-md border-2 border-opacity-30 shadow-lg border-emerald-700">
                <div>Names</div>
            </div>
            <div class=" m-2 md:flex">
                <div class=" h-[28pc] md:h-[25pc] md:m-2 md:w-[17pc] lg:w-[25pc] rounded-md border-2 border-opacity-30 shadow-lg border-emerald-700">
                    <div>Total Caualities</div>
                </div>
                <div class=" mt-5 h-[33pc] md:h-[25pc] md:m-2 md:w-[29pc]  lg:w-[56pc] rounded-md border-2 border-opacity-30 shadow-lg border-emerald-700">
                    <div>graphical display</div>
                </div>
            </div>

        </div>
    )
}

export default MainDisplay
