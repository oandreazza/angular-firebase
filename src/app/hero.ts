import { Location } from './location'
export class Hero {
  public location = new Location();
  constructor(
    public name: string
  ) {  }
}
