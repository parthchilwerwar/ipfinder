document.addEventListener("DOMContentLoaded", function () {
    const ipInput = document.getElementById("ipInput");
    const lookupButton = document.getElementById("lookupButton");
    const locationResult = document.getElementById("locationResult");

    lookupButton.addEventListener("click", async () => {
        const ip = ipInput.value;
        const response = await fetch(`http://localhost:5000/location/${ip}`);
        const data = await response.json();
        locationResult.innerHTML = `Location: ${data.city}, ${data.region}, ${data.country}`;
    });
});
