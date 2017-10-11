import { Component, Prop } from "@stencil/core";

@Component({
  tag: "ui-avatar",
  styleUrl: "ui-avatar.scss"
})
export class UiAvatar {

  @Prop() name: string;
  @Prop() rounded: boolean;
  @Prop() size: number;
  @Prop() fontSize: number;
  @Prop() length: number;
  @Prop() background: string;
  @Prop() color: string;

  render() {
    let url: string = "https://ui-avatars.com/api/?";

    this.name ? url += "name=" + this.name : url += "name=";
    this.rounded ? url += "&rounded=true": url += "";
    this.size ? url += "&size=" + this.size : url += "";
    this.fontSize ? url += "&font-size=" + this.fontSize :  url += "";
    this.length ? url += "&length=" + this.length :  url += "";
    this.background ? url += "&background=" + this.background :  url += "";
    this.color ? url += "&color=" + this.color :  url += "";

    return (
      <img src={url} />
    );

  }
}
