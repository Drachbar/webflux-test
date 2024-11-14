const h1Element = document.querySelector('h1');

h1Element.addEventListener('click', () => {
	console.log('hejsan')
})

fetch('http://localhost:8080/api/v1/fluxstring')
    .then(response => {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        
        // Funktion för att läsa och logga strömmande data
        const readStream = () => {
            reader.read().then(({ done, value }) => {
                if (done) {
                    console.log("Stream avslutad");
                    return;
                }
                console.log(decoder.decode(value));
                readStream(); // Fortsätter att läsa nästa del av strömmen
            });
        };
        
        readStream();
    })
    .catch(error => console.error("Fel vid hämtning:", error));
