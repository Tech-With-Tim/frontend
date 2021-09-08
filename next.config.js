const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {
  const isDev = phase == PHASE_DEVELOPMENT_SERVER;

  const isProd = phase == PHASE_PRODUCTION_BUILD && process.env.STAGING !== 'true';
  const isStaging = phase == PHASE_PRODUCTION_BUILD && process.env.STAGING === 'true';

  const env = {
    SERVER_API_URI: (() => {
      if (isDev) return process.env.SERVER_API_URI ?? "https://dev.twtcodejam.net/api/v1"; // change later...
      if (isProd) {
        return "https://dev.twtcodejam.net/api/v1"; // change later...
      }
      if (isStaging) {
        return "https://dev.twtcodejam.net/api/v1"; // change later...
      }
      return "API_URL:not (isDev,isProd,isStaging)";
    })(),
    API_URI: (() => {
      if (isDev) return process.env.API_URI ?? "https://dev.twtcodejam.net/api/v1"; // change later...
      if (isProd) {
        return "https://dev.twtcodejam.net/api/v1"; // change later...
      }
      if (isStaging) {
        return "https://dev.twtcodejam.net/api/v1"; // change later...
      }
      return "API_URL:not (isDev,isProd,isStaging)";
    })(),
    origin: (() => {
      if (isDev) return process.env.ORIGIN ?? "https://dev.twtcodejam.net"; // change later...
      if (isProd) {
        return "https://dev.twtcodejam.net"; // change later...
      }
      if (isStaging) {
        return "https://dev.twtcodejam.net"; // change later...
      }
    })()
  }

  return {
    images: {
      domains: ["cdn.discordapp.com"]
    },
    env,
  }
}