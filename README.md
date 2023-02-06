<br/>

<div align="center">

<img src='https://github.com/TrickingApi/trickingapi/blob/main/trickingAPILogo.png' width='128' height='128'>
<h1>
  <code>Tricking-TS</code>
</h1>


[![npm](https://img.shields.io/npm/v/pokeapi-js-wrapper)](https://www.npmjs.com/package/@trickingapi/tricking-ts)
![issues](https://img.shields.io/github/issues/TrickingApi/tricking-ts)
![prs](https://img.shields.io/github/issues-pr/TrickingApi/tricking-ts)
![repo size](https://img.shields.io/github/repo-size/TrickingApi/tricking-ts)
![types](https://img.shields.io/npm/types/typescript)
[![discord](https://img.shields.io/discord/1061481749894418533)](https://discord.gg/7r99xBX6eU)


## A Typescript Wrapper for [TrickingApi](https://github.com/TrickingApi/trickingapi)

<br/>

</div>

For project guidelines please see https://github.com/TrickingApi/trickingapi

## Install
npm
```sh
npm install @trickingapi/tricking-ts --save
```

or yarn
```sh
yarn add @trickingapi/tricking-ts
```

If you wish to include the raw tricks data directly in your project also import [tricks-core-data](https://github.com/TrickingApi/tricks-core-data)
```sh
npm install @trickingapi/tricks-core-data --save
```
or 
```sh
yarn add @trickingapi/tricks-core-data
```

## Usage
To start using tricking-ts:

Import one of the clients into your project: 
```ts
import { TricksClient, CategoriesClient } from '@trickingapi/tricking-ts';
```

### TricksClient
Used to access the ```/tricks/*``` endpoints from a running instance of [TrickingAPI](https://github.com/TrickingApi/trickingapi)

Create an instance of the TricksClient class, leave the constructor blank if you wish to use the public instance of TrickingAPI
```ts
const client = new TricksClient();
```

If you're running the api on your own machine or your own version of the server pass the baseURL as so:
```ts
const client = new TricksClient({
  baseURL: 'localhost:8080'
});
```

The client also accepts a ```logOptions``` parameter of type ```pino.LoggerOptions```, see https://getpino.io/#/docs/api?id=options for more.

#### Implemented APIS 

- /tricks (https://trickingapi.dev/api/tricks)
```ts
const tricks: Trick[] = await client.getAllTrick();
```

Returns
```
{
    "360CartwheelTwist": {
        "id": "360CartwheelTwist",
        "name": "360 Cartwheel Twist",
        "aliases": [],
        "categories": [
            "FORWARD"
        ],
        "prereqs": [
            "360 Cartwheel"
        ],
        "nextTricks": [],
        "description": "A 360 Cartwheel with another twist executed before landing."
    },
    "540": {
        "id": "540",
        "name": "540",
        "aliases": [
            "Cheat 360 Katana (TKT)"
        ],
        "categories": [
            "VERT_KICK"
        ],
        "prereqs": [
            "Tornado"
        ],
        "nextTricks": [
            "Jackknife",
            "Backside 900 Hyper",
            "540 Gyro",
            "Sideswipe"
        ],
        "description": "A Tornado that lands in hyper (extra 180°) on the inside kicking leg."
    },
    "540Gyro": {
        "id": "540Gyro",
        "name": "540 Gyro",
        "aliases": [
            "Cheat 360 Katana Gyro (TKT)"
        ],
        "categories": [
            "VERT_KICK"
        ],
        "prereqs": [
            "540"
        ],
        "nextTricks": [
            "Backside 900 Gyro",
            "540 Gyroknife",
            "Cheat 900 Gyro"
        ],
        "description": "A 540 with an extra twist, landing back in Complete stance."
    },
    "540Gyroknife": {
        "id": "540Gyroknife",
        "name": "540 Gyroknife",
        "aliases": [
            "Cheat 360 Katana Gyroknife (TKT)"
        ],
        "categories": [
            "VERT_KICK"
        ],
        "prereqs": [
            "540 Gyro"
        ],
        "nextTricks": [],
        "description": "A 540 Gyro that finishes with a hyperhook. Could be thought of as a vertical Snapu Hyperhook."
    },
.
.
.
```

- /tricks/names (https://trickingapi.dev/api/tricks/names)
```ts
const tricksNames: <Map<string,string>> = await client.getAllTrickNames();
```

Returns
```
{
    "360CartwheelTwist": "360 Cartwheel Twist",
    "540": "540",
    "540Gyro": "540 Gyro",
    "540Gyroknife": "540 Gyroknife",
    "aerial": "Aerial",
    "aerialHelicoptero": "Aerial Helicoptero",
    "aerialHook": "Aerial Hook",
    "aerialMega": "Aerial Mega",
    "aerialScissor": "Aerial Scissor",
    "aerialSidewinder": "Aerial Sidewinder",
    "aerialTwist": "Aerial Twist",
    "aerialTwistDoubleleg": "Aerial Twist Doubleleg",
}
```

- /tricks/:name (https://trickingapi.dev/api/tricks/:name)
```ts
const butterflyTwist: Trick = await client.getTrickByName('butterflyTwist');
```

Returns
```
{
    "id": "butterflyTwist",
    "name": "Butterfly Twist",
    "aliases": [
        "B-Twist",
        "Barrel Roll"
    ],
    "categories": [
        "TWIST",
        "SINGLE",
        "INSIDE"
    ],
    "prereqs": [
        "Butterfly Kick"
    ],
    "nextTricks": [
        "Aerial Twist",
        "Butterfly Twist Round",
        "Butterfly Twist Doubleleg",
        "Sidewinder",
        "Butterfly Twist Axe",
        "Touchdown Butterfly Twist",
        "Cheat 720 Twist",
        "Spyder Twist",
        "Butterfly Twist-In",
        "Butterfly Twist Hyper",
        "Butterfly Twist Shuriken",
        "Janitor Twist"
    ],
    "description": "A Butterfly Kick with an extra 360° rotation done in the air before landing on the horizontal axis."
}
```

### Categories Client
Used to access ```/categories/*``` endpoints from a running instance of [TrickingAPI](https://github.com/TrickingApi/trickingapi)

Create an instance of the CategoriesClient class, leave the constructor blank if you wish to use the public instance of TrickingAPI
```ts
const client = new CategoriesClient();
```

Categories endpoints:
- /categories (https://trickingapi.dev/api/categories)
```ts
const categories: TrickCategory[[] = await client.getAllCategories();
```

Returns
```
[
    "FLIP",
    "VERT_KICK",
    "TWIST",
    "PSEUDO_DOUBLE_FLIP",
    "SINGLE",
    "DOUBLE",
    "TRIPLE",
    "QUAD",
    "GROUNDWORK",
    "UNKNOWN",
    "VARIATION",
    "INSIDE",
    "OUTSIDE",
    "FORWARD",
    "BACKWARD"
]
```

- /categories/tricks (https://trickingapi.dev/api/categories/tricks)
```ts
const categoriesToTricksMap: Map<TrickCategory, Trick[]> = await client.getAllTrickByCategory();
```

Returns
```
{
    "BACKWARD": [
        {
            "id": "corkscrewWackknife",
            "name": "Corkscrew Wackknife",
            "aliases": [],
            "categories": [
                "BACKWARD"
            ],
            "prereqs": [
                "Corkscrew",
                "Wackknife"
            ],
            "nextTricks": [
                "Double Corkscrew Wackknife"
            ],
            "description": "A Corkscrew that finishes with a Wackknife."
        },
        {
            "id": "doubleGainer",
            "name": "Double Gainer",
            "aliases": [],
            "categories": [
                "BACKWARD"
            ],
            "prereqs": [
                "Gainer Tuck"
            ],
            "nextTricks": [],
            "description": "A Gainer Tuck with two flips.  First landed by Vellu in February, 2011."
        },
       ...,
    "VERT_KICK": [...],
    "TWIST": [...],
    ...
}
```

- /categories/:name (https://trickingapi.dev/api/categories/:name)
```ts
const vertKicks: Trick[] = await client.getTricksForCategory('VERT_KICK');
```

Returns
```
[
    {
        "id": "cheat720Shuriken",
        "name": "Cheat 720 Shuriken",
        "aliases": [
            "Cheat 540 Shuriken (TKT)",
            " Cheat 720 \"Hyper\""
        ],
        "categories": [
            "VERT_KICK"
        ],
        "prereqs": [
            "Pop 360 Shuriken"
        ],
        "nextTricks": [
            "Cheat 1080 Shuriken"
        ],
        "description": "A Cheat 720 that lands on the kicking leg in true hyper (TKT) / mega stance."
    },
    {
        "id": "crowdAwakener",
        "name": "Crowd Awakener",
        "aliases": [
            "Cheat 360 Crowd Awakener (TKT)"
        ],
        "categories": [
            "VERT_KICK",
            "VARIATION"
        ],
        "prereqs": [
            "Tornado"
        ],
        "nextTricks": [
            "Crowd Awakener Knife",
            "Cheat 900 Crowd Awakener"
        ],
        "description": "A Tornado with a split kick / straddle."
    },
    ...
]
```

