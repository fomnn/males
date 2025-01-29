export default defineEventHandler(async (event) => {
  const articleId = getRouterParam(event, "articleId");

  const html = await useStorage("r2").getItem<string>(`articles/${articleId}/html`);

  return html;
});
