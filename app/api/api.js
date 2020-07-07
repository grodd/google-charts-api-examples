const axios = require('axios');

/**
 * Returns the data fetched from the url
 *
 * @param {url} url the url from which to fetch data.
 * @returns {Array} array containing all the html string from the request.
 *
 */

async function fetchData(url) {
  const apiData = [];
  await axios
    .get(url)
    .then((response) => response.data.forEach((element) => {
      apiData.push(element.content.rendered);
    }));
  return apiData;
}

module.exports = fetchData;
