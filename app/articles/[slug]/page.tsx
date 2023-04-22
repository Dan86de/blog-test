import { Article, allArticles } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

export async function generateStaticParams() {
  return allArticles.map((post: Article) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const article = allArticles.find((article: Article) => article.slug === params.slug);
  if (!article) {
    notFound();
  }

  return (
    <section>
      <Mdx code={article.body.code} />
    </section>
  );
}

function H1({ children }: { children?: React.ReactNode }) {
  return <h1 className="text-4xl font-semibold text-inherit">{children}</h1>;
}

function H2({ children }: { children?: React.ReactNode }) {
  return <h2 className="text-3xl font-semibold text-inherit">{children}</h2>;
}

function H3({ children }: { children?: React.ReactNode }) {
  return <h3 className="text-2xl font-semibold text-inherit">{children}</h3>;
}

function H4({ children }: { children?: React.ReactNode }) {
  return <h4 className="text-xl font-semibold text-inherit">{children}</h4>;
}

function P({ children }: { children?: React.ReactNode }) {
  return <p className="text-red-500 font-regular text-xl text-inherit">{children}</p>;
}

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
};

interface MdxProps {
  code: string;
}

function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="md:prose-md prose prose-zinc mx-auto min-h-[calc(100vh-120px)] dark:prose-invert lg:prose-lg xl:prose-xl  2xl:prose-2xl ">
      <Component components={components} />
    </article>
  );
}
