require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Body Shop Products App",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.oglv9.mongodb.net/`,
        dbName: `bodyshop`,
        collection: [`products`],
        auth: { user: process.env.DB_USER, password: process.env.DB_PASSWORD },
      },
    },
  ],
};
