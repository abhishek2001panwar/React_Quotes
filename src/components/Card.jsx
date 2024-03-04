import React, { useEffect, useState } from "react";

function Card({users, HandleRemove, id}) {
  const [data, setData] = useState([]);


  return (
    <>
 
      <div  className="w-52  card  h-[35vh] rounded-md m-7 bg-zinc-300">
        <div className=" rounded flex justify-center items-center flex-col ">
          <div className="w-20 h-20 bg-slate-950 rounded-full mt-2 overflow-hidden">
            <img className="w-full h-full object-cover outline-none" src={users.image} alt="" />
          </div>
          <h1 className="font-semibold test-sm mt-3 capitalize ">{users.name}</h1>
          <h3 className="opacity-40 ">{users.email}</h3>
          <h2 className="normal-case font-xs leading-none m-2 justify-center">
            {users.Quotes}
          </h2>
          <button onClick={()=>HandleRemove(id)} className="px-3 outline-none py-1 mt-2  rounded-full bg-red-600 text-white text-xs font-semibold">
            Remove Quote
          </button>
        </div>
      </div>
   
    </>
  );
}

export default Card;
