const axios = require("axios");

async function translateText(text) {
  try {
    const response = await axios.post("http://localhost:5000/translate", {
      text,
    });
    return response.data.translation;
  } catch (error) {
    console.error("Translation error:", error);
    throw error;
  }
}

// Usage example
translateText("He is widely credited as the man who introduced Christianity")
  .then((translation) => {
    console.log("Translation:", translation);
  })
  .catch((error) => {
    console.error("Translation error:", error);
  });

// const axios = require("axios");

// async function translateText(text) {
//   try {
//     const response = await axios.post("http://localhost:5000/translate", {
//       text,
//     });
//     return response.data.translation;
//   } catch (error) {
//     console.error("Translation error:", error);
//     throw error;
//   }
// }

// // Usage example
// translateText("He is widely credited as the man who introduced Christianity")
//   .then((translation) => {
//     console.log("Translation:", translation);
//   })
//   .catch((error) => {
//     console.error("Translation error:", error);
//   });

// const axios = require('axios');

// const textToTranslate = "He is widely credited as the man who introduced Christianity";

// axios.post('http://localhost:5000/translate', { text: textToTranslate })
//   .then(response => {
//     console.log('Translation:', response.data.translation);
//   })
//   .catch(error => {
//     console.error('Translation error:', error);
//   });
