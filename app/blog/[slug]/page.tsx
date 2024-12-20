import { FullBlog } from '@/@types/interface';
import { fetchPost } from '@/lib/request/fetch';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import React from 'react';
import { PortableText } from '@portabletext/react';
const page = async ({ params }: { params: { slug: string } }) => {
  const data: FullBlog = await fetchPost(params.slug);

  return (
    <div className="container mx-auto mt-16 sm:mt-32">
      <h1>
        <span className="block text-base text-center animate-pulse text-pretty font-semibold tracking-tight ">
          Moein samani -- Blog
        </span>
        <span className=" block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl mt-4">
          {data.title}
        </span>
      </h1>
      <Image
        width={800}
        height={800}
        // load image with priperity///wihtpught all tge content is laodied an the image
        //Priority->>> image is laoded first and the the rest of the content
        priority
        alt="Picture"
        className="mt-12 rounded-2xl border shadow-2xl mx-auto w-full px-4"
        src={urlFor(data.titleImage?.asset?._ref).url()}
      />
      <div className="mt-16 prose-blue prose-xl max-sm:px-5 prose-headings:underline prose-li:text-purple-900">
        <PortableText value={data?.content} />
      </div>
    </div>
  );
};

export default page;
