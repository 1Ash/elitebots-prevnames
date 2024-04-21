const axios = require('axios');

async function getPrevNames(userId) {
    try {
        const response = await axios.get(`http://elitebots.xyz/api/prevnames/${userId}`);
        return response.data.prevNames;
    } catch (error) {
        console.error('erreur lors de la récupération des noms précédents');
        throw error
    }
}

async function ping() {
    try {
        const response = await axios.get(`http://elitebots.xyz/api/latence`, { timeout: 3000 })
        if (response && response.data && response.data.ping) {
            return response.data.ping;
        } else {
            throw new Error("Réponse invalide de l'API");
        }
    } catch (error) {
        console.error("Erreur lors de la récupération de la latence de l'API:");
        throw error;
    }
}

console.log("La connexion à l'api Elite Bots a été établie avec succès.");

module.exports = { getPrevNames, ping };
