export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
    auth: {
      sessions: {
        maxSessionLifespan: 2592000,
        maxRefreshTokenLifespan: 2592000,
      },
      options: { expiresIn: undefined },
    },
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  secrets: {
    encryptionKey: env("ENCRYPTION_KEY"),
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});
