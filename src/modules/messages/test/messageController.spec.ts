import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../../..";

chai.use(chaiHttp);
const router = () => chai.request(app);


describe("Message Test Cases", () => {

  let messageId = ""

  it("Should post a new message", async () => {
    const res = await router()
      .post("/api/message")
      .send({
        firstname: "John",
        lastname: "Doe",
        email: "john@example.com",
        message: "This is a test message",
      });

    expect(res).to.have.status(201);
    expect(res.body).to.be.a("object");
    expect(res.body).to.have.property("success", true);
    expect(res.body).to.have.property("message", "Message sent successfully");
    expect(res.body).to.have.property("newMessage");
    expect(res.body.newMessage).to.be.a("object");
    expect(res.body.newMessage).to.have.property("_id");
    messageId = res.body.newMessage._id;
  });


  it("Should get all brand messages", async () => {
    const res = await router().get("/api/message");
    expect(res).to.have.status(200);
    expect(res.body).to.be.a("object");
    expect(res.body).to.have.property("success", true);
    expect(res.body).to.have.property("message", "Messages fetched");
    expect(res.body).to.have.property("messagesData");
    expect(res.body.messagesData).to.be.an("array");
  });


  it("Should delete a brand message by ID", async () => {

    const res = await router().delete(`/api/message/${messageId}`);
    expect(res).to.have.status(200);
    expect(res.body).to.be.a("object");
    expect(res.body).to.have.property("success", true);
    expect(res.body).to.have.property("message", "Message deleted successfully");
  });

  it("Should return 'Message not found' for non-existing message ID", async () => {
    const nonExistingId = "662e106b276ab149dcd1f9f0";
    const res = await router().delete(`/api/message/${nonExistingId}`);
    expect(res).to.have.status(404);
    expect(res.body).to.have.property("success", false);
    expect(res.body).to.have.property("message", "Message not found");
  });

});
