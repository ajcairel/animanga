const fetch = require('node-fetch')


describe("jikan api client test for top anime", () => {
    test('it should return bleach', async () => {
        const top = await fetch(
            `https://api.jikan.moe/v4/top/anime?limit=1`
          ).then((res) => res.json());
        expect(top).toStrictEqual({
            "pagination": {
              "last_visible_page": 22006,
              "has_next_page": true,
              "current_page": 1,
              "items": {
                "count": 1,
                "total": 22006,
                "per_page": 1
              }
            },
            "data": [
              {
                "mal_id": 41467,
                "url": "https://myanimelist.net/anime/41467/Bleach__Sennen_Kessen-hen",
                "images": {
                  "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1764/126627.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1764/126627t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1764/126627l.jpg"
                  },
                  "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1764/126627.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1764/126627t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1764/126627l.webp"
                  }
                },
                "trailer": {
                  "youtube_id": "e8YBesRKq_U",
                  "url": "https://www.youtube.com/watch?v=e8YBesRKq_U",
                  "embed_url": "https://www.youtube.com/embed/e8YBesRKq_U?enablejsapi=1&wmode=opaque&autoplay=1",
                  "images": {
                    "image_url": "https://img.youtube.com/vi/e8YBesRKq_U/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/e8YBesRKq_U/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/e8YBesRKq_U/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/e8YBesRKq_U/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/e8YBesRKq_U/maxresdefault.jpg"
                  }
                },
                "approved": true,
                "titles": [
                  {
                    "type": "Default",
                    "title": "Bleach: Sennen Kessen-hen"
                  },
                  {
                    "type": "Synonym",
                    "title": "Bleach: Thousand-Year Blood War Arc"
                  },
                  {
                    "type": "Japanese",
                    "title": "BLEACH 千年血戦篇"
                  },
                  {
                    "type": "English",
                    "title": "Bleach: Thousand-Year Blood War"
                  }
                ],
                "title": "Bleach: Sennen Kessen-hen",
                "title_english": "Bleach: Thousand-Year Blood War",
                "title_japanese": "BLEACH 千年血戦篇",
                "title_synonyms": [
                  "Bleach: Thousand-Year Blood War Arc"
                ],
                "type": "TV",
                "source": "Manga",
                "episodes": 13,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                  "from": "2022-10-11T00:00:00+00:00",
                  "to": "2022-12-27T00:00:00+00:00",
                  "prop": {
                    "from": {
                      "day": 11,
                      "month": 10,
                      "year": 2022
                    },
                    "to": {
                      "day": 27,
                      "month": 12,
                      "year": 2022
                    }
                  },
                  "string": "Oct 11, 2022 to Dec 27, 2022"
                },
                "duration": "24 min per ep",
                "rating": "R - 17+ (violence & profanity)",
                "score": 9.11,
                "scored_by": 154239,
                "rank": 1,
                "popularity": 550,
                "members": 370934,
                "favorites": 14826,
                "synopsis": "Substitute Soul Reaper Ichigo Kurosaki spends his days fighting against Hollows, dangerous evil spirits that threaten Karakura Town. Ichigo carries out his quest with his closest allies: Orihime Inoue, his childhood friend with a talent for healing; Yasutora Sado, his high school classmate with superhuman strength; and Uryuu Ishida, Ichigo's Quincy rival.\n\nIchigo's vigilante routine is disrupted by the sudden appearance of Asguiaro Ebern, a dangerous Arrancar who heralds the return of Yhwach, an ancient Quincy king. Yhwach seeks to reignite the historic blood feud between Soul Reaper and Quincy, and he sets his sights on erasing both the human world and the Soul Society for good.\n\nYhwach launches a two-pronged invasion into both the Soul Society and Hueco Mundo, the home of Hollows and Arrancar. In retaliation, Ichigo and his friends must fight alongside old allies and enemies alike to end Yhwach's campaign of carnage before the world itself comes to an end.\n\n[Written by MAL Rewrite]",
                "background": "The anime adapts the final manga arc, Sennen Kessen-hen (Thousand-Year Blood War Arc), which spans from the 55th to the 74th volumes.",
                "season": "fall",
                "year": 2022,
                "broadcast": {
                  "day": "Tuesdays",
                  "time": "00:00",
                  "timezone": "Asia/Tokyo",
                  "string": "Tuesdays at 00:00 (JST)"
                },
                "producers": [
                  {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                  },
                  {
                    "mal_id": 17,
                    "type": "anime",
                    "name": "Aniplex",
                    "url": "https://myanimelist.net/anime/producer/17/Aniplex"
                  },
                  {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Dentsu",
                    "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                  },
                  {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
                  }
                ],
                "licensors": [
                  {
                    "mal_id": 119,
                    "type": "anime",
                    "name": "VIZ Media",
                    "url": "https://myanimelist.net/anime/producer/119/VIZ_Media"
                  }
                ],
                "studios": [
                  {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Pierrot",
                    "url": "https://myanimelist.net/anime/producer/1/Pierrot"
                  }
                ],
                "genres": [
                  {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                  },
                  {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                  },
                  {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                  }
                ],
                "explicit_genres": [
                  
                ],
                "themes": [
                  
                ],
                "demographics": [
                  {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                  }
                ]
              }
            ]
          })
    });
});





describe("test for random anime quote", () => {
  test('it should return an object with keys of anime, character, and quote, all with strings', async () => {
    const q = await fetch('https://animechan.vercel.app/api/random'
    ).then(res => res.json());
      expect(q).toMatchObject({anime: expect.any(String), character: expect.any(String), quote:expect.any(String)})
  });
});

describe("test for random image", () => {
  test('it should return an object with a single key of url', async () => {
    const image = await fetch('https://api.waifu.pics/sfw/smug'
          ).then(res => res.json());
      expect(image).toMatchObject({url: expect.any(String)})
  });
});