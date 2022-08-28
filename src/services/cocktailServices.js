const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1f78776aa1mshd1e47f8d3f4906bp131385jsnc293984e0bda',
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};

export const getRandomCocktails = () => {
    return fetch('https://the-cocktail-db.p.rapidapi.com/randomselection.php', options)
	.then(response => response.json())
	// .then(response => console.log(response))
	.catch(err => alert(err.message));
}
export const getById = (id) => {
    return fetch(`https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${id}`, options)
	.then(response => response.json())
	// .then(response => console.log(response))
	.catch(err => console.error(err));
}