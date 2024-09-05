import React, { useContext } from 'react'
import AppContext from '../Context'
import Marquee from 'react-fast-marquee';

const MainDisplay = () => {
    const [aname,ename] = useContext(AppContext);

    const a= [1,2,3,4,5,6,7,8,9,10]
    const ename_a = ename.slice(0, Math.ceil(ename.length / 2))
    const ename_b = ename.slice(Math.ceil(ename.length / 2))
    const aname_a = aname.slice(0, Math.ceil(aname.length / 2))
    const aname_b = aname.slice(Math.ceil(aname.length / 2))
    return (
        <div class=" m-2 h-[70pc] md:h-[33pc] ">
            <div class="m-1 h-[6pc] md:[8pc] lg:[9pc] rounded-md border-2 border-opacity-30 shadow-lg border-emerald-700">

              {/*   <Marquee direction='right'>
                    {ename_a.map((val, ind) => <h3 key={ind}>{val}</h3>)}
                </Marquee>
                <Marquee direction='left'>
                    {aname_a.map((val, ind) => <h3 key={ind}>{val}</h3>)}
                </Marquee>

                <Marquee direction='right'>
                    {ename_b.map((val, ind) => <h3 key={ind}>{val}</h3>)}
                </Marquee>
                <Marquee direction='left'>
                    {aname_b.map((val, ind) => <h3 key={ind}>{val}</h3>)}
                </Marquee> */}
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
