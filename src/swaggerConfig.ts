import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'MyBrand',
            version: '1.0.0',
            description: 'MyBrand API',
            contact: {
                name: 'Ndahimana Bonheur',
            }
        },
        servers: [
            {
                url: 'https://my-brand-backend-server.onrender.com/api'
            },
            {
                url: 'http://localhost:3301/api/'
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'apiKey',
                    name: 'Authorization',
                    scheme: 'bearer',
                    in: 'header',
                    value: 'Bearer YOUR_TOKEN_HERE',
                    description: 'JWT Authorization header using the Bearer scheme. Example: "Bearer {token}"',
                },
            },
        },
    },
    apis: ['./src/routes/*.ts'],
}

const specs = swaggerJsdoc(options)
const swaggerSetup = (app: any) => {
    app.use('/api-docs',
        swaggerUi.serve,
        swaggerUi.setup(specs)
    )
}

export default swaggerSetup;