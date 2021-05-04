module.exports = {
  siteMetadata: {
    title: "renjiroazhar",
    charset: "utf-8",
    description: "Portofolio site of Renji",
    author: "Renji",
    locale: "en",
    formspreeEndpoint: "https://formspree.io/f/mleadyda",
    favicon: "static/my-logo-4.png",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "dark-pink",
        formspreeEndpoint: "https://formspree.io/f/mleadyda",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "renjiroazhar",
        short_name: "renjiroazhar",
        start_url: "/",
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "static/my-logo-4.png", // This path is relative to the root of the site.
        include_favicon: true,
        cache_busting_mode: 'none',
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
  ],
}
