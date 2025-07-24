import { useState, useEffect } from "react";
import { useParams } from "react-router"



export default function SearchFood(){
    
    const {id} = useParams();
    
    const [food,setFood] = useState("")
    const [RestData, setRestData] = useState([]);


    useEffect(()=>{
        
            async function fetchData() {
           const response = await fetch(`${process.env.REACT_APP_API_URL}/api/swiggy/${id}`);
            const data = await response.json();
            const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData = tempData.filter((items) => 'title' in items?.card?.card);
            console.log(filterData);
            setRestData(filterData);
}


           
            fetchData();
        },[])




    return(
        <div className="w-[80%] mx-auto mt-20">
            <input className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border"  placeholder="Search here" onChange={(e)=>setFood(e.target.value)}></input>
        </div>
    )
}