import { Hero } from './hero';
import { Villain } from './villain';

export class SuperHeroFactory implements IFactory{

  /*createSuperHero(type: Object);
  createSuperHero(type: 'hero'): Hero;
  createSuperHero(type: 'villain'): Villain;*/

  public createProduct(heroOptions): IProduct{
    if (heroOptions === Hero) {
      const hero = new Hero(heroOptions.name, heroOptions.health);
      return hero;
    } else if (heroOptions === Villain) {
      const villain = new Villain(heroOptions.name, heroOptions.health);
      return villain;
    } else {
      throw new Error('Select either a Hero or a Villain');
    }
  }
}