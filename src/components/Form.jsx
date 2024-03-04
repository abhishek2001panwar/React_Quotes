import React from "react";
import { useForm } from "react-hook-form";

function Form({handleSubmitFormData ,key }) {


     const {register, handleSubmit ,reset} =  useForm();
  

    const handleFormSubmit= (data) => {
      handleSubmitFormData(data);
      
      reset();
    }
  return (
    <>
      
      <div className="absolute top-[90%] left-1/2 flex gap-10 w-full m-9 p-4  -translate-x-[50%] -translate-y-[50%]">
      <h1 className="absolute add hover:scale-125 delay-100	 ease-in-out top-[-80%] left-[40%] text-2xl border-b-grey scale-1.05s ">Add Quotes</h1>
        <form className="flex form  gap-10" onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          className="px-5 py-2 outline-none rounded-md"
          placeholder="name"  {...register('name')}
          type="text"
        />
        <input
          className="px-5 py-2 outline-none rounded-md"
          placeholder="email" {...register('email')}
          type="email"
        />
        <input
          className="px-5 py-2 outline-none rounded-md"
          placeholder="Quotes" {...register('Quotes')}
          type="text"
        />
        <input
          className="px-5 py-2 outline-none rounded-md"
          placeholder="ImageURL" {...register('image')}
          type="text"
        />
        <input  onSubmit={(event => event.preventDefault())}     type="submit"
          className="px-4 py-2 bg-teal-500 text-white rounded-full"
        />
        </form>
      </div>
    </>
  );
}

export default Form;
