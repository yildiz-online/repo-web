export class Repository {

  name: String;
  description: String;
  pushed_at: Date;
  open_issues_count: String;

  constructor(name: string, description: string, pushed_at: string, open_issues_count: string) {
    this.name = name;
    this.description = description;
    this.pushed_at = new Date(pushed_at);
    this.open_issues_count = open_issues_count;
  }

}
