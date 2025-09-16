function search() {
    console.log("clicked");
    // Get the search term from the input field
    const searchTerm = document.getElementById("budget").value;
    console.log(searchTerm);
    // call the backend API to get the search results
    // make a call to http://localhost:5000/search/100
    fetch(`http://localhost:5000/search/${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // display the search results in the results div
            const resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = "";
            data.forEach(item => {
                const div = document.createElement("div");
                div.innerHTML = item.name + ": " + item.price;
                resultsDiv.appendChild(div);
            });
        });

    // display the search results
}