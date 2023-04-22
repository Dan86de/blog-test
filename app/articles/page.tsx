import { Article, allArticles } from "@/.contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";

const getPosts = () => {
  return allArticles.sort((a: Article, b: Article) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
  });
};

function ArticleCard(article: Article) {
  return (
    <div className="w-full py-4 ">
      <time dateTime={article.publishedAt} className="text-neutral-500">
        {format(parseISO(article.publishedAt), "LLLL d, yyyy")}
      </time>
      <h2 className="text-lg font-medium">
        <Link href={new URL(article.url)}>{article.title}</Link>
      </h2>
    </div>
  );
}

export default function ArticlesPage() {
  let articles = getPosts().filter((article: Article) => article.isReady);
  return <main>{articles.map((article: Article) => ArticleCard(article))}</main>;
}
