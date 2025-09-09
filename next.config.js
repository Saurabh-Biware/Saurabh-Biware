/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export", // comment this line while development
    // trailingSlash: true, // comment this line while development
    swcMinify: true,
    images: {
        unoptimized: true,
    },
    // Redirects are not supported with static export
    // async redirects() {
    //     return [
    //         {
    //             source: "/blog",
    //             destination: "/",
    //             permanent: true,
    //         },
    //     ];
    // },
};

module.exports = nextConfig;
