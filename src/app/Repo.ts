export class Repo {

  name: String;
  description: String;
  pushed_at: Date;
  dockerImage: boolean;

  constructor(name: string, description: string, pushed_at: string) {
    this.name = name;
    this.description = description;
    this.pushed_at = new Date(pushed_at);
    this.dockerImage = this.name.includes('docker');
  }

}
