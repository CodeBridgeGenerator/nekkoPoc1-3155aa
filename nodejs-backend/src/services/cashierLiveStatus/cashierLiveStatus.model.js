
    module.exports = function (app) {
        const modelName = "cashier_live_status";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            customerPresent: { type: Boolean, required: false, comment: "Customer Present, p_boolean, false, true, true, true, true, true, true, , , , ," },
cashierPresent: { type: Boolean, required: false, comment: "Cashier Present, p_boolean, false, true, true, true, true, true, true, , , , ," },
customerCount: { type: Number, max: 10000000, comment: "Customer Count, p_number, false, true, true, true, true, true, true, , , , ," },
unattendedSeconds: { type: Number, max: 10000000, comment: "Unattended Seconds, p_number, false, true, true, true, true, true, true, , , , ," },
alertActive: { type: Boolean, required: false, comment: "Alert Active, p_boolean, false, true, true, true, true, true, true, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
          }, { timestamps: true });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };