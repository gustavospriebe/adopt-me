import { useParams } from "react-router-dom";
import fetchPet from "./fetchPet";
import { useQuery } from "@tanstack/react-query";
import Carousel from "./Carousel";
import { useState } from "react";
import ModalComp from "./ModalComp";

function Details() {
    const { id } = useParams();
    const results = useQuery(["details", id], fetchPet);
    const [open, setOpen] = useState(false);

    if (results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">🔃</h2>
            </div>
        );
    }

    const pet = results.data.pets[0];

    return (
        <div className="details">
            <div>
                <h1>{pet.name}</h1>
                <h2>
                    {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
                </h2>
                <button onClick={() => setOpen(!open)}>Adopt {pet.name}</button>
                <ModalComp open={open} setOpen={setOpen} petName={pet.name}/>
                <p>{pet.description}</p>
            </div>
            <Carousel pet={pet.images} />
        </div>
    );
}

export default Details;
