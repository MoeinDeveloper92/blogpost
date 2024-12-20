import { BlogCard, FullBlog } from '@/@types/interface';
import { client } from '../sanity';

export const fetchPosts = async (): Promise<BlogCard[]> => {
  const query = `*[_type=="blog"]|order(_createdAt desc){
    _id,
    title,
    smallDescription,
    "currentSlug":slug.current,
    titleImage
}`;
  const data = await client.fetch(query);

  return data;
};

export const fetchPost = async (slug: string): Promise<FullBlog> => {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage
      }[0]`;

  const data = await client.fetch(query);
  return data;
};
