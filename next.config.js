/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
    env: {
        CLIENT_ID: process.env.CLIENT_ID,
        SECRET_CLIENT: process.env.SECRET_CLIENT,
        REDIRECT_URL: process.env.REDIRECT_URL,
    },
}

module.exports = nextConfig
