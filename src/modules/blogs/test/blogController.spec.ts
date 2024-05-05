import mongoose from "mongoose";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../../..";
import path from "path";
import fs from "fs";

// import testImage from "../../../data/testimg.jpg";

const imagePath = path.join(__dirname, "../../../data/testimg.jpg");
const imageBuffer = fs.readFileSync(imagePath);

chai.use(chaiHttp);
const router = () => chai.request(app);
let blogId = "6632aee7c720c65be9eefaa9";
const oneBlogById = "6632aee7c720c65be9eefaa9";
const invalidId = "1232";
const nonExId = "6632af882745286806486199";

describe("Blog Controller", () => {
  describe("Post Blog", () => {
    it("Should post a new blog", async () => {
      const res = await router()
        .post("/api/blog")
        .set(
          "Authorization",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjM2OTVkZmQ0NmVhOTkzOWJhNmI3N2IiLCJpYXQiOjE3MTQ5MjA5ODksImV4cCI6MTcxNDkyNDU4OX0.blJNLWzYTz7iDYfv-98fMPaG6r1VlszpXKJDD37wfq8"
        )
        .field("title", "Test Blog")
        .field("summary", "This is a test blog")
        .field(
          "article",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        )
        .attach(
          "cover",
          imageBuffer,
          "testimg.jpg"
        );
      expect(res).to.have.status(201);
      expect(res.body).to.be.a("object");
      expect(res.body).to.have.property("success", true);
      expect(res.body).to.have.property(
        "message",
        "Project is saved successfully."
      );
      expect(res.body).to.have.property("blogData");
      expect(res.body.blogData).to.have.property("_id");
      blogId = res.body.blogData._id; // Store the blog ID for later tests
    });
  });

  describe("Get Blogs", () => {
    it("Should get all blogs", async () => {
      const res = await router().get("/api/blog");
      expect(res).to.have.status(200);
      expect(res.body).to.be.a("object");
      expect(res.body).to.have.property("success", true);
      expect(res.body).to.have.property("data");
      expect(res.body.data).to.be.an("array");
    });
  });

  describe("Get Blog by ID", () => {
    it("Should get a single blog by ID", async () => {
      const res = await router().get(`/api/blog/${oneBlogById}`);
      expect(res).to.have.status(200);
      expect(res.body).to.be.a("object");
      expect(res.body).to.have.property("success", true);
      expect(res.body).to.have.property("data");
      expect(res.body.data).to.be.a("object");
    });

    it("Should return 'Invalid Blog ID' for invalid ID", async () => {
      const res = await router().get(`/api/blog/${invalidId}`);
      expect(res).to.have.status(404);
      expect(res.body).to.have.property("success", false);
      expect(res.body).to.have.property("message", "Invalid Blog ID");
    });

    it("Should return 'Blog not found' for non-existing ID", async () => {
      const res = await router().get(`/api/blog/${nonExId}`);
      expect(res).to.have.status(404);
      expect(res.body).to.have.property("success", false);
      expect(res.body).to.have.property("message", "Blog not found");
    });
  });

  describe("Delete Blog", () => {
    it("Should delete a blog by ID", async () => {
      const res = await router().delete(`/api/blog/${blogId}`);
      expect(res).to.have.status(200);
      expect(res.body).to.be.a("object");
      expect(res.body).to.have.property("success", true);
    });

    it("Should return 'Invalid Blog ID' for invalid ID", async () => {
      const res = await router().delete(`/api/blog/662e106b276ab149dcd1f9f1`);
      expect(res).to.have.status(404);
      expect(res.body).to.have.property("success", false);
      expect(res.body).to.have.property("message", "Invalid Blog ID");
    });

    it("Should return 'Blog not found' for non-existing ID", async () => {
      const res = await router().delete(`/api/blog/${nonExId}`);
      expect(res).to.have.status(404);
      expect(res.body).to.have.property("success", false);
      expect(res.body).to.have.property("message", "Blog not found");
    });
  });

  // describe("Update Blog", () => {
  //   it("Should update a blog by ID", async () => {
  //     const res = await router()
  //       .put(`/api/blog/${blogId}`)
  //       .send({ title: "Updated Test Blog" });
  //     expect(res).to.have.status(200);
  //     expect(res.body).to.be.a("object");
  //     expect(res.body).to.have.property("success", true);
  //     expect(res.body).to.have.property("data");
  //     expect(res.body.data).to.be.a("object");
  //     expect(res.body.data).to.have.property("title", "Updated Test Blog");
  //   });

  //   it("Should return 'Invalid Blog ID' for invalid ID", async () => {
  //     const res = await router().put(`/api/blog/invalidID`);
  //     expect(res).to.have.status(404);
  //     expect(res.body).to.have.property("success", false);
  //     expect(res.body).to.have.property("message", "Invalid Blog ID");
  //   });

  //   it("Should return 'Blog not found' for non-existing ID", async () => {
  //     const res = await router().put(`/api/blog/${invalidId}`);
  //     expect(res).to.have.status(404);
  //     expect(res.body).to.have.property("success", false);
  //     expect(res.body).to.have.property("message", "Blog not found");
  //   });
  // });
});
