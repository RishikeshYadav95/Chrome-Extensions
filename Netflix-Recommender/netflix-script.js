function onClick() {
    const str = document.getElementById("queryString").value;
    fetchData(str);
}

async function fetchData(str) {

    console.log(str)
    const url = 'https://netflix54.p.rapidapi.com/search/?offset=0&limit_titles=50&limit_suggestions=20&lang=en&query=' + str;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'de5305dde6mshf5d2e88bcf5ce08p1fed81jsna3c7c497bae7',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    //const response = await fetch(url, options);
    //const result = await response.text();
    //console.log(result);

    //document.getElementById("recommendations").innerHTML = result.results.map(item => `<li>${item.titleType.text}</li>`).join('');

}