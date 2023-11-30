import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
      description: "The title of the article",
    },
    publishedAt: {
      type: "string",
      required: true,
      description: "The date the article was published",
    },
    isReady: {
      type: "boolean",
      required: true,
      description: "Whether the article is ready to be published",
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath,
    },
    url: {
      type: "string",
      resolve: (article) => {
        if (process.env.NODE_ENV === "development") {
          return `http://localhost:3000/articles/${article._raw.flattenedPath}`;
        }
        return `https://next-app-routing-blog-mdx-test.vercel.app/articles/${article._raw.flattenedPath}`;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "articles",
  documentTypes: [Article],
});
