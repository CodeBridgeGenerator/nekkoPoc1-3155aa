const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("tableLiveStatus service", async () => {
  let thisService;
  let tableLiveStatusCreated;
  let usersServiceResults;
  let users;

  

  beforeEach(async () => {
    thisService = await app.service("tableLiveStatus");

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
    assert.ok(thisService, "Registered the service (tableLiveStatus)");
  });

  describe("#create", () => {
    const options = {"tableCode":"new value","tableOccupied":true,"customerCount":23,"cleaningRequired":true,"attendanceRequired":true};

    beforeEach(async () => {
      tableLiveStatusCreated = await thisService.Model.create({...options, ...users});
    });

    it("should create a new tableLiveStatus", () => {
      assert.strictEqual(tableLiveStatusCreated.tableCode, options.tableCode);
assert.strictEqual(tableLiveStatusCreated.tableOccupied, options.tableOccupied);
assert.strictEqual(tableLiveStatusCreated.tableOccupied, options.tableOccupied);
assert.strictEqual(tableLiveStatusCreated.customerCount, options.customerCount);
assert.strictEqual(tableLiveStatusCreated.cleaningRequired, options.cleaningRequired);
assert.strictEqual(tableLiveStatusCreated.cleaningRequired, options.cleaningRequired);
assert.strictEqual(tableLiveStatusCreated.attendanceRequired, options.attendanceRequired);
assert.strictEqual(tableLiveStatusCreated.attendanceRequired, options.attendanceRequired);
    });
  });

  describe("#get", () => {
    it("should retrieve a tableLiveStatus by ID", async () => {
      const retrieved = await thisService.Model.findById(tableLiveStatusCreated._id);
      assert.strictEqual(retrieved._id.toString(), tableLiveStatusCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"tableCode":"updated value","tableOccupied":false,"customerCount":100,"cleaningRequired":false,"attendanceRequired":false};

    it("should update an existing tableLiveStatus ", async () => {
      const tableLiveStatusUpdated = await thisService.Model.findByIdAndUpdate(
        tableLiveStatusCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(tableLiveStatusUpdated.tableCode, options.tableCode);
assert.strictEqual(tableLiveStatusUpdated.tableOccupied, options.tableOccupied);
assert.strictEqual(tableLiveStatusUpdated.tableOccupied, options.tableOccupied);
assert.strictEqual(tableLiveStatusUpdated.customerCount, options.customerCount);
assert.strictEqual(tableLiveStatusUpdated.cleaningRequired, options.cleaningRequired);
assert.strictEqual(tableLiveStatusUpdated.cleaningRequired, options.cleaningRequired);
assert.strictEqual(tableLiveStatusUpdated.attendanceRequired, options.attendanceRequired);
assert.strictEqual(tableLiveStatusUpdated.attendanceRequired, options.attendanceRequired);
    });
  });

  describe("#delete", async () => {
    it("should delete a tableLiveStatus", async () => {
      await app
        .service("users")
        .Model.findByIdAndDelete(usersServiceResults._id);

      ;

      const tableLiveStatusDeleted = await thisService.Model.findByIdAndDelete(tableLiveStatusCreated._id);
      assert.strictEqual(tableLiveStatusDeleted._id.toString(), tableLiveStatusCreated._id.toString());
    });
  });
});