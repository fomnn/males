export function useGetImageCoverLink(articleId: number, fileName: string) {
  const config = useRuntimeConfig();

  return `${config.public.imageStorageUrl}/images/articles/${articleId}/imageCover/${fileName}`;
}
