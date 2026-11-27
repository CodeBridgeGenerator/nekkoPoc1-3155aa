
    module.exports = function (app) {
        const modelName = "table_live_status";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            tableCode: { type:  String , required: true, maxLength: 150, index: true, trim: true, comment: "Table Code, p, false, true, true, true, true, true, true, , , , ," },
tableOccupied: { type: Boolean, required: false, comment: "Table Occupied, p_boolean, false, true, true, true, true, true, true, , , , ," },
customerCount: { type: Number, max: 10000000, comment: "Customer Count, p_number, false, true, true, true, true, true, true, , , , ," },
cleaningRequired: { type: Boolean, required: false, comment: "Cleaning Required, p_boolean, false, true, true, true, true, true, true, , , , ," },
attendanceRequired: { type: Boolean, required: false, comment: "Attendance Required, p_boolean, false, true, true, true, true, true, true, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
          }, { timestamps: true });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };