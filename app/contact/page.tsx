"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
const Contact = () => {
  const router = useRouter()
 
  const [formState, setFormState] = useState({
    title: "",
    subtitle: "",
    description: "",
  });
  const [active, setActive] = useState(false);
  const [message, setMessage] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formState),
    });
    let data = await res.json();
    
    setMessage(data.message);
    setActive(true);

  
    
    console.log(formState);
    
    setTimeout(() => {
      setActive(false);
      setMessage("");
    }, 2000);
    router.push('/')
  };

  
  
  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    
  };

  
  return (
    <div className="relative">
      
      <div
        style={{
          right: active && message ? 24 : "-50%",
        }}
        className="fixed bottom-5 duration-200 px-4 py-2 font-semibold rounded bg-sky-200 text-black"
      >
        <p>Sent successfully</p>
      </div>
      
      <div className="p-10 ">
      <h1 className="text-4xl mb-8 font-bold">Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-3">
          <div>
            
            <label htmlFor="name">Title</label>
          </div>
          <input
            onChange={handleChange}
            id="name"
            type="text"
            required
            className="border rounded py-2 px-2 mt-1 outline-none focus:border-sky-800"
          />
        </div>
        <div className="flex flex-col mb-3">
          <div>
            
            <label htmlFor="subtitle">Subtitle</label>
          </div>
          <input
            onChange={handleChange}
            id="subtitle"
            type="subtitle"
            required
            className="border rounded py-2 px-2 mt-1 outline-none focus:border-sky-800 w-full"
          />
        </div>
        <div className="flex flex-col">
          <div>
            
            <label htmlFor="description">Description</label>
          </div>
          <textarea
            onChange={handleChange}
            id="description"
            required
            rows={6}
            className="border resize-none rounded py-2 px-2 mt-1 outline-none focus:border-sky-800"
          />
        </div>

        <button className="mt-6 w-full py-3 bg-sky-800 rounded text-white font-semibold uppercase">
          Save
        </button>
     </form>
    
   
      </div>
     <div>
      
     </div>
    </div>
  );
};
export default Contact;
