import { Marker , get} from "@react-google-maps/api"
import { useState } from "react"

export const NewMarker = ({lng,lat,place}) => {

    let [selected,setSelected] = useState(null)
    let [x,setX] = useState(null)
    let [y,setY] = useState(null)

    return <Marker
            onClick={(e) => console.log(place)}
            position={{lng,lat}}
            onMouseOver={(e) => {
                setSelected(x => !x)
                console.log(e.domEvent);
                console.log(e.domEvent.pageX);
                console.log(e.domEvent.screenX);
                setX(e.domEvent.screenX - e.domEvent.clientX)
                setY(e.domEvent.screenY - e.domEvent.clientY)
            }}
            >        
            <h1 className="markrLabel" style={{
                top: x,
                left: y,
                position: "absolute"

            }}>hello</h1>
        </Marker>
}