class Users {
    /**
     * Constructor for Steam Users API client
     * @param {SteamClient} client - Your SteamClient instance
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Searches for exact match
     * @param {string} search - For example 'the12thchairman'
     */
    async searchUser(search) {
        try {
            const searchResponse = await this.client.request(
                "GET",
                "/ISteamUser/ResolveVanityURL/v1/",
                {vanityurl: search}
            );

            if (searchResponse.response.success !== 1) {
                return searchResponse.response.message;
            }

            const steamId = searchResponse.response.steamid;
            return this.getUserDetails(steamId);
        } catch (error) {
            throw new Error(`Error searching user: ${error.message}`);
        }
    }

    /**
     * Gets user/player details by steam ID
     * @param {string} steamId - Steam 64 ID Gets one player. Defaults to True. When false, steam_id can be a string of steamids and delimited by a ','
     */
    async getUserDetails(steamId) {
        try {
            const userDetailsResponse = await this.client.request(
                "GET",
                "/ISteamUser/GetPlayerSummaries/v2/",
                {steamids: steamId}
            );
            
            const players = userDetailsResponse.response.players;
            if (players.length === 0) {
                throw new Error("User not found");
            }
            
            if (players.length === 1) return {player: players[0]}
            return {players}
        } catch (error) {
            throw new Error(`Error getting user details: ${error.message}`);
        }
    }

    /**
     * Gets friend array of a user
     * @param {string} steamId - Steam 64 ID
     */
    async getUserFriendsList(steamId) {
        try {
            const userFriendListResponse = await this.client.request(
                "GET",
                "/ISteamUser/GetFriendList/v1/",
                {steamid: steamId}
            );

            const friendListResponse = userFriendListResponse.friendslist;
            const friends = await this._transformFriends(friendListResponse)
            return {friends}

        } catch (error) {
            throw new Error(`Error getting user friends list: ${error.message}`);
        }
    }

    /**
     * Get recently played games
     * @param {string} steamId - Steam 64 ID
     */
    async getRecentlyPlayedGames(steamId) {
        try {
            const recentGames = await this.client.request(
                "GET",
                "/IPlayerService/GetRecentlyPlayedGames/v1/",
                {steamid: steamId}
            );
            return recentGames.response;
        } catch (error) {
            throw new Error(`Error getting recently played games: ${error.message}`);
        }
    }

    /**
     * Get owned games
     * @param {string} steamId - Steam 64 ID
     * @param {boolean} includeAppInfo - Includes app/game info. Defaults to true.
     * @param {boolean} includeFreeGames - Includes free games. Defaults to true.
     */
    async getOwnedGames(steamId, includeAppInfo = true, includeFreeGames = true) {
        try {
            const ownedGames = await this.client.request(
                "GET",
                "/IPlayerService/GetOwnedGames/v1/",
                {
                    steamid: steamId,
                    include_appinfo: includeAppInfo,
                    include_played_free_games: includeFreeGames
                }
            );
            return ownedGames.response;
        } catch (error) {
            throw new Error(`Error getting owned games: ${error.message}`);
        }
    }

    /**
     * Get user Steam level
     * @param {string} steamId - Steam 64 ID
     */
    async getUserSteamLevel(steamId) {
        try {
            const response = await this.client.request(
                "GET",
                "/IPlayerService/GetSteamLevel/v1/",
                {
                    steamid: steamId,
                }
            );
            return response.response;
        } catch (error) {
            throw new Error(`Error getting user Steam level: ${error.message}`);
        }
    }

    /**
     * Get user Steam badges
     * @param {string} steamId - Steam 64 ID
     */
    async getUserBadges(steamId) {
        try {
            const response = await this.client.request(
                "GET",
                "/IPlayerService/GetBadges/v1/",
                {
                    steamid: steamId,
                }
            );
            return response.response;
        } catch (error) {
            throw new Error(`Error getting user Steam badges: ${error.message}`);
        }
    }

    /**
     * Get user community badge progress
     * @param {string} steamId - Steam 64 ID
     * @param {number} badgeId - Badge ID
     */
    async getUserCommunityBadgeProgress(steamId, badgeId) {
        try {
            const response = await this.client.request(
                "GET",
                "/IPlayerService/GetCommunityBadgeProgress/v1",
                {
                    steamid: steamId,
                    badgeid: badgeId,
                }
            );
            return response.response;
        } catch (error) {
            throw new Error(`Error getting user community badge progress: ${error.message}`);
        }
    }

    /**
     * Get account public info
     * @param {string} steamId - Steam 64 ID
     */
    async getAccountPublicInfo(steamId) {
        try {
            const response = await this.client.request(
                "GET",
                "/IGameServersService/GetAccountPublicInfo/v1",
                {
                    steamid: steamId,
                }
            );
            return response;
        } catch (error) {
            throw new Error(`Error getting account public info: ${error.message}`);
        }
    }

    /**
     * Get player bans info
     * @param {string} steamId - Steam 64 ID
     */
    async getPlayerBans(steamId) {
        try {
            const response = await this.client.request(
                "GET",
                "/ISteamUser/GetPlayerBans/v1",
                {
                    steamids: steamId,
                }
            );
            return response;
        } catch (error) {
            throw new Error(`Error getting player bans info: ${error.message}`);
        }
    }

    /**
     * Get Steam 64 ID from vanity URL
     * @param {string} vanity - Vanity URL
     */
    async getSteamIdFromVanity(vanity) {
        try {
            const response = await this.client.request(
                "GET",
                "/ISteamUser/ResolveVanityURL/v1",
                {
                    vanityurl: vanity,
                }
            );
            return response.response;
        } catch (error) {
            throw new Error(`Error resolving vanity URL: ${error.message}`);
        }
    }


    async _transformFriends(friendsList) {
        const steamIds = friendsList.friends.map(f => {
            return f.steamid
        }).join(',')
        const friends = (await this.getUserDetails(steamIds)).players
        friends.forEach(f => {
            let foundFriend = friendsList.friends.find(ff => ff.steamid === f.steamid)
            f.relationship = foundFriend.relationship
            f.friendsince = foundFriend.friend_since
        })
        return friends
    }
}

module.exports = Users
