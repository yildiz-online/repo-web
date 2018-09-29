export class Repository {

  name: String;
  description: String;
  pushed_at: Date;

  constructor(name: string, description: string, pushed_at: string) {
    this.name = name;
    this.description = description;
    this.pushed_at = new Date(pushed_at);
  }

}
