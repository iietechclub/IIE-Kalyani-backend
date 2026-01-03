export default ({ env }) => [
  "strapi::logger",
  "strapi::errors",
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'frame-ancestors': [
            "'self'",
            env('FRONTEND_URL'),
          ],
        },
      },
    },
  },
  "strapi::cors",
  // 'strapi::poweredBy',

  // Custom middleware to handle unpublish logic
  "api::global.unpublish",

  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
