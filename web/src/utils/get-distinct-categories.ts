export interface Category {
  title: string;
  slug: string;
}

interface Categorizable {
  category: SanityCategory;
}

interface SanityCategory {
  title: string;
  slug: SanitySlug;
}

interface SanitySlug {
  current: string;
}

export const getDistinctCategories = (
  categorizable: Categorizable[]
): Category[] => {
  const categories = categorizable.map((x) => ({
    title: x.category.title,
    slug: x.category.slug.current,
  }));
  return [...new Map(categories.map((item) => [item["slug"], item])).values()];
};
