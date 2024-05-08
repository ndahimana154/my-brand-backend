// import chai, { expect } from "chai";
// import chaiHttp from "chai-http";
// import app from "../../..";

// chai.use(chaiHttp);
// const router = () => chai.request(app);
// let userId = "";
// let token = "";

// describe("Users creation", () => {
//   it("Should Create user", async () => {
//     router()
//       .post("/api/user/new") // Added missing slash (/) at the beginning of the endpoint
//       .send({ username: "TestingUsername", password: "TestingPAS@123!" })
//       .end((error, response) => {
//         expect(response.statusCode).to.equal(201); // Changed to 201 for successful creation
//         expect(response.body).to.be.a("object");
//         expect(response.body).to.have.property("user");
//         expect(response.body.user).to.have.property("username");
//         expect(response.body.user).to.not.have.property("password"); // Removed checking password here for security reasons
//         userId = response.body.user._id; // Corrected to response.body.user._id
//         token = response.body.token.token;
//         expect(response.body).to.have.property("message", "User created successfully"); // Changed message assertion
//         // Additional test for token presence
//         expect(response.body).to.have.nested.property("token.token");
//       });
//   });
// });

// // Additional tests covering userController functionalities
// describe("User Authentication", () => {
//   it("Should log in existing user", async () => {
//     router()
//       .post("/api/user/login")
//       .send({ username: "TestingUsername", password: "TestingPAS@123!" })
//       .end((error, response) => {
//         expect(response.statusCode).to.equal(200);
//         expect(response.body).to.be.a("object");
//         expect(response.body).to.have.property("success", true);
//         expect(response.body).to.have.property("message", "Login successful");
//         expect(response.body).to.have.property("token");
//         expect(response.body).to.have.property("username", "TestingUsername");
//       });
//   });

//   it("Should reject login with invalid password", async () => {
//     router()
//       .post("/api/user/login")
//       .send({ username: "TestingUsername", password: "IncorrectPassword" })
//       .end((error, response) => {
//         expect(response.statusCode).to.equal(401);
//         expect(response.body).to.have.property("success", false);
//         expect(response.body).to.have.property("message", "Invalid password");
//       });
//   });

//   it("Should reject login with non-existing user", async () => {
//     router()
//       .post("/api/user/login")
//       .send({ username: "NonExistingUser", password: "SomePassword" })
//       .end((error, response) => {
//         expect(response.statusCode).to.equal(404);
//         expect(response.body).to.have.property("success", false);
//         expect(response.body).to.have.property("message", "User not found");
//       });
//   });
// });
