import { errors } from "@strapi/utils";

// Ref: https://docs.strapi.io/cms/backend-customization/models#available-lifecycle-events
export default {
  async beforeDelete(event) {
    if (event?.model?.uid === "api::global.global") {
      throw new errors.ApplicationError(
        "This entry cannot be unpublished. It must always remain published."
      );
    }
  },
};
