async function fetchData() {
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?year=2023';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '<Add your token here>',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };
    
    const response = await fetch(url, options);
    const result = await response.json()

    console.log(result)

    document.getElementById("movies").innerHTML = result.results.map(item => `<li>${item.originalTitleText.text}</li>`).join('');
}

fetchData();
