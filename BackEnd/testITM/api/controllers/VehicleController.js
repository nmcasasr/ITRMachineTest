/**
 * VehicleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    date: async (req, res) => {
        let id = req.params.id;
        if (id) {
         let  sales = await Sale.find({ Date: id });
         let  nSales = await Sale.count({ Date: id });
         let vehicles = [];
         for(var i = 0; i < nSales; i++)
         {
        let vih =  await Vehicle.find({ UniqueId: sales[i].Vehicle });
        vehicles.push(vih);
         }
          return res.json(vehicles);
        } else {
          return res.status(404).json({
            message: 'Event not found'
          });
        }
      }

};

