import { FullBlog } from '@/@types/interface';
import { fetchPost } from '@/lib/request/fetch';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

export type PageProps = {
  params: { slug: string };
};

const page = async ({ params }: PageProps) => {
  const data: FullBlog = await fetchPost(params.slug);

  return (
    <div className="container mx-auto mt-16 sm:mt-32">
      <h1>
        <span className="block text-base text-center animate-pulse text-pretty font-semibold tracking-tight ">
          Moein Samani -- Blog
        </span>
        <span className="block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl mt-4">
          {data.title}
        </span>
      </h1>
      <Image
        width={800}
        height={800}
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
