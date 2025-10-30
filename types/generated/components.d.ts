import type { Schema, Struct } from '@strapi/strapi';

export interface NavbarMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navbar_menu_items';
  info: {
    displayName: 'MenuItem';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    url: Schema.Attribute.String;
  };
}

export interface NavbarSubmenu extends Struct.ComponentSchema {
  collectionName: 'components_navbar_submenus';
  info: {
    displayName: 'Submenu';
  };
  attributes: {
    children: Schema.Attribute.Component<'navbar.menu-item', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'navbar.menu-item': NavbarMenuItem;
      'navbar.submenu': NavbarSubmenu;
    }
  }
}
