const systemconfig = require("../../config/system")
const dashboardRoutes = require("./dashboard.route")
const productRoutes = require("./product.route")

module.exports = (app) => {
    const PATH_ADMIN = systemconfig.prefixAdmin;
    app.use(PATH_ADMIN+'/dashboard', dashboardRoutes);
    app.use(PATH_ADMIN+'/products', productRoutes);
}
