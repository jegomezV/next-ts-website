import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    experimental: {
        mdxRs: true,
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            { protocol: 'https', hostname: 'assets.vercel.com', port: "", pathname: '/image/upload/**' },
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|swf|ogv)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/videos/',
                    outputPath: 'static/videos/',
                    name: '[name].[ext]',
                    esModule: false,
                },
            },
        });

        return config;
    },
};

export default withContentlayer(nextConfig);