import type { StrapiApp } from "@strapi/strapi/admin";
// @ts-ignore
import logo from "./extensions/logo.png";

const adminName = process.env.STRAPI_ADMIN_NAME || "Strapi Admin";

const changeIfNeeded = () => {
  if (document.title.includes("Strapi Admin")) {
    document.title = document.title.replaceAll("Strapi Admin", adminName);
  } else if (document.title.includes("Strapi")) {
    document.title = document.title.replaceAll("Strapi", adminName);
  }
};

export default {
  config: {
    locales: ["en"],
    notifications: { releases: false },
    head: { favicon: logo },
    auth: { logo },
    menu: { logo },
    translations: {
      // Ref: https://github.com/strapi/strapi/blob/v5.29.0/packages/core/admin/admin/src/translations/en.json
      en: {
        // Auth/Login Page
        "Auth.form.welcome.title": `Welcome to ${adminName}`,
        "Auth.form.welcome.subtitle": `Log in to your ${adminName} account`,
        "Auth.form.register.subtitle": `Credentials are only used to authenticate in ${adminName}. All saved data will be stored in your database.`,

        // Left Menu & Navigation
        "app.components.LeftMenu.navbrand.title": adminName,
        "app.components.LeftMenu.navbrand.workplace": "Dashboard",

        // Settings - Users List View
        "Settings.permissions.users.listview.header.subtitle": `All the users who have access to the ${adminName} panel`,
      },
    },
  },

  bootstrap(app: StrapiApp) {
    // Set initial title
    changeIfNeeded();

    // Override helmet title changes
    const titleElement = document.querySelector("title");
    if (titleElement) {
      const observer = new MutationObserver(changeIfNeeded);
      observer.observe(titleElement, {
        childList: true,
        characterData: true,
        subtree: true,
      });
    }
  },
};
