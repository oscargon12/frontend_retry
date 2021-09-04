import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  games = {
    game0: {
      img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltcdaa7ff86edaacf0/5fb3dfef21b96a46dc51a7fb/game-card_overwatch2_enUS.webp?auto=webp&format=pjpg'
    },
    game1: {
      img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt62f9e7c9f3df274f/5fb3f4d021b96a46dc51a801/game-card_wow_enUS.webp?auto=webp&format=pjpg'
    },
    game2: {
      img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt4b4b9263a566ff5e/5fb41cd8a9e913483b74d3ce/game-card_hearthstone_enUS.webp?auto=webp&format=pjpg'
    },
    game3: {
      img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt55a2fba3e9870454/5fb41cec0b0a825636795d7e/game-card_heroes_enUS.webp?auto=webp&format=pjpg'
    },
    game4: {
      img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt1edc7ce558cc989a/5fb41d139fbb9857903d97b8/game-card_starcraft2_enUS.webp?auto=webp&format=pjpg'
    },
    game5: {
      img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt0822535a98171e01/5fb41d8eae5aee5796129469/game-card_diablo4_enUS.webp?auto=webp&format=pjpg'
    },
    game6: {
      img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltaa82a64a6629e7c6/6022e122c484333be943d8dd/rtro-game-card.webp?auto=webp&format=pjpg'
    },
    game7: {
      img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt3f643e0faaaecab1/5fb41cbe8acca34834e6456c/game-card_overwatch_enUS.webp?auto=webp&format=pjpg'
    }
  }

  data = Object.values(this.games)



  constructor() { }

  ngOnInit(): void {
  }

}
