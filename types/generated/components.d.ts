import type { Schema, Struct } from '@strapi/strapi';

export interface MediaBanner extends Struct.ComponentSchema {
  collectionName: 'components_media_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    ctaButtons: Schema.Attribute.Component<'ui.cta-button', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
    tag: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
        minLength: 2;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
        minLength: 3;
      }>;
  };
}

export interface NavigationMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navbar_menu_items';
  info: {
    displayName: 'MenuItem';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    url: Schema.Attribute.Relation<'oneToOne', 'api::url.url'>;
  };
}

export interface NavigationSubmenu extends Struct.ComponentSchema {
  collectionName: 'components_navbar_submenus';
  info: {
    displayName: 'SubMenu';
  };
  attributes: {
    children: Schema.Attribute.Component<'navigation.menu-item', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface UiCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_cta_buttons';
  info: {
    displayName: 'CTAButton';
  };
  attributes: {
    containsLink: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
        minLength: 2;
      }>;
    url: Schema.Attribute.Relation<'oneToOne', 'api::url.url'>;
    variant: Schema.Attribute.Enumeration<['Primary', 'Secondary', 'Ghost']> &
      Schema.Attribute.Required;
  };
}

export interface UiLinkButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_link_buttons';
  info: {
    displayName: 'LinkButton';
  };
  attributes: {
    url: Schema.Attribute.Relation<'oneToOne', 'api::url.url'>;
    variant: Schema.Attribute.Enumeration<['Primary', 'Secondary', 'Ghost']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Ghost'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'media.banner': MediaBanner;
      'navigation.menu-item': NavigationMenuItem;
      'navigation.submenu': NavigationSubmenu;
      'ui.cta-button': UiCtaButton;
      'ui.link-button': UiLinkButton;
    }
  }
}
