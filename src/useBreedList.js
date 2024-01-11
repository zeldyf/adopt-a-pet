import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal){
    const results = useQuery(["breeds", animal], fetchBreedList);
    
    return [results?.data?.breeds ?? [], results.status];

    // useEffect(()=>{
    //     if (!animal){
    //         setBreedList([]);
    //     } else if (localCache[animal]){
    //         setBreedList(localCache[animal])
    //     } else {
    //         fetchBreedList();
    //     }

        // async function fetchBreedList(){
        //     setBreedList([]);
        //     setLoadStatus("loading");
        //     const response = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
        //     const json = await response.json();
        //     localCache[animal] = json.breeds || [];
        //     setBreedList(localCache[animal])
        //     setLoadStatus("loaded");
        // }
    // }, [animal]);

}



