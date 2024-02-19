/**
 * @Description   : En este controlador está la logica para la gestion de las categorias
 * @Author        : Javier Duque
 * @Fecha         : 18/02/2024
 * @Observaciones : 
 */

const utils = require("../../utils/utils");

/**
 * Consulta una categoria por su id
 * @category_id es el identificador de la categoria
 */
const getCategoryByID = (category_id) => {
  try {
    return utils.consultAPIWithAxios(process.env.API_MERCADO_LIBRE+'/categories/'+category_id, 'get')
    .then((response) => {
        let {id,name,children_categories} = response.data.data;
        let category = {id, name, children_categories};
        return {
          success: true,
          message: "Consultar categoria por id finalizada con exito",
          data: category,
          error: null,
          extra: {},
        };
    })
    .catch((error) => {
        return {
            success: false,
            message: "Consultar categoria presento un error en el API de Mercadolibre",
            data: null,
            error: error,
            extra: {},
        };
    });    
  } catch (error) {
    return {
      success: false,
      message: "Obtener categoria por id presento un error inesperado",
      data: null,
      error: error,
      extra: {},
    };
  }
};

module.exports = {
    getCategoryByID
};