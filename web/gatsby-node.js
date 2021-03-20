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
          category {
            slug {
              current
            }
          }
        }
      }
      allSanityVideo {
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

  result.data.allSanityVideo.nodes.forEach((video) => {
    createPage({
      path: `video/${video.slug.current}`,
      component: path.resolve(`./src/templates/video.tsx`),
      context: {
        slug: video.slug.current,
      },
    });
  });

  const categories = result.data.allSanityPage.nodes.map(
    (page) => page.category?.slug?.current
  );

  const distinctCategories = [...new Set(categories)];

  distinctCategories.forEach((category) => {
    if (category === undefined) {
      console.warn("Undefined category");
      return;
    }
    createPage({
      path: `kategori/${category}`,
      component: path.resolve(`./src/templates/category.tsx`),
      context: {
        slug: category,
      },
    });
  });
};
