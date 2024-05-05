import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MyBrand Swagger DOC",
      version: "1.0.0",
      description: "MyBrand API Testing",
      contact: {
        name: "Ndahimana Bonheur",
        email: "ndahimana154@gmail.com",
        website: "https://ndahimana154.vercel.app",
      },
    },
    servers: [
      {
        url: "http://localhost:3301/api/",
      },
      {
        url: "https://my-brand-backend-server.onrender.com/api",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "apiKey",
          name: "Authorization",
          scheme: "bearer",
          in: "header",
          description: 'JWT Authorization header. Example: "{token}"',
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"],
};

const specs = swaggerJsdoc(options);
const swaggerSetup = (app: any) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};

export default swaggerSetup;
