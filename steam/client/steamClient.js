//const fetch = require('node-fetch');
const fetch = require('../utils/fetch')

const API_BASE_URL = "https://api.steampowered.com"
const API_APP_DETAILS_URL = "https://store.steampowered.com/api/appdetails"
const API_APP_SEARCH_URL = "https://store.steampowered.com/search/suggest"

class SteamClient {
    /**
     * Constructor for Steam API HTTP client
     * @param {string} key - Your Steam API key
     * @param {object} headers - Optional headers for HTTP requests
     */
    constructor(key, headers = {}) {
        this.headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            ...headers,
        };
        this.key = key;
    }

    async request(method, url, params = {}, headers = {}, retryCount = 3) {
        const requestUrl = new URL(API_BASE_URL + url);
        requestUrl.searchParams.append('key', this.key);
        for (const [param, value] of Object.entries(params)) {
            requestUrl.searchParams.append(param, value);
        }

        const requestHeaders = {
            ...this.headers,
            ...headers,
        };
        
        let response;
        for (let retry = 1; retry <= retryCount; retry++) {
            try {
                response = await fetch(requestUrl.toString(), {
                    method,
                    headers: requestHeaders,
                });
                

                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }

                const responseBody = await response.text();
                
                if (responseBody.length === 0) {
                    return "OK";
                }

                try {
                    return JSON.parse(responseBody);
                } catch (error) {
                    throw new Error(`Failed to parse JSON response: ${error.message}`);
                }
            } catch (error) {
                if (retry < retryCount) {
                    console.error(`Retry ${retry}/${retryCount}: ${error.message}`);
                } else {
                    throw error;
                }
            }
        }
    }
}

module.exports = SteamClient
