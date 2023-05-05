import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroesHeroComponent } from "./components/hero/heroes-hero/heroes-hero.component";
import { HeroesListComponent } from "./components/list/heroes-list/heroes-list.component";


@NgModule({
    declarations:[
        HeroesHeroComponent,
        HeroesListComponent,
    ],
    exports:[
        HeroesHeroComponent,
        HeroesListComponent,
    ],
    imports:[
        CommonModule,
    ]
})
export class HeroesModule{}