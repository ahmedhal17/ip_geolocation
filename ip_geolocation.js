const axios = require('axios');

async function getGeolocation(ipAddress) {
    try {
        const response = await axios.get(`http://ipinfo.io/${ipAddress}/json`);
        const data = response.data;
        return {
            ip: data.ip,
            city: data.city,
            region: data.region,
            country: data.country,
            loc: data.loc
        };
    } catch (error) {
        console.error("Error fetching geolocation data:", error.message);
        return null;
    }
}

const ipAddress = '8.8.8.8'; // Replace with the IP address you want to look up
getGeolocation(ipAddress)
    .then(geolocation => {
        if (geolocation) {
            console.log("Geolocation:", geolocation);
        } else {
            console.log("Failed to retrieve geolocation.");
        }
    });
