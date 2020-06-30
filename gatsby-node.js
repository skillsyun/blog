/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateBabelConfig = ({ actions }, { style }) => {
    actions.setBabelPlugin({
      name: `babel-plugin-import`,
      options: {
        libraryName: "antd",
        libraryDirectory: "es",
        style: style === true ? style : "css"
      }
    });
  };