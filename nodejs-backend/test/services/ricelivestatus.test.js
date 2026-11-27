const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("ricelivestatus service", async () => {
  let thisService;
  let ricelivestatusCreated;
  let usersServiceResults;
  let users;

  

  beforeEach(async () => {
    thisService = await app.service("ricelivestatus");

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
    assert.ok(thisService, "Registered the service (ricelivestatus)");
  });

  describe("#create", () => {
    const options = {"boxId":"new value","boxStatus":true,"estimatedPlates":23,"refillThreshold":23,"refillRequired":true,"updatedAt":"2026-11-27T11:11:15.138Z"};

    beforeEach(async () => {
      ricelivestatusCreated = await thisService.Model.create({...options, ...users});
    });

    it("should create a new ricelivestatus", () => {
      assert.strictEqual(ricelivestatusCreated.boxId, options.boxId);
assert.strictEqual(ricelivestatusCreated.boxStatus, options.boxStatus);
assert.strictEqual(ricelivestatusCreated.boxStatus, options.boxStatus);
assert.strictEqual(ricelivestatusCreated.estimatedPlates, options.estimatedPlates);
assert.strictEqual(ricelivestatusCreated.refillThreshold, options.refillThreshold);
assert.strictEqual(ricelivestatusCreated.refillRequired, options.refillRequired);
assert.strictEqual(ricelivestatusCreated.refillRequired, options.refillRequired);
assert.strictEqual(ricelivestatusCreated.updatedAt.toISOString(), options.updatedAt);
    });
  });

  describe("#get", () => {
    it("should retrieve a ricelivestatus by ID", async () => {
      const retrieved = await thisService.Model.findById(ricelivestatusCreated._id);
      assert.strictEqual(retrieved._id.toString(), ricelivestatusCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"boxId":"updated value","boxStatus":false,"estimatedPlates":100,"refillThreshold":100,"refillRequired":false,"updatedAt":"2026-11-27T11:11:15.138Z"};

    it("should update an existing ricelivestatus ", async () => {
      const ricelivestatusUpdated = await thisService.Model.findByIdAndUpdate(
        ricelivestatusCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(ricelivestatusUpdated.boxId, options.boxId);
assert.strictEqual(ricelivestatusUpdated.boxStatus, options.boxStatus);
assert.strictEqual(ricelivestatusUpdated.boxStatus, options.boxStatus);
assert.strictEqual(ricelivestatusUpdated.estimatedPlates, options.estimatedPlates);
assert.strictEqual(ricelivestatusUpdated.refillThreshold, options.refillThreshold);
assert.strictEqual(ricelivestatusUpdated.refillRequired, options.refillRequired);
assert.strictEqual(ricelivestatusUpdated.refillRequired, options.refillRequired);
assert.strictEqual(ricelivestatusUpdated.updatedAt.toISOString(), options.updatedAt);
    });
  });

  describe("#delete", async () => {
    it("should delete a ricelivestatus", async () => {
      await app
        .service("users")
        .Model.findByIdAndDelete(usersServiceResults._id);

      ;

      const ricelivestatusDeleted = await thisService.Model.findByIdAndDelete(ricelivestatusCreated._id);
      assert.strictEqual(ricelivestatusDeleted._id.toString(), ricelivestatusCreated._id.toString());
    });
  });
});