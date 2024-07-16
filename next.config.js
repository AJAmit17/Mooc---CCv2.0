const withNextIntl = require("next-intl/plugin")();
// /** @type {import('next').NextConfig} */

module.exports = withNextIntl({
  images: {
    domains: ["utfs.io"],
  },
});
