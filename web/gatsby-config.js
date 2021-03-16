module.exports = {
  siteMetadata: {
    title: "hwarang-member",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "h630w8u0",
        dataset: "production",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
