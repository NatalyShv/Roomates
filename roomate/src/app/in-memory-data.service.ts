import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', personeImg: 'src/app/images/1300608.large.jpg' },
      { id: 12, name: 'Narco' , personeImg: 'src/app/images/roommate-blog-madrent.jpg'},
      { id: 13, name: 'Bombasto' , personeImg: 'src/app/images/group-women-helping-her-new-260nw-780694936.jpg'},
      { id: 14, name: 'Celeritas' , personeImg: 'src/app/images/cat.jpeg'},
      { id: 15, name: 'Magneta' , personeImg: 'src/app/images/housemates.jpeg'},
      { id: 16, name: 'RubberMan' , personeImg: 'src/app/images/cat.jpeg'},
      { id: 17, name: 'Dynama' , personeImg: 'src/app/images/cat.jpeg'},
      { id: 18, name: 'Dr IQ' , personeImg: 'src/app/images/cat.jpeg'},
      { id: 19, name: 'Magma' , personeImg: 'src/app/images/cat.jpeg'},
      { id: 20, name: 'Tornado' , personeImg: 'src/app/images/cat.jpeg'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
