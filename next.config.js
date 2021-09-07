const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {
  const isDev = phase == PHASE_DEVELOPMENT_SERVER;

  const isProd = phase == PHASE_PRODUCTION_BUILD && process.env.STAGING !== 'true';
  const isStaging = phase == PHASE_PRODUCTION_BUILD && process.env.STAGING === 'true';

  const env = {
    API_URI: (() => {
      if (isDev) return process.env.API_URI ?? "https://dev.twtcodejam.net/api/v1";
      if (isProd) {
        return "https://dev.twtcodejam.net/api/v1";
      }
      if (isStaging) {
        return "https://dev.twtcodejam.net/api/v1";
      }
      return "API_URL:not (isDev,isProd,isStaging)";
    })(),
    origin: (() => {
      if (isDev) return process.env.ORIGIN ?? "https://dev.twtcodejam.net";
      if (isProd) {
        return "https://dev.twtcodejam.net";
      }
      if (isStaging) {
        return "https://dev.twtcodejam.net";
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