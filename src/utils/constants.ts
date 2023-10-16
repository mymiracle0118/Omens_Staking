export const IS_PROD = process.env.NODE_ENV === "production";
// export const IS_PROD = true;
// In production the API is at the same URL, in development it's at a different port
export const API_URI = IS_PROD
  ? "https://omens-staking.herokuapp.com/v1/graphql"
  : "http://localhost:8080/v1/graphql";

export const BASE_URL = IS_PROD
  ? "https://dig.omens.art"
  : "http://localhost:3000";

export const BASE_APIURL = `${BASE_URL}/api`;

export const WS_URI = IS_PROD
  ? `wss://omens-staking.herokuapp.com/v1/graphql`
  : "ws://localhost:8080/v1/graphql";

export const STAKING_WALLET = "STYXaJSvjUuqex1fTretVdapaSSA8vhZsxsvitsf3rj";

export const MISSION_KEY = {
  staking: {
    requirements: () => true,
    reward: 8,
    earningCycle: 24,
    cancelPenalty: 0,
    name: "Staking",
    lossText: null,
    drops: null,
    cost: 0,
  }
};
