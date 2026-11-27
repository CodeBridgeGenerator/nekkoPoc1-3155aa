const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("cashierLiveStatus service", async () => {
  let thisService;
  let cashierLiveStatusCreated;
  let usersServiceResults;
  let users;

  

  beforeEach(async () => {
    thisService = await app.service("cashierLiveStatus");

    // Create users here
    usersServiceResults = await app.service("users").Model.create(usersRefData);
    users = {
      createdBy: usersServiceResults[0]._id,
      updatedBy: usersServiceResults[0]._id,
    };
  });

  after(async () => {
    if (usersServiceResults) {
      await Promise.all(
        usersServiceResults.map((i) =>
          app.service("users").Model.findByIdAndDelete(i._id)
        )
      );
    }
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (cashierLiveStatus)");
  });

  describe("#create", () => {
    const options = {"customerPresent":true,"cashierPresent":true,"customerCount":23,"unattendedSeconds":23,"alertActive":true};

    beforeEach(async () => {
      cashierLiveStatusCreated = await thisService.Model.create({...options, ...users});
    });

    it("should create a new cashierLiveStatus", () => {
      assert.strictEqual(cashierLiveStatusCreated.customerPresent, options.customerPresent);
assert.strictEqual(cashierLiveStatusCreated.customerPresent, options.customerPresent);
assert.strictEqual(cashierLiveStatusCreated.cashierPresent, options.cashierPresent);
assert.strictEqual(cashierLiveStatusCreated.cashierPresent, options.cashierPresent);
assert.strictEqual(cashierLiveStatusCreated.customerCount, options.customerCount);
assert.strictEqual(cashierLiveStatusCreated.unattendedSeconds, options.unattendedSeconds);
assert.strictEqual(cashierLiveStatusCreated.alertActive, options.alertActive);
assert.strictEqual(cashierLiveStatusCreated.alertActive, options.alertActive);
    });
  });

  describe("#get", () => {
    it("should retrieve a cashierLiveStatus by ID", async () => {
      const retrieved = await thisService.Model.findById(cashierLiveStatusCreated._id);
      assert.strictEqual(retrieved._id.toString(), cashierLiveStatusCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"customerPresent":false,"cashierPresent":false,"customerCount":100,"unattendedSeconds":100,"alertActive":false};

    it("should update an existing cashierLiveStatus ", async () => {
      const cashierLiveStatusUpdated = await thisService.Model.findByIdAndUpdate(
        cashierLiveStatusCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(cashierLiveStatusUpdated.customerPresent, options.customerPresent);
assert.strictEqual(cashierLiveStatusUpdated.customerPresent, options.customerPresent);
assert.strictEqual(cashierLiveStatusUpdated.cashierPresent, options.cashierPresent);
assert.strictEqual(cashierLiveStatusUpdated.cashierPresent, options.cashierPresent);
assert.strictEqual(cashierLiveStatusUpdated.customerCount, options.customerCount);
assert.strictEqual(cashierLiveStatusUpdated.unattendedSeconds, options.unattendedSeconds);
assert.strictEqual(cashierLiveStatusUpdated.alertActive, options.alertActive);
assert.strictEqual(cashierLiveStatusUpdated.alertActive, options.alertActive);
    });
  });

  describe("#delete", async () => {
    it("should delete a cashierLiveStatus", async () => {
      await app
        .service("users")
        .Model.findByIdAndDelete(usersServiceResults._id);

      ;

      const cashierLiveStatusDeleted = await thisService.Model.findByIdAndDelete(cashierLiveStatusCreated._id);
      assert.strictEqual(cashierLiveStatusDeleted._id.toString(), cashierLiveStatusCreated._id.toString());
    });
  });
});