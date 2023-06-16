/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `My first Gatsby App!`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`, //The name option in the configuration object gets set to the sourceInstanceName field for each file. This comes in handy when you want to source files from multiple folders. By giving each folder a different name option, you can build GraphQL queries that filter down to only a particular folder.
        path: `${__dirname}/blog/`, //this is a Node.Js variable that stores the absolute path for the directory that contains the file currently being run
      },
    },
    "gatsby-plugin-mdx",
  ],
};
