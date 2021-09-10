import request from "supertest";

import app from "../../app";
import Lead from "../../db/models/lead";
import User from "../../db/models/user";

describe("Controller: users", () => {
  beforeEach(async () => {
    await User.sync();
    await User.create({
      firstName: "before",
      lastName: "test-lastname",
      email: "test@dev.null",
    });
  });

  afterEach(async () => {
    await User.drop();
  });

  it("updates and returns user", async () => {
    const { body } = await request(app)
      .patch("/users/1")
      .send({ firstName: "after" });

    const userInDb = await User.findByPk(1);

    expect(userInDb!.firstName).toBe("after");

    expect(body!.firstName).toBe("after");
  });

  it("creates lead", async () => {
    await Lead.sync();
    const { body } = await request(app).post("/users/1/leads").send({
      name: "Albacross",
      domain: "albacross.com",
      lastVisit: "2020-02-11 21:37:00",
    });
    expect(body!.name).toBe("Albacross");
  });

  it("finds user", async () => {
    await Lead.sync();
    await request(app).post("/users/1/leads").send({
      name: "Albacross",
      domain: "albacross.com",
      lastVisit: "2020-02-11 21:37:00",
    });
    const { body } = await request(app).get("/users/find/BEf").send();
    expect(body!.firstName).toBe("before");
    expect(body!.Leads[0]?.name).toBe("Albacross");
  });
});
