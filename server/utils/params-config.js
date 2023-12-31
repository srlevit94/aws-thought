const { v4: uuidv4 } = require('uuid');

const params = (fileName) => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    const imageParams = {
        Bucket: "user-images-4b53f769-1103-4755-80b6-eb4fcbf35ca9",
        Key: `${uuidv4()}.${fileType}`,
        Body: fileName.buffer,
        ACL: 'public-read', // allow read access to this file
    };
  
    return imageParams;
  };

  module.exports = params;