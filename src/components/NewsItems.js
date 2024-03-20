import React, { Component } from 'react'

export class NewsItems extends Component {

  articles = [
      {
          "source": {
              "id": "reuters",
              "name": "Reuters"
          },
          "author": null,
          "title": "Podcasts | Your world in 10 minutes | Reuters",
          "description": "Go straight to the source with a daily ten-minute news briefing by frontline journalists. Join host Kim Vinnell as she takes you around the world every weekday.",
          "url": "https://www.reuters.com/podcasts/",
          "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.webp?d=182",
          "publishedAt": "2024-03-19T11:52:26.3241325Z",
          "content": null
      },
      {
          "source": {
              "id": "bloomberg",
              "name": "Bloomberg"
          },
          "author": "Bloomberg",
          "title": "Bitcoin Retreats as Grayscale ETF Posts Biggest Daily Outflow",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMic2h0dHBzOi8vd3d3LmJsb29tYmVyZy5jb20vbmV3cy9hcnRpY2xlcy8yMDI0LTAzLTE5L2JpdGNvaW4tYnRjLXJldHJlYXRzLWFzLWdyYXlzY2FsZS1ldGYtZ2J0Yy1wb3N0cy1iaWdnZXN0LW91dGZsb3fSAQA?oc=5",
          "urlToImage": null,
          "publishedAt": "2024-03-19T05:30:36+00:00",
          "content": null
      },
      {
          "source": {
              "id": "google-news-au",
              "name": "Google News (Australia)"
          },
          "author": "Daily Mail",
          "title": "Tropical Cyclone Megan strikes Australia causing a mega rain bomb: What you need to know - Daily Mail",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMicWh0dHBzOi8vd3d3LmRhaWx5bWFpbC5jby51ay9uZXdzL2FydGljbGUtMTMyMTE3ODkvQ3ljbG9uZS1zdHJpa2VzLUF1c3RyYWxpYS1jYXVzaW5nLW1lZ2EtcmFpbi1ib21iLW5lZWQta25vdy5odG1s0gF1aHR0cHM6Ly93d3cuZGFpbHltYWlsLmNvLnVrL25ld3MvYXJ0aWNsZS0xMzIxMTc4OS9hbXAvQ3ljbG9uZS1zdHJpa2VzLUF1c3RyYWxpYS1jYXVzaW5nLW1lZ2EtcmFpbi1ib21iLW5lZWQta25vdy5odG1s?oc=5",
          "urlToImage": null,
          "publishedAt": "2024-03-18T21:02:55+00:00",
          "content": null
      },
      {
          "source": {
              "id": "lequipe",
              "name": "L'equipe"
          },
          "author": "L'EQUIPE",
          "title": "L'UEFA a donné des consignes de sécurité aux supporters de Manchester City avant la finale de la Ligue des ...",
          "description": "Selon le « Daily Mail », l'UEFA a envoyé ses consignes de sécurité aux supporters de Manchester City avant la finale de Ligue des champions qui opposera les Citizens à l'Inter, samedi, à Istanbul (21 heures). Un an après les incidents du Stade de France, l'in…",
          "url": "https://www.lequipe.fr/Football/Actualites/L-uefa-a-donne-des-consignes-de-securite-aux-supporters-de-manchester-city-avant-la-finale-de-la-ligue-des-champions/1401508",
          "urlToImage": "https://medias.lequipe.fr/img-photo-jpg/les-supporters-de-manchester-city-devront-arriver-au-stade-avec-neuf-heures-d-avance-selon-le-daily-/1500000001795954/0:0,1997:1332-640-427-75/21760.jpg",
          "publishedAt": "2023-06-08T14:11:05+00:00",
          "content": "Un an après les incidents au Stade de France et le traumatisme de milliers de supporters anglais, l'UEFA voudrait s'assurer que de tels dysfonctionnements ne se reproduisent plus. Le 28 mai 2022, l'a… [+485 chars]"
      },
      {
          "source": {
              "id": "ign",
              "name": "IGN"
          },
          "author": "Eric Song",
          "title": "Daily Deals: Save $50 Off the Microsoft Xbox Series X Gaming Console + Elite Series 2 Wireless Controller Bundle - IGN",
          "description": null,
          "url": "https://www.ign.com/articles/daily-deals-microsoft-xbox-series-x-gaming-console-elite-series-2-controller",
          "urlToImage": "https://assets-prd.ignimgs.com/2022/09/01/090122-1662050863587.jpg?width=1280",
          "publishedAt": "2022-09-01T17:05:23Z",
          "content": "Check out the new hot daily deals for today, including a rare discount on an Xbox Series X gaming console bundle, $170 off the Apple AirPods Max headphones, $50 off the Bose SoundLik II portable Blue… [+12798 chars]"
      }
  ]


  constructor() {
    super();
    this.state ={
      articles: this.articles,
      loading: false
    }

  }
  render() {
    let {title, discription} = this.props;
    return (
      
      <div className="card col-md-3" style={{width: '18rem'}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{discription}</p>
          <a href="/" className="btn btn-primary">Read More</a>
        </div>
      </div>

    )
  }
}

export default NewsItems
