export default function getTitleFromSlug(slug: string) {
  const words = slug.split("-");
  const title = words
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  return title;
}
