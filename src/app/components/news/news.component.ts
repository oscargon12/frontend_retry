import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


  news = {
    news0: {
      img: 'https://bnetcmsus-a.akamaihd.net/cms/blog_header/ji/JIF2YEABIPJC1629926029519.jpg',
      title: '¡COMIENZA LA TEMPORADA 2 DE SHADOWLANDS!',
      text: 'El Mythic Dungeon International (MDI) vuelve para la segunda temporada de Shadowlands, y lo hace con un nuevo formato para que los equipos luchen por la final global de 2021.'
    },
    news1: {
      img: 'https://bnetcmsus-a.akamaihd.net/cms/blog_header/9Y7Z3TQ477OS1630361593320.jpg',
      title: 'AHORRA EN LO MEJOR DE BATTLE.NET',
      text: 'De ahora hasta el 6 de septiembre, vamos a lanzar una serie de descuentos en algunos de los mejores juegos de Battle.net.'
    },
    news2: {
      img: 'https://bnetcmsus-a.akamaihd.net/cms/blog_header/yb/YBSCH7S5B0PV1629938015777.jpg',
      title: 'NOTAS DEL PARCHE 21.2',
      text: '¡El parche 21.2, que llega hoy, trae la precompra de Mercenarios, una gran renovación de Campos de batalla, el nuevo Libro de los Mercenarios de Tamsin y mucho más!'
    },
    news3: {
      img: 'https://bnetcmsus-a.akamaihd.net/cms/blog_header/oj/OJF7LE4UGOVJ1629918279214.jpg',
      title: '¡LA RENOVACIÓN DE CAMPOS DE BATALLA LLEGA MAÑANA!',
      text: '¿Está preparado para la mayor actualización de Campos de batalla hasta la fecha?'
    },
    news4: {
      img: 'https://bnetcmsus-a.akamaihd.net/cms/blog_header/1XS0UAZ9H1I21629166419031.jpg',
      title: 'VANGUARD COMO EN WARZONE',
      text: 'La Edición Definitiva incluye el increíble paquete Fuerza operativa uno, que ofrece contenido disponible y jugable tanto en Call of Duty'
    },
    news5: {
      img: 'https://bnetcmsus-a.akamaihd.net/cms/blog_header/IFYZMLBFM0CO1629133377328.jpg',
      title: 'PRESENTAMOS CALL OF DUTY®: VANGUARD',
      text: 'No has visto combates como estos'
    },
  }

  data = Object.values(this.news)

  constructor() { }

  ngOnInit(): void {
  }

}
