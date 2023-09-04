require('dotenv').config();

const Steam =require("node-steam-api")
const key = process.env.STEAM_API_KEY
const steam = new Steam(key)

const STEAM_ID = "76561198995017863"

const getPlayerBans = async () => {
    // argument: steamId
    return await steam.users.getPlayerBans(STEAM_ID);
}
