// src/api.js
// Will handle API calls here

import mockData from './mock-data';

/**
 *
 * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */
export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

//check if accessToken is valid
const checkToken = async (accessToken) => {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  );
  const result = await response.json();
  return result;
};

//Fetch the list of all events
//If using localhost, return mockData
//If not using localhost, use real API data
export const getEvents = async () => {
  if (window.location.href.startsWith('http://localhost')) {
    return mockData;
  }

  const token = await getAccessToken();

  if (token) {
    removeQuery();
    const url =  "https://o368pg1ald.execute-api.us-east-2.amazonaws.com/dev/api/get-events" + "/" + token;
    const response = await fetch(url);
    const result = await response.json();
    if (result) {
      return result.events;
    } else return null; 
  }
};

export const getAccessToken = async () => {
  //check if access token if found and run checkToken (above) if found
  const accessToken = localStorage.getItem('access_token');
  const tokenCheck = accessToken && (await checkToken(accessToken));

  //if no access token, check for auth code
  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");
    //if no auth code, redirect user to Google Auth screen to sign in and get code
    if (!code) {
      const response = await fetch(
        "https://o368pg1ald.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url"
      );
      const result = await response.json();
      const { authUrl } = result;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
};

//will remove code from URL once done for easy reading
const removeQuery = () => {
  let newurl;
  if (window.history.pushState && window.location.pathname) {
    newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    window.history.pushState("", "", newurl);
  } else {
    newurl = window.location.protocol + "//" + window.location.host;
    window.history.pushState("", "", newurl);
  }
};

//if auth code is present, fetch the token
const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  const response = await fetch(
    'https://o368pg1ald.execute-api.us-east-2.amazonaws.com/dev/api/token' + '/' + encodeCode
  );
  const { access_token } = await response.json();
  access_token && localStorage.setItem("access_token", access_token);

  return access_token;
};