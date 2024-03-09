/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents`,
        name: `contents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: ,
    //   options: {
    //     defaults: {
    //       formats: ["auto", "webp"],
    //       quality: 100,
    //       placeholder: "blurred",
    //     },
    //   },
    // },
    `gatsby-transformer-sharp`,
    {
      // Markdown Parser 역할을 하는 라이브러리입니다. 마크다운 문법을 HTML 형태로 변환해주어 띄워줄 수 있도록 해주는 핵심 라이브러리입니다.
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // 해당 라이브러리는 글 내에서 사용되는 여러 문장 부호들을 더 깔끔한 부호로 바꿔주는 기능을 제공하고 있습니다. 이를 통해 글의 가독성을 보다 더 높일 수 있습니다.
            resolve: "gatsby-remark-smartypants",
            options: {
              dashes: "oldschool",
            },
          },
          {
            // prismjs는 문법 하이라이팅 역할을 담당하는 라이브러리입니다. 소스코드를 실제 IDE에서 보는 것처럼 변환해주는 기능을 제공합니다.
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
            },
          },
          {
            // 마크다운 문서 내에서의 이미지 사용을 최적화해주는 라이브러리입니다. 다양한 반응형 이미지 생성, 동적 로딩 등 다양한 기능을 제공해줍니다.
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            // 마크다운 내에서 사용되는 이미지를 특정 디렉토리로 복사해주는 라이브러리입니다. 일반적으로 루트 디렉토리의 public 디렉토리에 이미지들이 복사됩니다.
            resolve: "gatsby-remark-copy-linked-files",
            options: {},
          },
          {
            // 이 라이브러리는 마크다운 내에서 사용되는 링크 태그의 target, rel 등의 속성을 지정해주는 기능을 제공해줍니다.
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
