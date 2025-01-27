export default defineEventHandler(async (event) => {
  const body = await readFormData(event);

  const image = body.get("image") as File;

  await useStorage("r2").setItemRaw("tes", image);

});
