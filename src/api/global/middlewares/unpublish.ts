const preventedEndpoints = ["api::global.global", "api::home.home"];

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
