const fetchBreedList = async ({queryKey}) => {
    const animal = queryKey[1];

    const response = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    );

    if(!response.ok){
        throw new Error(
            `breedlist ${animal} fetch not ok`
        )
    }

    return response.json();
}

export default fetchBreedList;