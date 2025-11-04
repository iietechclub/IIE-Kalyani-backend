import type { Schema, Struct } from '@strapi/strapi';

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
    url: Schema.Attribute.String;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'navigation.menu-item': NavigationMenuItem;
      'navigation.submenu': NavigationSubmenu;
    }
  }
}
