'use strict'

var url = 'https://restcountries.eu/rest/v1/name/'; //zmienna przywołująca adres url z listą krajów
var countriesList = document.getElementById('countries'); //wybieranie elementu po id

document.getElementById('search').addEventListener('click', searchCountries); //po kliknięciu w przycisk o id () wykonaj funkcję searchCountries

function searchCountries() {
    var countryName = document.getElementById('country-name').value; //pobierz przypisz wartość wpisaną przez użytkownika 
    var searchByName = 'https://restcountries.eu/rest/v2/name/{name}?fullText=true'; //przypisz do zmiennej adres endpoint (url) 
    if(!countryName.length) countryName = 'Poland'; //jeśli wartość jest pusta przypisz wartość zastępczą
    fetch(url + countryName) //prześlij zapytanie nazwy kraju i adresu url poprzez funkcję fetch
    .then(function(resp) { // Nastepnie zwroc za pomoca argumentu funkcji i obiektu json wartosci obiektow z Fetch API
        return resp.json(searchByName);
    })
    .then(showCountriesList); //wywołaj funkcję wyświetlającą wartości
}

//funkcja wyświetlająca wartości
function showCountriesList(resp) { 
    countriesList.innerHTML = ''; //puste wartości po załadowaniu strony
    resp.forEach(function(item) { //iteruj po wszystkich elementach obiektu i zapisz jako argument w funkcji
        var liEl = document.createElement('li'); // przypisz do zmiennej i stworz nowy element listy w ktorym bedą wyswietlane informacje o kraju
        liEl.innerText = // wyswietl informacje z elementów obiektu na stronie
        'Region: ' + item.region + 
        ' Name: ' + item.name +
        ' Capital: ' + item.capital 
        countriesList.appendChild(liEl); //dodaj element do listy
    });
}