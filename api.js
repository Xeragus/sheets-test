const express = require('express')
const api = express();
const { GoogleSpreadsheet } = require('google-spreadsheet');

api.post('/', (req, res) => {
  // write code here
  // in postman send the following type of body
  // let body = {
  //   name: 'hehe',
  //   lastname: 'heha'
  // }
  // and store it as a new row in the sheet
  // the sheet should have headers (column names)
  console.log('Please Hagit & Niv, make this shit work')
});

api.listen(3000);