// import chai, { expect } from "chai";
// import chaiHttp from "chai-http";
// import app from "../../..";

// chai.use(chaiHttp);
// const router = () => chai.request(app);
// let blogId = "6632acfafd2784f85a22d130"; // Assuming you have a blog ID for testing purposes

// describe("Comment Controller", () => {
//   describe("Post Blog Comment", () => {
//     it("Should post a new comment on a blog", async () => {
//       const res = await router()
//         .post(`/api/comment/${blogId}`)
//         .send({
//           firstname: "John",
//           lastname: "Doe",
//           email: "john@example.com",
//           comment: "This is a test comment",
//         });

//       expect(res).to.have.status(201);
//       expect(res.body).to.be.a("object");
//       expect(res.body).to.have.property("success", true);
//       expect(res.body).to.have.property("message", "Sending Comment succed");
//       expect(res.body).to.have.property("newComment");
//       expect(res.body.newComment).to.be.a("object");
//       expect(res.body.newComment).to.have.property("_id");
//     });
//   });

//   describe("Get Blog Comments", () => {
//     it("Should get all comments for a specific blog", async () => {
//       const res = await router().get(`/api/comment/${blogId}`);
//       expect(res).to.have.status(200);
//       expect(res.body).to.be.a("object");
//       expect(res.body).to.have.property("success", true);
//       expect(res.body).to.have.property("message", "Comments fetched");
//       expect(res.body).to.have.property("blogComments");
//       expect(res.body.blogComments).to.be.an("array");
//     });

//     it("Should return 'Error fetching comments' for invalid blog ID", async () => {
//       const res = await router().get(`/api/blog/comment/4534`);
//       expect(res).to.have.status(404); // Assuming it should return 500 for invalid blog ID
//     //   expect(res.body).to.have.property("success", false);
//     //   expect(res.body).to.have.property("message", "Error fetching comments");
//     });
//   });
// });
