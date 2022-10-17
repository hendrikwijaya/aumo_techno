/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
   swcMinify: true,
   webpack: (config, options) => {
      config.module.rules.push({
         test: /\.svg$/,
         use: ["@svgr/webpack"],
      });

      return config;
   },
   experimental: {
      esmExternals: "loose", // second add this experimental flag to the config
   },
};

const withTM = require("next-transpile-modules")(["react-d3-speedometer"]);

module.exports = withTM({ ...nextConfig });
