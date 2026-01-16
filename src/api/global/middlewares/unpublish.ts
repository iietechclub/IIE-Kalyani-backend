import type { UID } from "@strapi/strapi"

const preventedEndpoints: UID.ContentType[] = [
  "api::global.global",
  "api::home.home",
  "api::about.about",
  "api::vision-and-mission.vision-and-mission",

  "api::admission-session.admission-session",
  "api::courses-offered.courses-offered",
  
  "api::academic-calendar.academic-calendar",
  "api::library.library",
  "api::project-bank.project-bank",
  "api::achievements.achievements",
  "api::our-faculty.our-faculty",
  
  "api::placement-record.placement-record",
  "api::success-stories-page.success-stories-page",
  "api::alumni-relation.alumni-relation",

  "api::technical-events-and-seminars.technical-events-and-seminars",
  "api::cultural-events.cultural-events",
  "api::clubs-and-societies.clubs-and-societies",
  "api::sports.sports",
  "api::gallery.gallery",
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
