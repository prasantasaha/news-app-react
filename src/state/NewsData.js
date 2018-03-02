import { List, fromJS } from "immutable";

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("0c9f7b4f133c473baee1c231e2af9845");

const INITIAL_STATE = fromJS({
  categories: List([
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology"
  ]),
  sources: List([]),
  articles: List([
    // {
    //   source: { id: "hacker-news", name: "Hacker News" },
    //   author: null,
    //   title: "The Henley Passport Index 2018",
    //   description:
    //     "For some people, a passport is a portal to the world. For others, it is a barrier to the travel freedom they seek. Where do you lie on the spectrum of mobility? Henley & Partners has launched the Henley Passport Index � a ranking of all the passports of the w…",
    //   url: "https://www.henleyglobal.com/henley-passport-index/",
    //   urlToImage:
    //     "https://henleyglobal.com/files/img/hvi/PI-LinkedIn-698x400.jpg",
    //   publishedAt: "2018-03-02T05:07:43.5597946Z"
    // },
    // {
    //   source: { id: "national-geographic", name: "National Geographic" },
    //   author: "Maryellen Kennedy Duckett",
    //   title:
    //     "Top 10 Places to Photograph Near The Beaches of Fort Myers & Sanibel",
    //   description:
    //     "Natural spaces and historic places make Florida’s southwest Gulf coast a picture-perfect destination.",
    //   url:
    //     "https://www.nationalgeographic.com/travel/destinations/north-america/united-states/florida/sponsor-content-top-ten-places-to-photograph-fort-myers-sanibel-.html",
    //   urlToImage:
    //     "https://www.nationalgeographic.com/content/dam/travel/rights-exempt/SponsorContent/1-Fort-Myers-Beach-Pier.jpg",
    //   publishedAt: "2018-03-02T05:07:16.2560506Z"
    // },
    // {
    //   source: { id: "national-geographic", name: "National Geographic" },
    //   author: null,
    //   title: "Yellowstone National Park",
    //   description:
    //     "Get Yellowstone information, facts, photos, and more in this Yellowstone National Park guide from National Geographic.",
    //   url:
    //     "https://www.nationalgeographic.com/travel/national-parks/yellowstone-national-park.html",
    //   urlToImage:
    //     "https://www.nationalgeographic.com/content/dam/travel/photos/000/926/92692.jpg",
    //   publishedAt: "2018-03-02T05:07:15.0997052Z"
    // },
    // {
    //   source: { id: "national-geographic", name: "National Geographic" },
    //   author: "Maryellen Kennedy Duckett",
    //   title: "Smart Cities: Gothenburg, Sweden",
    //   description:
    //     "A global leader in workable green solutions, Gothenburg puts sustainability into practice for the public good.",
    //   url:
    //     "https://www.nationalgeographic.com/travel/features/smart-cities/branded-content-gothenburg-sweden.html",
    //   urlToImage:
    //     "https://www.nationalgeographic.com/content/dam/travel/rights-exempt/SponsorContent/Smart-Cities-Gothenburg_Hero.jpg",
    //   publishedAt: "2018-03-02T05:07:13.3808154Z"
    // },
    // {
    //   source: { id: "national-geographic", name: "National Geographic" },
    //   author: "Nick Lunn",
    //   title:
    //     "One of the Ocean’s Deadliest Creatures Filmed Near Australian Beach",
    //   description:
    //     "But don’t fear, they only attack when they feel their lives are threatened.",
    //   url:
    //     "https://news.nationalgeographic.com/2018/03/blue-ringed-octopus-filmed-australian-beach-spd.html",
    //   urlToImage:
    //     "https://pmdvod.nationalgeographic.com/NG_Video/638/711/smpost_1519928195156.jpg",
    //   publishedAt: "2018-03-02T05:07:12.8182721Z"
    // },
    // {
    //   source: { id: "national-geographic", name: "National Geographic" },
    //   author: "Nicole Wetsman",
    //   title: "What This Unprecedented 13-Million-Person Family Tree Reveals",
    //   description:
    //     "For starters, the new tree calls into question a prevailing theory for why people stopped marrying close relatives.",
    //   url:
    //     "https://news.nationalgeographic.com/2018/03/human-family-tree-genealogy-ancestry-dna-marriage-longevity-science.html",
    //   urlToImage:
    //     "https://news.nationalgeographic.com/content/dam/news/2018/03/01/huge_family_tree/family_tree_1_kaplanis3HR.jpg",
    //   publishedAt: "2018-03-02T05:07:12.1150887Z"
    // },
    // {
    //   source: { id: "national-geographic", name: "National Geographic" },
    //   author: "Sarah Gibbens",
    //   title: "Earliest Ancient Egyptian Tattoos Found on Mummies",
    //   description:
    //     "The 5,000-year-old mummies have tattooed images of sheep, bulls, and mysterious lines.",
    //   url:
    //     "https://news.nationalgeographic.com/2018/03/ancient-egyptian-mummy-tattoos-spd.html",
    //   urlToImage:
    //     "https://news.nationalgeographic.com/content/dam/news/2018/03/01/oldest-tattoo/02-oldest-tattoo-mummy.jpg",
    //   publishedAt: "2018-03-02T05:07:10.9899976Z"
    // },
    // {
    //   source: { id: "national-geographic", name: "National Geographic" },
    //   author: "Elaina Zachos",
    //   title: "Rare Sleeper Shark Caught on Video Beneath the Arctic",
    //   description:
    //     "The footage could provide more information on Greenland sharks, an understudied deep-sea species.",
    //   url:
    //     "https://news.nationalgeographic.com/2018/03/greenland-shark-video-canada-spd.html",
    //   urlToImage:
    //     "https://pmdvod.nationalgeographic.com/NG_Video/761/759/smpost_1519936977982.jpg",
    //   publishedAt: "2018-03-02T05:07:10.4118251Z"
    // },
    // {
    //   source: { id: "national-geographic", name: "National Geographic" },
    //   author: "Elaina Zachos",
    //   title: "New Species of 'Indestructible' Animal Found in Surprising Place",
    //   description:
    //     "Discovered in a parking lot in Japan, the tardigrade species could provide clues for how the animal has changed over time.",
    //   url:
    //     "https://news.nationalgeographic.com/2018/03/tardigrade-water-bear-parking-lot-japan-spd.html",
    //   urlToImage:
    //     "https://news.nationalgeographic.com/content/dam/news/2018/03/01/tadigrade/tadigrade_new_species_Mac_sho_JP_002_M600_BRJ_HR1_030.jpg",
    //   publishedAt: "2018-03-02T05:07:09.4429987Z"
    // },
    // {
    //   source: { id: "national-geographic", name: "National Geographic" },
    //   author: "Erica Tennenhouse",
    //   title: "Exclusive: Mysterious Orcas Filmed Underwater for First Time",
    //   description:
    //     "A ship returning from Antarctica has a chance encounter with a rarely seen type of killer whale.",
    //   url:
    //     "https://news.nationalgeographic.com/2018/03/animals-orcas-killer-whales-antarctica.html",
    //   urlToImage:
    //     "https://news.nationalgeographic.com/content/dam/news/rights-exempt/nat-geo-video-stills/2018/fc-NW_DLY_ds1802001-117-type-d-orca-killer-whale-first-footage-vin-spd-p180301~.jpg",
    //   publishedAt: "2018-03-02T05:07:08.7554415Z"
    // },
    // {
    //   source: { id: "national-geographic", name: "National Geographic" },
    //   author: null,
    //   title: "New Orleans is a City of Stories",
    //   description: "Discover what to do and see in the Crescent City.",
    //   url:
    //     "https://news.nationalgeographic.com/2018/03/sponsor-content-new-orleans-city-of-stories.html",
    //   urlToImage:
    //     "https://news.nationalgeographic.com/content/dam/news/rights-exempt/SponsorContent/CharacterStills_Mike_Artist-1.jpg",
    //   publishedAt: "2018-03-02T05:07:07.3334553Z"
    // },
    // {
    //   source: { id: "news24", name: "News24" },
    //   author: null,
    //   title: "Anderson downs Chung to reach semis in Acapulco",
    //   description:
    //     "South Africaâs Kevin Anderson is through to the semi-finals of the Mexican Open in Acapulco after defeating South Koreaâs Chung Hyeon.",
    //   url:
    //     "https://www.sport24.co.za/Tennis/ATPTour/anderson-downs-chung-to-reach-semis-in-acapulco-20180302",
    //   urlToImage:
    //     "http://cdn.24.co.za/files/Cms/General/d/4579/e2ddbbe9ea5a4fe1a734e8ca17aa443c.jpg",
    //   publishedAt: "2018-03-02T05:00:39+00:00"
    // },
    // {
    //   source: { id: "news24", name: "News24" },
    //   author: null,
    //   title:
    //     "Mcebo Dlamini expected back in court again for Fees Must Fall protests",
    //   description:
    //     "Former Wits SRC president and Fees Must Fall activist Mcebo Dlamini is expected to appear in the Johannesburg Magistrate's Court in connection with the 2016 Fees Must Fall student protests.",
    //   url:
    //     "https://www.news24.com/SouthAfrica/News/mcebo-dlamini-expected-back-in-court-again-for-fees-must-fall-protests-20180302",
    //   urlToImage:
    //     "http://cdn.24.co.za/files/Cms/General/d/6017/83030690782d40d4a135c816bb1c05e4.jpg",
    //   publishedAt: "2018-03-02T05:00:18+00:00"
    // },
    // {
    //   source: { id: "msnbc", name: "MSNBC" },
    //   author: "MSNBC",
    //   title: "Mueller appears to be working on Trump Russia collusion question",
    //   description:
    //     "Rep. Adam Schiff talks with Rachel Maddow about indications that special counsel Robert Mueller is preparing to engage the matter of the Russian hacking of Democratic e-mails and the central question of Trump campaign collusion with Russia.",
    //   url:
    //     "http://www.msnbc.com/rachel-maddow/watch/mueller-appears-to-be-working-on-trump-russia-collusion-question-1174751299518",
    //   urlToImage:
    //     "https://media1.s-nbcnews.com/j/MSNBC/Components/Video/201803/n_maddow_bschiff_180301_1920x1080.1200;630;7;70;5.jpg",
    //   publishedAt: "2018-03-02T05:00:09.5672199Z"
    // },
    // {
    //   source: { id: "financial-times", name: "Financial Times" },
    //   author: null,
    //   title: "Business schools rethink MBA strategy as market demand shifts",
    //   description:
    //     "A growing number of institutions are rejecting the traditional two-year courses",
    //   url: "https://www.ft.com/content/ca695c4e-1888-11e8-9376-4a6390addb44",
    //   urlToImage:
    //     "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fprod-upp-image-read.ft.com%2Fa2d64872-1d3d-11e8-a748-5da7d696ccab?source=next-opengraph&fit=scale-down&width=900",
    //   publishedAt: "2018-03-02T05:00:04.2230377Z"
    // },
    // {
    //   source: { id: "the-irish-times", name: "The Irish Times" },
    //   author: "Gerry Thornley",
    //   title:
    //     "Sam Arnold inching closer to becoming another centre of attention",
    //   description:
    //     "Training with Ireland a boost after injuries and suspension derailed Munster man’s season",
    //   url:
    //     "https://www.irishtimes.com/\t\t\t\t\t\t\t/sport/rugby/sam-arnold-inching-closer-to-becoming-another-centre-of-attention-1.3411873\t",
    //   urlToImage:
    //     "https://www.irishtimes.com/image-creator/?id=1.3411869&origw=1023",
    //   publishedAt: "2018-03-02T05:00:00Z"
    // },
    // {
    //   source: { id: "daily-mail", name: "Daily Mail" },
    //   author: "By Dailymail.com Reporter and Afp",
    //   title: "Investor reaches deal to buy assets from Weinstein Co",
    //   description:
    //     "Maria Contreras-Sweet, a former official in the Obama administration, said Thursday that she had reached a deal to buy assets from Harvey Weinstein's embattled company.",
    //   url:
    //     "http://www.dailymail.co.uk/news/article-5452477/Investor-says-deal-reached-Weinstein-Company-assets.html",
    //   urlToImage:
    //     "http://i.dailymail.co.uk/1/2018/03/02/00/2411420-0-image-a-32_1519950964877.jpg",
    //   publishedAt: "2018-03-02T04:58:41+00:00"
    // },
    // {
    //   source: { id: "daily-mail", name: "Daily Mail" },
    //   author: "By Katie French For Mailonline",
    //   title:
    //     "Pet owners share photos of their animals trying to hide from vets",
    //   description:
    //     "Members of the animal kingdom are united in their bid to avoid vets at all costs. From hiding beneath furniture to sitting in the sink, these pets will go to any lengths to avoid a check over.",
    //   url:
    //     "http://www.dailymail.co.uk/femail/article-5452751/Pet-owners-share-photos-animals-trying-hide-vets.html",
    //   urlToImage:
    //     "http://i.dailymail.co.uk/i/newpix/2018/03/02/01/49B7D46200000578-0-image-a-7_1519954684111.jpg",
    //   publishedAt: "2018-03-02T04:57:44+00:00"
    // },
    // {
    //   source: { id: "associated-press", name: "Associated Press" },
    //   author: "JOSEPH PISANI",
    //   title: "US companies take a stand, raise age to purchase guns",
    //   description:
    //     "NEW YORK (AP) — Kroger and L.L. Bean said Thursday they will no longer sell guns to anyone under 21, becoming the third and fourth major retailers this week to put restrictions in place that are stronger than federal laws. The announcements follow those by Di…",
    //   url: "https://apnews.com/a70d3d6e213d4b3a8af92ffd1849b725",
    //   urlToImage:
    //     "https://storage.googleapis.com/afs-prod/media/media:b6265d548b15426eadd064f94f306ca1/3000.jpeg",
    //   publishedAt: "2018-03-02T04:54:28Z"
    // },
    // {
    //   source: { id: "bbc-news", name: "BBC News" },
    //   author: "BBC News",
    //   title: "Israel-Poland talks over Holocaust row",
    //   description:
    //     "Diplomats meet in Jerusalem in a bid to resolve a row over Poland's controversial new Holocaust law.",
    //   url: "http://www.bbc.co.uk/news/world-middle-east-43251964",
    //   urlToImage:
    //     "https://ichef-1.bbci.co.uk/news/1024/branded_news/7E11/production/_99837223_gettyimages-51922868.jpg",
    //   publishedAt: "2018-03-02T04:53:03Z"
    // }
  ])
});

// the reducer
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "setNewsData":
      return state.set(action.key, action.value);
    default:
      return state;
  }
}

// reducers actions
export function setNewsData(key, val) {
  return { type: "setNewsData", key: key, value: val };
}

// Async actions
export function getTopHeadlines(...args) {
  return (dispatch, getState) => {
    newsapi.v2.topHeadlines({
        language: 'en',
        country: 'us'
    }).then(result => {
        dispatch(setNewsData("articles", List(result.articles)));
    })
  };
}
