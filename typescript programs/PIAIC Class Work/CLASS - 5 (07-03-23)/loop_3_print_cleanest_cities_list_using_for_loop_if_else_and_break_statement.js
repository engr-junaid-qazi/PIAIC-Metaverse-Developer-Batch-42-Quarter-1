var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Multan"];
console.log(cleanestCities[0]);
console.log(cleanestCities[1]);
console.log(cleanestCities.length);
for (var i = 0; i < cleanestCities.length; i++) {
    console.log(cleanestCities[i]);
    if ("Islamabad" === cleanestCities[i]) {
        console.log("Yes it is in the list");
        break;
    }
    else {
        console.log("Not in the list");
    }
}
