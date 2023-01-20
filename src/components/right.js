import data from '../data/right.json'
import { useState } from 'react';
const Right = ({radio}) => {
    const [search,setSearch]=useState("");
    // console.log(data?.filter(dts=>dts.desc.toLowerCase().includes(search.toLowerCase())));
    return ( 
        <div className='right'>
            <form action="">
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                
            </form>
           {
           data?.filter(dts=>dts.desc.toLowerCase().trim().includes(search.toLowerCase().trim())).map((datas)=>{
           const is_novu = datas['is novu'].includes(radio['is_novu'])
           const is_bacariqi = datas['is bacariqi'].includes(radio['is_bacariq'])
           const vezife= datas['vezife'].includes(radio['vezife'])
        console.log(is_novu,is_bacariqi,vezife);
       return  ((search||radio.position||is_novu||is_bacariqi||vezife)) && (
       <div>
             <h4>{datas.location}</h4>
             <h6>{datas.date}</h6>
             <p>{datas.desc}</p>
             <p>{datas['is novu']}</p>
             <p>{datas['is bacariqi']}</p>
             <p>{datas.vezife}</p>
            </div>)
           })
           }
        </div>
     );
}
 
export default Right;
