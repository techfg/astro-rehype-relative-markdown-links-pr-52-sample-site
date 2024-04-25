import { defineConfig } from 'astro/config';
import rehypeAstroRelativeMarkdownLinks from 'astro-rehype-relative-markdown-links';

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [
      [
        rehypeAstroRelativeMarkdownLinks,
        /* ---------------------------------------------------------------- */
        /*
          Use Defaults
        */
        //{},

        /* ---------------------------------------------------------------- */
        /*
          Override the name of the 'blog' collection

          Setting the blog collection name to 'my-blog'
          solves the issue for 'my-blog' but not for 'your-blog'
          in fact, links on 'your-blog' will point to 'my-blog' because
          there is only one value allowed for name on a collection currently
        */
        //{ collections: { blog: { name: 'my-blog' } } },

        /* ---------------------------------------------------------------- */
        /*
          Generate collection relative links instead of absolute links
        */
        { collectionBase: 'pathRelative' },

        /* ---------------------------------------------------------------- */
        /*
          Generate url relative links instead of absolute links
        */
        //{ collectionBase: 'urlRelative' },
      ],
    ],
  },
});
