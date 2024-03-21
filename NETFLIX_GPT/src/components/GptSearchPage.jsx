import { mainBg } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage=()=> {
    return <div>
         <div className="absolute -z-10" >
          <img  src={mainBg}
             ></img>
          </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
}

export default GptSearchPage;