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

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
      },
    },
    module: {
      rules: [
        {
          test: /\.scss/,
          loader: "import-glob-loader",
        },
      ],
    },
  });
};
