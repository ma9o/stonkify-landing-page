exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (
    page.path.match(/terms/) ||
    page.path.match(/404/) ||
    page.path.match(/privacy/)
  ) {
    page.context.disableLayout = true;
    createPage(page);
  }
};
