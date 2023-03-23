const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountry(country));
    // console.log(countriesHTML);
    const container = document.getElementById('countries')
    container.innerHTML = countriesHTML.join(' ');
}

const getCountry = country => {
    console.log(country);
    const { name, flags } = country
    return `
    <div class='country'>
         <h2>${name.common}</h2>
         <img src="${flags.png}">
    
    </div>
    `
}
loadCountries()
