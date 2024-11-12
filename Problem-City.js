function city(cityData) {
    let keys = Object.keys(cityData);

    for (let key of keys) {
        console.log(`${key} -> ${cityData[key]}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});
city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});
