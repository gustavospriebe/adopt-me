import { useQuery } from "@tanstack/react-query";
import fetchBreed from "./fetchBreed";

function useBreedList(animal) {
    const results = useQuery(["breeds", animal], fetchBreed);

    return [results?.data?.breeds ?? [], results.status];
}

export default useBreedList;
