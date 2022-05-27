# Application to create and buy technologies courses using micro-services

## 🔖 Frontend layout

<p align="center">
  <img alt="web frontpage" src=".github/frontpage.png" width="100%">
</p>

## 🚀 Technologies

- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [NestJS](https://nestjs.com/)
- [Next](https://nextjs.org/)
- [Auth0](https://auth0.com/)
- [Kafka](https://kafka.apache.org/)
- [Apollo Client - GraphQL](https://www.apollographql.com/docs/react/)

## GraphQL Queries

### GraphQL Playground documentation example on gateway

<p align="center">
  <img alt="/graphql" src=".github/queriesexample.png" width="100%">
</p>

## Services functionalities:

### Purshases service (purshases)

- [Admin] Register products.
- [Admin] List products.
- [Auth] list purchases.
- [Public] Buy a product.
- [Public] List products available to buy.

### Classroom service (classroom)

- [Admin] List enrollments.
- [Admin] List students.
- [Admin] List courses.
- [Admin] Enroll students.
- [Auth] List courses that student has access.
- [Auth] List course content.

### Web

```bash
# From the project root folder access the 'web' folder
$ cd web

# Install the dependencies
$ yarn install

# create .env.local file
AUTH0_SECRET = "use [openssl rand -hex32]"
AUTH0_CLIENT_ID = "Your client ID"
AUTH0_CLIENT_SECRET="Your client secret"
AUTH0_BASE_URL= 'Front end base URL'
AUTH0_AUDIENCE='auth0 API reference'
AUTH0_ISSUER_BASE_URL='https://your_auth0_domain'

# Start the application
$ yarn dev
```

### Classroom

```bash
# From the project root folder access the 'web' folder
$ cd classroom

# Install the dependencies
$ npm i

# create .env file
AUTH0_AUDIENCE='auth0 API reference'
AUTH0_DOMAIN='https://your_auth0_domain'
DATABASE_URL = "postgresql://your_db_config"

# Start the application
$ npm run start dev
```

### purshases

```bash
# From the project root folder access the 'web' folder
$ cd purshases

# Install the dependencies
$ npm i

# create .env file
AUTH0_AUDIENCE='auth0 API reference'
AUTH0_DOMAIN='https://your_auth0_domain'
DATABASE_URL = "postgresql://your_db_config"
KAFKA_BROKERS=localhost:29092 # Same port as in docker compose kafka configuration

# Start the application
$ npm run start dev
```

### gateway

### Make sure to have classroom and purshases running

```bash
# From the project root folder access the 'web' folder
$ cd gateway

# Install the dependencies
$ npm i

# Start the application
$ npm run start dev
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## References

[Rocketseat - Ignite lab](https://www.rocketseat.com.br/)
