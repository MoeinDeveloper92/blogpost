import { BlogCard } from '@/@types/interface';
import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { urlFor } from '@/lib/sanity';
import { Button } from './ui/button';
import Link from 'next/link';

const Blog = ({ post }: { post: BlogCard }) => {
  return (
    <Card className="flex flex-col">
      {post.titleImage?.asset?._ref && (
        <Image
          width={300}
          height={300}
          priority
          src={urlFor(post.titleImage?.asset?._ref).url()}
          alt="Image"
          className="rounded-t-lg object-cover w-full flex-1"
        />
      )}
      <CardContent className="mt-5">
        <h3 className="text-lg line-clamp-1 font-bold">{post.title}</h3>
        <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
          {post.smallDescription}
        </p>
        <Button asChild className="w-full mt-7">
          <Link href={`blog/${post.currentSlug}`}>Visit This Blog</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Blog;
