/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import { UiAvatar as UiAvatar } from './components/ui-avatar/ui-avatar';

interface HTMLUiAvatarElement extends UiAvatar, HTMLElement {
}
declare var HTMLUiAvatarElement: {
  prototype: HTMLUiAvatarElement;
  new (): HTMLUiAvatarElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "ui-avatar": HTMLUiAvatarElement;
  }
  interface ElementTagNameMap {
      "ui-avatar": HTMLUiAvatarElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "ui-avatar": JSXElements.UiAvatarAttributes;
      }
  }
  namespace JSXElements {
      export interface UiAvatarAttributes extends HTMLAttributes {
        
          name?: string,
          rounded?: boolean | "true" | "false",
          size?: number,
          fontSize?: number,
          length?: number,
          background?: string
      }
  }
}

