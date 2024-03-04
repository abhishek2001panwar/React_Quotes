import React from "react";
import Card from "./Card";
import Form from "./Form";

function Cards({users, HandleRemove }) {
  return (
    <>
      <div className=" w-full h-screen  bg-zinc-200  p-4  ">
        <div className="w-full h-[60vh] scrollable-container  overflow-auto  bg-zinc-00 flex flex-row gap-4 flex-wrap">
          {
            users.map((items,index)=>{
              return  <Card HandleRemove={HandleRemove} id={index} users={items} key={index} />
            })
          }
        </div>
       
      </div>
      
    </>
  );
}

export default Cards;
