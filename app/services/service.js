/**
 * A class that returns all the methods required to manipulate and filter data.
 *
 * @attributes {data, datalist} which stores an object with
 *  number of words in each posts and an array containing the
 *  number of times a post of certain length appears
 * @method {countDict} This method converts the every
 *  single string to a list of words and then creates
 *  a dictionary to store this data in key-value
 *  pairs where key is the number of words in a
 *  particular string and value is the number of
 *  posts which have same number of words in them.
 *  And then return that object.
 * @returns {data} return the data in object format
 *
 * @method {getOutput} This method takes the input
 *  object return by the countDict method and
 *  then returns an array of length equal to the
 *  maximum number of words in any of the post or pages.
 *  In this array index represents the number of words
 *  in any post/page and value at that index represents
 *  the number of posts/pages which have that number of words.
 * @returns {data} returns an array of count of pages with number of words in them.
 */

class Api {
  constructor() {
    this.data = {};
    this.dataList = [];
  }

  countDict(values) {
    values.forEach((values) => {
      const stringValues = values.match(/\b\w+\b/g); // regex pattern to extract the list of words from the HTML string
      if (stringValues) {
        const len = stringValues.length;
        this.data[len] = (this.data[len] || 0) + 1;
      }
    });

    return this.data;
  }

  getOutput() {
    const maxKey = Object.keys(this.data)
      .reduce((a, b) => (a > b ? parseInt(a, 10) : parseInt(b, 10)));
    let index = 0;
    while (index <= maxKey) {
      this.dataList[index] = (this.data[index] || 0);
      index += 1;
    }
    return this.dataList;
  }
}

module.exports = Api;
