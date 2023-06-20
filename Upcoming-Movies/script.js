async function fetchData() {
    const year = new Date().getFullYear();

    const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?year=' + year;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '<Add your token here>',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };
    
    const response = await fetch(url, options)
    const result = await response.json()

    console.log(result)
    document.getElementById("movies").innerHTML = result.results.map(item => `<li><div><p>${item.originalTitleText.text}&nbsp;(${item.titleType.text})</p></div></li><img id="${item.id}" src="" width="140" height="140" alt="Test Image"/>`).join('');
    result.results.forEach(obj => {
        if(obj.primaryImage != null){
            document.getElementById(obj.id).src = obj.primaryImage.url
        }
    });
}

fetchData();