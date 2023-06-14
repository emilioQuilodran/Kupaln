/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
    env: {
        APP_ID: process.env.APP_ID,
        APP_SECRET: process.env.APP_SECRET,
        VERIFY_TOKEN: process.env.VERIFY_TOKEN,
        NUMBER: process.env.NUMBER
    },
}

module.exports = nextConfig
