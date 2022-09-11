import { useState } from "react"

export const SearchResult = ({name,id}) => {

    let [selected,setSelected] = useState(false)

    return  <li className="searchLi">
                <h4>{name}</h4>
                <button onClick={() => setSelected(x=>!x)}>
                {selected 
                ?
                <i class="red fa-solid fa-square-xmark"></i>
                :
                <i class="green fa-solid fa-circle-plus"></i>
                }
                </button>
            </li>
}