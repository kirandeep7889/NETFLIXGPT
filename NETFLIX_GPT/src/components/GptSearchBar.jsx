const GptSearchBar=()=> {
    return <div className="pt-[10%]  flex justify-center">
       <form className="w-1/2 grid grid-cols-12" >
           <input 
           className="p-4 m-4 col-span-9 rounded-lg " 
           type="text" 
           placeholder="What would you like to watch today? "></input>
           <button 
           className="py-2 px-4 m-4 col-span-3 rounded-lg bg-red-700">
            Search
            </button>
       </form>
    </div>
}

export default GptSearchBar;