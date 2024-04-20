const axios = require('axios');


async function getPrevNames(userId) {
    try {
        const response = await axios.get(`http://api.elitebots.xyz/api/prevnames/${userId}`);
        return response.data.prevNames
    } catch (error) {
        console.error('Erreur lors de la récupération des noms précédents');
        }
}

async function ping() {
    try {
        const response = await axios.get(`http://api.elitebots.xyz/api/latence`);
        return response.data.ping
    } catch (error) {
        console.error("Erreur lors de la récupération de la latence de l'api");
        }
}

console.log("La connexion à l'api Elite Bots a été établie avec succès.")
module.exports = {getPrevNames, ping };
