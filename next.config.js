/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL,
    },
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['i.dummyjson.com'],
    },
    i18n: {
        locales: ['es', 'en'],
        defaultLocale: 'es',
        localeDetection: false,
    }
}

module.exports = nextConfig
