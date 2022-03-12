module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    `gatsby-plugin-postcss`, `gatsby-plugin-fontawesome-css`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/NanoGift.png',
      }
    }
  ],
};
