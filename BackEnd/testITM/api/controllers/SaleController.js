/**
 * SaleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  sales: async (req, res) => {
    let id = req.params.id;
    if (id) {
      counts = {number: await Sale.count({ Client: id }),
                client: await Client.find({ Unique_Id: id })};

      return res.json(counts);
    } else {
      return res.status(404).json({
        message: 'Event not found'
      });
    }
  }

};

