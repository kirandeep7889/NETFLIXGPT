import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar=()=> {
     
    const langkey=useSelector(store=>store.config.lang)

    return <div className="pt-[10%]  flex justify-center">
       <form className="w-1/2 grid grid-cols-12" >
           <input 
           className="p-4 m-4 col-span-9 rounded-lg " 
           type="text" 
           placeholder={lang[langkey].gptSearchPLaceholder}></input>
           <button 
           className="py-2 px-4 m-4 col-span-3 rounded-lg bg-red-700">
            {lang[langkey].search}
            </button>
       </form>
    </div>
}

export default GptSearchBar;