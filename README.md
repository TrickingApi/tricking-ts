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

Import the package into your project: 
```ts
import { TricksClient } from '@trickingapi/tricking-ts';
```

Create an instance of the TrickingClient class, leave the constructor blank if you wish to use the public instance of TrickingAPI
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


