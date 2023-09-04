# Get Started

## Installation

`npm install node-steam-api`

## Create Steam API web key

[Steam API Web key](https://steamcommunity.com/dev/apikey)

Follow instructions to get API Key

## Create .env file

From root of your project

`touch .env`

`echo "STEAM_API_KEY=<YOUR_STEAM_API KEY>" >> .env`

# Basic Usage

### Getting User details by steam id

```javascript
require("dotenv").config();

const Steam = require("node-steam-api");
const key = process.env.STEAM_API_KEY;
const steam = new Steam(key);

const getUserDetail = async () => {
  // argument: steamId
  return await steam.users.getUserDetails("76561198995017863");
};
```

#### Response

```javascript
{
  player: {
    steamid: '76561198995017863',
    communityvisibilitystate: 3,
    profilestate: 1,
    personaname: 'The12thChairman',
    profileurl: 'https://steamcommunity.com/id/the12thchairman/',
    avatar: 'https://avatars.steamstatic.com/427ef7d5f8ad7b21678f69bc8afc95786cf38fe6.jpg',
    avatarmedium: 'https://avatars.steamstatic.com/427ef7d5f8ad7b21678f69bc8afc95786cf38fe6_medium.jpg',
    avatarfull: 'https://avatars.steamstatic.com/427ef7d5f8ad7b21678f69bc8afc95786cf38fe6_full.jpg',
    avatarhash: '427ef7d5f8ad7b21678f69bc8afc95786cf38fe6',
    lastlogoff: 1681014493,
    personastate: 0,
    primaryclanid: '103582791429521408',
    timecreated: 1570311509,
    personastateflags: 0,
    loccountrycode: 'US'
  }
}
```

### Getting Friends List

```javascript
require("dotenv").config();

const Steam = require("node-steam-api");
const key = process.env.STEAM_API_KEY;
const steam = new Steam(key);

const STEAM_ID = "76561198995017863";
const getUserFriendsList = async () => {
  // argument: steamId
  return await steam.users.getUserFriendsList(STEAM_ID);
};

getUserFriendsList();
```

Response

```javascript
{
  friends: [
    {
      steamid: "76561198030124562",
      communityvisibilitystate: 3,
      profilestate: 1,
      personaname: "Robz",
      profileurl: "https://steamcommunity.com/profiles/76561198030124562/",
      avatar:
        "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg",
      avatarmedium:
        "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg",
      avatarfull:
        "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg",
      avatarhash: "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb",
      lastlogoff: 1693532081,
      personastate: 0,
      primaryclanid: "103582791429521408",
      timecreated: 1283739538,
      personastateflags: 0,
      relationship: "friend",
      friendsince: 1634692171,
    },
    {
      steamid: "76561198062000703",
      communityvisibilitystate: 3,
      profilestate: 1,
      personaname: "Term",
      profileurl: "https://steamcommunity.com/id/_terminus14/",
      avatar:
        "https://avatars.steamstatic.com/eab71f1cb5d312c9b801e04a8da8b81d246bf6af.jpg",
      avatarmedium:
        "https://avatars.steamstatic.com/eab71f1cb5d312c9b801e04a8da8b81d246bf6af_medium.jpg",
      avatarfull:
        "https://avatars.steamstatic.com/eab71f1cb5d312c9b801e04a8da8b81d246bf6af_full.jpg",
      avatarhash: "eab71f1cb5d312c9b801e04a8da8b81d246bf6af",
      lastlogoff: 1693823129,
      personastate: 4,
      primaryclanid: "103582791434476706",
      timecreated: 1334459945,
      personastateflags: 0,
      relationship: "friend",
      friendsince: 1648350663,
    },
    {
      steamid: "76561198040366189",
      communityvisibilitystate: 3,
      profilestate: 1,
      personaname: "Regular Tetragon",
      commentpermission: 1,
      profileurl: "https://steamcommunity.com/id/regulartetragon/",
      avatar:
        "https://avatars.steamstatic.com/85ee384bec86399cc79728cbde046516fa704b23.jpg",
      avatarmedium:
        "https://avatars.steamstatic.com/85ee384bec86399cc79728cbde046516fa704b23_medium.jpg",
      avatarfull:
        "https://avatars.steamstatic.com/85ee384bec86399cc79728cbde046516fa704b23_full.jpg",
      avatarhash: "85ee384bec86399cc79728cbde046516fa704b23",
      lastlogoff: 1693805025,
      personastate: 4,
      realname: "Vael Mattingly",
      primaryclanid: "103582791435763797",
      timecreated: 1302294837,
      personastateflags: 0,
      relationship: "friend",
      friendsince: 1649989273,
    },
    {
      steamid: "76561198121423211",
      communityvisibilitystate: 3,
      profilestate: 1,
      personaname: "el_nave",
      profileurl: "https://steamcommunity.com/profiles/76561198121423211/",
      avatar:
        "https://avatars.steamstatic.com/1f48ca0206ad63f430b35173c0c994d26e8fed91.jpg",
      avatarmedium:
        "https://avatars.steamstatic.com/1f48ca0206ad63f430b35173c0c994d26e8fed91_medium.jpg",
      avatarfull:
        "https://avatars.steamstatic.com/1f48ca0206ad63f430b35173c0c994d26e8fed91_full.jpg",
      avatarhash: "1f48ca0206ad63f430b35173c0c994d26e8fed91",
      lastlogoff: 1692760065,
      personastate: 0,
      primaryclanid: "103582791429521408",
      timecreated: 1388690569,
      personastateflags: 0,
      relationship: "friend",
      friendsince: 1592096466,
    },
    {
      steamid: "76561198164668273",
      communityvisibilitystate: 3,
      profilestate: 1,
      personaname: "ProToType",
      profileurl: "https://steamcommunity.com/id/bruuitssam/",
      avatar:
        "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg",
      avatarmedium:
        "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg",
      avatarfull:
        "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg",
      avatarhash: "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb",
      lastlogoff: 1693540243,
      personastate: 1,
      realname: "Samuel chance",
      primaryclanid: "103582791429521408",
      timecreated: 1416698360,
      personastateflags: 0,
      loccountrycode: "US",
      relationship: "friend",
      friendsince: 1634692088,
    },
  ];
}
```

### Getting Users Recently Played Games

```javascript
require('dotenv').config();

const Steam =require("node-steam-api")
const key = process.env.STEAM_API_KEY
const steam = new Steam(key)

const STEAM_ID = "76561198995017863"

const getRecentlyPlayedGames = async () => {
    // argument: steamId
    return await steam.users.getRecentlyPlayedGames(STEAM_ID);
}
```

### Getting User Owned Games

```javascript
require('dotenv').config();

const Steam =require("node-steam-api")
const key = process.env.STEAM_API_KEY
const steam = new Steam(key)

const STEAM_ID = "76561198995017863"

const getOwnedGames = async () => {
    // argument: steamId
    return await steam.users.getOwnedGames(STEAM_ID);
}
```

### Getting User Steam Level

```javascript
require('dotenv').config();

const Steam =require("node-steam-api")
const key = process.env.STEAM_API_KEY
const steam = new Steam(key)

const STEAM_ID = "76561198995017863"

const getUserSteamLevel = async () => {
    // argument: steamId
    return await steam.users.getUserSteamLevel(STEAM_ID);
}
```

### Getting User Badges

```javascript
require('dotenv').config();

const Steam =require("node-steam-api")
const key = process.env.STEAM_API_KEY
const steam = new Steam(key)

const STEAM_ID = "76561198995017863"

const getUserBadges = async () => {
    // argument: steamId
    return await steam.users.getUserBadges(STEAM_ID);
}
```

### Getting Community Badge Progress

```javascript
require('dotenv').config();

const Steam =require("node-steam-api")
const key = process.env.STEAM_API_KEY
const steam = new Steam(key)

const STEAM_ID = "76561198995017863"

const getUserCommunityBadgeProgress = async (badgeId) => {
    // argument: steamId, badgeId
    return await steam.users.getUserCommunityBadgeProgress(STEAM_ID, badgeId);
}
```

### Getting User Public Account

```javascript
require('dotenv').config();

const Steam =require("node-steam-api")
const key = process.env.STEAM_API_KEY
const steam = new Steam(key)

const STEAM_ID = "76561198995017863"

const getUserCommunityBadgeProgress = async () => {
    // argument: steamId
    return await steam.users.getAccountPublicInfo(STEAM_ID);
}
```



### Getting user ban status

```javascript
require('dotenv').config();

const Steam =require("node-steam-api")
const key = process.env.STEAM_API_KEY
const steam = new Steam(key)

const STEAM_ID = "76561198995017863"

const getPlayerBans = async () => {
    // argument: steamId
    return await steam.users.getPlayerBans(STEAM_ID);
}
```

## APP methods coming soon