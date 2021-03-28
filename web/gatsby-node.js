const path = require(`path`);
const axios = require("axios");
const { createRemoteFileNode } = require("gatsby-source-filesystem");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type SanityVideo implements Node {
      thumbnail: File @link(from: "thumbnail___NODE")
    }
  `);
};

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  const createOptions = {
    node,
    createNode,
    store,
    cache,
    createNodeId,
  };
  if (node.internal.type === "SanityVideo" && !!node.videoId) {
    const response = await axios.get(
      `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${node.videoId}`
    );

    await createImageNode(
      response.data.thumbnail_url.replace(/_.*\./, "."),
      createOptions
    );
  }
};

const createImageNode = async (url, options) => {
  const { node, createNode, store, cache, createNodeId } = options;

  try {
    let fileNode = await createRemoteFileNode({
      url,
      name: node.name,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
      store,
    });

    if (fileNode) {
      node.thumbnail___NODE = fileNode.id;
    }
  } catch (e) {
    console.info("Vimeo thumbnail, ignoring image:", e);
  }
};

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
