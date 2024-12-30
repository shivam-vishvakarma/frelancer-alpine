export const getTitleFromSlug = function (slug: string) {
  if (!slug) return "";
  const words = slug.split("-");
  const title = words
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  return title;
};
