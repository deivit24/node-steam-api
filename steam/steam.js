
const Users = require("./user/Users")
const SteamClient = require("./client/SteamClient")

class Steam {
    /**
     * Constructor for Steam API client
     * @param {string} key - Your Steam API key
     * @param {object} headers - Optional headers for API requests
     */
    constructor(key, headers = {}) {
        this.client = new SteamClient(key, headers);
        this.users = new Users(this.client);
//       this.apps = new Apps(this.client);
    }
}

module.exports =  Steam
