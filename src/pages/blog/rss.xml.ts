import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  if (!context.site) {
    throw new TypeError("The 'site' property is undefined in the API context.");
  }

  const blog = await getCollection("blog");

  return rss({
    title: "Alexander Gabriel Ho",
    description: "Personal blog",
    site: context.site,
    items: blog
      .filter((post) => !post.data.draft)
      .map((post) => ({
        draft: post.data.draft,
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        customData: post.data.customData,
        // Compute RSS link from post `slug`
        // This example assumes all posts are rendered as `/blog/[slug]` routes
        link: `/blog/${post.slug}/`,
      })),
    stylesheet: "/pretty-feed-v3.xsl",
  });
}
