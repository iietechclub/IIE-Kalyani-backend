export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
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
