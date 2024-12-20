export interface BlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
  _id: string;
}

export interface FullBlog {
  currentSlug: string;
  title: string;
  content: any;
  titleImage: any;
}
