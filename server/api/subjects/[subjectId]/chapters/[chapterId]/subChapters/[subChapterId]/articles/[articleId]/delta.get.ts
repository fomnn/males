import type { Delta } from "quill";

export default defineEventHandler(async (event) => {
  const articleId = getRouterParam(event, "articleId");

  const delta = await useStorage("r2").getItem<Delta>(`articles/${articleId}/delta`);

  return delta;
});
