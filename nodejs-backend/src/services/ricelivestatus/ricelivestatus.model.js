
    module.exports = function (app) {
        const modelName = "ricelivestatus";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            boxId: { type:  String , comment: "box_id, p, false, true, true, true, true, true, true, , , , ," },
boxStatus: { type: Boolean, required: false, comment: "box_status, p_boolean, false, true, true, true, true, true, true, , , , ," },
estimatedPlates: { type: Number, max: 10000000, comment: "estimated_plates, p_number, false, true, true, true, true, true, true, , , , ," },
refillThreshold: { type: Number, max: 10000000, comment: "refill_threshold, p_number, false, true, true, true, true, true, true, , , , ," },
refillRequired: { type: Boolean, required: false, comment: "refill_required, p_boolean, false, true, true, true, true, true, true, , , , ," },
updatedAt: { type: Date, comment: "updated_at, p_date, false, true, true, true, true, true, true, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
          }, { timestamps: true });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };