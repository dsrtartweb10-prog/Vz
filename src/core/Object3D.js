export class Object3D {
  constructor() {
    this.name = '';
    this.children = [];
    this.parent = null;
  }

  add(child) {
    this.children.push(child);
    child.parent = this;
  }

  remove(child) {
    this.children = this.children.filter(c => c !== child);
    child.parent = null;
  }

  traverse(callback) {
    callback(this);
    for (const child of this.children) child.traverse(callback);
  }
}
