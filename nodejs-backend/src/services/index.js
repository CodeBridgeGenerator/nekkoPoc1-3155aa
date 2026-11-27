const tableLiveStatus = require("./tableLiveStatus/tableLiveStatus.service.js");
const cashierLiveStatus = require("./cashierLiveStatus/cashierLiveStatus.service.js");
const ricelivestatus = require("./ricelivestatus/ricelivestatus.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(tableLiveStatus);
  app.configure(cashierLiveStatus);
  app.configure(ricelivestatus);
    // ~cb-add-configure-service-name~
};
