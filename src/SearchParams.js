import { useEffect, useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"]

const SearchParams = () => {
    const [location, setLocation] = useState("") ;
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const breeds = useBreedList(animal);

    const [pets, setPets] = useState([]);

    useEffect(() => {
        requestPets();
    }, []);  // eslint-disable-line react-hooks/exhaustive-deps

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();

        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    requestPets();
                }}
            >
                <label htmlFor="location">
                    location {location}
                    <input 
                    id="location" 
                    value={location} 
                    placeholder="location"
                    onChange={(e)=> setLocation(e.target.value)}
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                        onBlur={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                        >
                            <option />
                            {ANIMALS.map((animal) => (
                                    <option key={animal} value={animal}>
                                        {animal}
                                    </option>
                            ))}
                        </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={(e) => {
                            setBreed(e.target.value);
                        }}
                        onBlur={(e) => {
                            setBreed(e.target.value);
                        }}
                        >
                            <option />
                            {breeds.map((allBreed) => (
                                    <option key={allBreed} value={allBreed}>
                                        {allBreed}
                                    </option>
                            ))}
                        </select>
                </label>
                <button>Submit</button>
            </form>

            <Results pets={pets} />                    

            {/* {pets.map((pet) => (                      ///// inserted to Results.js and curly need to be deleted too
                <Pet 
                name={pet.name}
                animal={pet.animal}
                breed={pet.breed}
                key={pet.id}
                />
            ))} */}
        </div>
    );
};

export default SearchParams;