const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allSanityPage {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  result.data.allSanityPage.nodes.forEach((page) => {
    createPage({
      path: page.slug.current,
      component: path.resolve(`./src/templates/page.tsx`),
      context: {
        slug: page.slug.current,
      },
    });
  });
};
