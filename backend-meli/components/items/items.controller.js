/**
 * @Description   : En este controlador está la logica para la gestion de los items
 * @Author        : Javier Duque
 * @Fecha         : 18/02/2024
 * @Observaciones : 
 */

const utils = require("../../utils/utils");
const { getCategoryByID } = require("../category/category.controller");

/**
 * Consulta la información de un item por su id
 * @id es el identificador del item
 */
const getItemByID = async (id) => {
  try {
    // Obtenemos el item y procesamos la información
    return await utils.consultAPIWithAxios(process.env.API_MERCADO_LIBRE+'/items/'+id, 'get')
    .then(async (response) => {
      let item = response.data.data;
      let decimals = (item.price.toString().indexOf(".") != -1)?item.price.toString().split('.')[1]:0;

      // Obtenemos la descripción del item
      let responseDescription = await getDescriptionItemByID(item.id);

      // Obtenemos la categoria
      let responseCategory = await getCategoryByID(item.category_id);

      // Armamos la respuesta 
      let data = {
        "author": {
          "id": item.seller_id,
          "name": "",
          "lastname": ""
        },
        "item": {
          "id": item.id,
          "title": item.title,
          "price": {
            "currency": item.currency_id,
            "amount": item.price,
            "decimals": decimals,
          },
          "picture": item.pictures[0]?.url,
          "condition": item.condition,
          "free_shipping": item.shipping?.free_shipping,
          "sold_quantity": null,
          "description": (responseDescription.success)?responseDescription.data.data.plain_text:null,
        },
        "category": (responseCategory.success)?responseCategory.data:null,
      };

      return {
        success: true,
        message: "Consultar categoria por id finalizada con exito",
        data: data,
        error: null,
        extra: {},
      };
    })
    .catch((error) => {
      console.error(error);
      return {
        success: false,
        message: "Consultar item por id presento un error en el API de Mercadolibre",
        data: null,
        error: error,
        extra: {},
      };
    });
  } catch (error) {
    return {
      success: false,
      message: "Obtener item por id presento un error inesperado",
      data: null,
      error: error,
      extra: {},
    };
  }
};

/**
 * Consulta la descripción de un item por su id
 * @id es el identificador del item
 */
const getDescriptionItemByID = (id) => {
  try {
      return utils.consultAPIWithAxios(process.env.API_MERCADO_LIBRE+'/items/'+id+'/description', 'get')
      .then((response) => {
        return {
          success: true,
          message: "Consultar descripción por id finalizada con exito",
          data: response.data,
          error: null,
          extra: {},
        };
      })
      .catch((error) => {
        console.error(error);
        return {
          success: false,
          message: "Consultar descripcion presento un error en el API de Mercadolibre",
          data: null,
          error: error,
          extra: {},
        };
      });
  } catch (error) {
    return {
      success: false,
      message: "Obtener descripcion por id presento un error inesperado",
      data: null,
      error: error,
      extra: {},
    };
  }
};

/**
 * Realiza la busquedad de items según un texto
 * @text es la frase que se va buscar
 * @offset es la frase que se va buscar
 */
const searchItems = (text,offset) => {
  try {
    // Validamos que se un numero valido antes de consumir el API
    if(!Number.isInteger(offset) || !offset >= 0){
      offset = 0;
    };

    return utils.consultAPIWithAxios(process.env.API_MERCADO_LIBRE+'/sites/MLA/search?q='+text+'&offset='+offset+'&limit=4', 'get')
    .then((responseSearch) => {
      return {
        success: true,
        message: "Busqueda finalizada con exito",
        data: responseSearch.data.data,
        error: null,
        extra: {},
      };
    })
    .catch((error) => {
      console.error(error);
      return {
        success: true,
        message: "Busqueda presento un error en el API de Mercadolibre",
        data: null,
        error: error,
        extra: {},
      };
    });
    
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "La busqueda presento un error inesperado",
      data: null,
      error: error,
      extra: {},
    };
  }
};

module.exports = {
  getItemByID,
  searchItems,
  getDescriptionItemByID, 
};  