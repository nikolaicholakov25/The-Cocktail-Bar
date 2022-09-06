import { Marker , get} from "@react-google-maps/api"
import { useState } from "react"

export const NewMarker = ({lng,lat,place}) => {

    let [selected,setSelected] = useState(null)
    let [x,setX] = useState(null)
    let [y,setY] = useState(null)

    return <Marker
            position={{lng,lat}}
            >        
        </Marker>
}