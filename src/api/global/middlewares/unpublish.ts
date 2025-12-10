import type { UID } from "@strapi/strapi"

const preventedEndpoints: UID.ContentType[] = [
  "api::global.global",
  "api::home.home",
  "api::about.about",
  "api::vision-and-mission.vision-and-mission",
  "api::placement-record.placement-record"
];

export default () => async (ctx, next) => {
  const { method, url } = ctx.request;

  const isPostRequest = method === "POST";
  const isUnblushingEndpoint = preventedEndpoints.some((e) =>
    url.startsWith(`/content-manager/single-types/${e}/actions/unpublish`)
  );

  if (isPostRequest && isUnblushingEndpoint) {
    ctx.throw(
      403,
      "This entry cannot be unpublished. It must always remain published."
    );
  }

  // Continue with the next middleware
  await next();
};
