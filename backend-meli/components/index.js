/**
 * @Description   : En este archivo se gestionan las rutas de entrada de los apis expuestos por el backend
 * @Author        : Javier Duque
 * @Fecha         : 18/02/2024
 * @Observaciones :
 */

const itemsRouter = require("./items/items.routes");
const categoryRouter = require("./category/category.routes");

const registerApiRoutes = (app) => {
  app.use("/api/items", itemsRouter);
  app.use("/api/category", categoryRouter);
};
  
module.exports = registerApiRoutes;