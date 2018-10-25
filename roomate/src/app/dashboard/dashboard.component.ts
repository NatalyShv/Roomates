import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';
import { filter } from 'rxjs/operators';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  animal: string = "";
  smoking: string = "";

  constructor(private heroService: HeroService) { }

  animals(animal_img_path)
  {
    if (this.animal == animal_img_path)
    {
      this.animal = "";
    }
    else
    {
      this.animal = animal_img_path;
    }

    this.filterAgain();
  }

  smoks(smoking_img_path)
  {
    if (this.smoking == smoking_img_path)
    {
      this.smoking = "";
    }
    else
    {
      this.smoking = smoking_img_path
    }

    this.filterAgain();
  }

  filterAgain()
  {
    if (this.animal != "" && this.smoking != "")
    {
      this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes.filter(hero => hero.animals == this.animal && hero.smoking == this.smoking));
    }
    else if (this.animal != "")
    {
      this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes.filter(hero => hero.animals == this.animal));
    }
    else if (this.smoking != "")
    {
      this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes.filter(hero => hero.smoking == this.smoking));
    }
    else
    {
      this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes.filter(hero => hero.id >= 1));
    }
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {

    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.filter(hero => hero.id >= 10));
  }
}
