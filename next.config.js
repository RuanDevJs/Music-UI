/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { isServer }) => {
    // Adicione a configuração do loader para arquivos MP4
    config.module.rules.push({
      test: /\.(mp4|svg)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
