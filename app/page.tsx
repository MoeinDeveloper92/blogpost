import { BlogCard as BlogCardType } from '@/@types/interface';
import { fetchPosts } from '@/lib/request/fetch';
import React from 'react';
import Blog from '@/components/BlogCard';

const page = async () => {
  const data: BlogCardType[] = await fetchPosts();

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 max-sm:px-5">
        {data.map((post) => (
          <Blog post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default page;
