import {Repository} from "./Repository";

export class RepositoryPresentation {

  showRepo(repository: Repository) : Boolean {
      return !repository.name.startsWith("make-release");
  }

   showSonar(repository: Repository) : Boolean {
      return !repository.name.startsWith("docker-") && !repository.name.startsWith("parent") && !repository.name.startsWith("component-");
   }

   showJavadoc(repository: Repository) : Boolean {
      return !repository.name.startsWith("docker-") && !repository.name.startsWith("parent") && !repository.name.startsWith("component-");
   }

   showMaven(repository: Repository) : Boolean {
      return !repository.name.startsWith("docker-");
   }

   showCI(repository: Repository) : Boolean {
      return true;
   }

   showSnyk(repository: Repository) : Boolean {
    return !repository.name.startsWith("docker-");
   }

  getMainBranch(repository: Repository) : String {
     return repository.name.startsWith("docker-")?"master" : "develop";
  }
}
