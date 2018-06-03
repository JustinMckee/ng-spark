export class BlogItem {
  title:        string;
  created:      string;
  path:         string;
  body:         string;
  imageURL:     string;
  imageAlt:     string;
  promote:      boolean;
  sticky:       boolean;

  constructor(obj?:any) {
    this.title          = obj.title[0].value      || null;
    this.created        = obj.created[0].value      || null;
    this.path           = obj.path[0].alias      || null;
    this.body           = obj.body[0].processed      || null;
    this.imageURL       = (obj.field_image.length !== 0) ? obj.field_image[0].url : null;
    this.imageAlt       = (obj.field_image.length !== 0) ? obj.field_image[0].alt : null;
    this.promote        = obj.promote[0].value      || null;
    this.sticky         = obj.sticky[0].value      || null;
  }
}
