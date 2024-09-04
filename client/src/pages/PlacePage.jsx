import {useParams} from "react-router-dom";
import {useEffect , useState} from "react";
import axios from "axios";

function PlacePage(){
    const {id} = useParams();
    const [place,setPlace] = useState(null);
    useEffect(() => {
        if (!id){
            return;
        }
        axios.get(`/places/${id}`).then(response => {
            setPlace(response.data);
        });
    },[id]);

    if(!place) return '';

    return(
        <div className="mt-8 bg-gray-100 -mx-8 px-8 py-8">
            <h1 className="text-3xl">{place.title}</h1>
            <a className="my-2 block font-semibold underline" target="_blank" href={'https://maps.google.com/?g='+place.address}>{place.address}</a>
        </div>
    )
}

export default PlacePage;