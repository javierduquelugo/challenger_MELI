/**
 * Consulta un API mediante Axios 
 * @url es el identificador de la categoria
 * @method es el identificador de la categoria
 * @body es el identificador de la categoria
 */

const axios = require('axios');


const consultAPIWithAxios = async (url,method, body = null) => {
  try {
    let requestParams = {
      method: method,
      url: url,
      headers: {
        "content-type": "application/json",
      },
    };

    if (method.toLowerCase() == "post") {
      requestParams.data = body;
    }

    return new Promise((resolve,reject) => {
      axios(requestParams)
      .then((response) => {
        resolve ({
          success: true,
          message: "Consulta Axios exitosa",
          data: response,
          error: null,
          extra: {url: url, method: method},
        });
      })
      .catch((error) => {
        reject({
          success: false,
          message: "Consulta Axios presento un error en el API",
          data: null,
          error: error,
          extra: {url: url, method: method},
        });
      });
    });
    
  } catch (error) {
    throw {
      success: false,
      message: "Consulta Axios presento un error inesperado",
      data: null,
      error: error,
      extra: {url: url, method: method},
    };
  }
};


module.exports = {
  consultAPIWithAxios
};