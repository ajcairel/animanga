const fetch = require('node-fetch')


describe("jikanv4 api client test for top anime", () => {
    test('it should return bleach', async () => {
        const topAnime = await fetch(
            `https://api.jikan.moe/v4/top/anime?limit=1`
          ).then((res) => res.json());
        expect(topAnime).toStrictEqual({
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

describe("jikanv4 api client test for top manga", () => {
  test('it should return berserk', async () => {
      const topManga = await fetch(
          `https://api.jikan.moe/v4/top/manga?limit=1`
        ).then((res) => res.json());
      expect(topManga).toStrictEqual({
        "pagination": {
          "last_visible_page": 42736,
          "has_next_page": true,
          "current_page": 1,
          "items": {
            "count": 1,
            "total": 42736,
            "per_page": 1
          }
        },
        "data": [
          {
            "mal_id": 2,
            "url": "https://myanimelist.net/manga/2/Berserk",
            "images": {
              "jpg": {
                "image_url": "https://cdn.myanimelist.net/images/manga/1/157897.jpg",
                "small_image_url": "https://cdn.myanimelist.net/images/manga/1/157897t.jpg",
                "large_image_url": "https://cdn.myanimelist.net/images/manga/1/157897l.jpg"
              },
              "webp": {
                "image_url": "https://cdn.myanimelist.net/images/manga/1/157897.webp",
                "small_image_url": "https://cdn.myanimelist.net/images/manga/1/157897t.webp",
                "large_image_url": "https://cdn.myanimelist.net/images/manga/1/157897l.webp"
              }
            },
            "approved": true,
            "titles": [
              {
                "type": "Default",
                "title": "Berserk"
              },
              {
                "type": "Synonym",
                "title": "Berserk: The Prototype"
              },
              {
                "type": "Synonym",
                "title": "Berserk: The Prototype"
              },
              {
                "type": "Japanese",
                "title": "ベルセルク"
              },
              {
                "type": "English",
                "title": "Berserk"
              }
            ],
            "title": "Berserk",
            "title_english": "Berserk",
            "title_japanese": "ベルセルク",
            "title_synonyms": [
              "Berserk: The Prototype"
            ],
            "type": "Manga",
            "chapters": null,
            "volumes": null,
            "status": "Publishing",
            "publishing": true,
            "published": {
              "from": "1989-08-25T00:00:00+00:00",
              "to": null,
              "prop": {
                "from": {
                  "day": 25,
                  "month": 8,
                  "year": 1989
                },
                "to": {
                  "day": null,
                  "month": null,
                  "year": null
                }
              },
              "string": "Aug 25, 1989 to ?"
            },
            "score": 9.46,
            "scored": 9.46,
            "scored_by": 293873,
            "rank": 1,
            "popularity": 2,
            "members": 597090,
            "favorites": 111834,
            "synopsis": "Guts, a former mercenary now known as the \"Black Swordsman,\" is out for revenge. After a tumultuous childhood, he finally finds someone he respects and believes he can trust, only to have everything fall apart when this person takes away everything important to Guts for the purpose of fulfilling his own desires. Now marked for death, Guts becomes condemned to a fate in which he is relentlessly pursued by demonic beings. Setting out on a dreadful quest riddled with misfortune, Guts, armed with a massive sword and monstrous strength, will let nothing stop him, not even death itself, until he is finally able to take the head of the one who stripped him—and his loved one—of their humanity. [Written by MAL Rewrite] Included one-shot: Volume 14: Berserk: The Prototype",
            "background": "Berserk won the Award for Excellence at the sixth installment of Tezuka Osamu Cultural Prize in 2002. The series has over 50 million copies in print worldwide and has been published in English by Dark Horse since November 4, 2003. It is also published in Italy, Germany, Spain, France, Brazil, South Korea, Hong Kong, Taiwan, Thailand, Poland, México and Turkey. In May 2021, the author Kentaro Miura suddenly died at the age of 54. Chapter 364 of Berserk was published posthumously on September 10, 2021. Miura would often share details about the series' story with his childhood friend and fellow mangaka Kouji Mori. Berserk resumed on June 24, 2022, with Studio Gaga handling the art and Kouji Mori's supervision.",
            "authors": [
              {
                "mal_id": 1868,
                "type": "people",
                "name": "Miura, Kentarou",
                "url": "https://myanimelist.net/people/1868/Kentarou_Miura"
              },
              {
                "mal_id": 49592,
                "type": "people",
                "name": "Studio Gaga",
                "url": "https://myanimelist.net/people/49592/Studio_Gaga"
              }
            ],
            "serializations": [
              {
                "mal_id": 2,
                "type": "manga",
                "name": "Young Animal",
                "url": "https://myanimelist.net/manga/magazine/2/Young_Animal"
              }
            ],
            "genres": [
              {
                "mal_id": 1,
                "type": "manga",
                "name": "Action",
                "url": "https://myanimelist.net/manga/genre/1/Action"
              },
              {
                "mal_id": 2,
                "type": "manga",
                "name": "Adventure",
                "url": "https://myanimelist.net/manga/genre/2/Adventure"
              },
              {
                "mal_id": 46,
                "type": "manga",
                "name": "Award Winning",
                "url": "https://myanimelist.net/manga/genre/46/Award_Winning"
              },
              {
                "mal_id": 8,
                "type": "manga",
                "name": "Drama",
                "url": "https://myanimelist.net/manga/genre/8/Drama"
              },
              {
                "mal_id": 10,
                "type": "manga",
                "name": "Fantasy",
                "url": "https://myanimelist.net/manga/genre/10/Fantasy"
              },
              {
                "mal_id": 14,
                "type": "manga",
                "name": "Horror",
                "url": "https://myanimelist.net/manga/genre/14/Horror"
              },
              {
                "mal_id": 37,
                "type": "manga",
                "name": "Supernatural",
                "url": "https://myanimelist.net/manga/genre/37/Supernatural"
              }
            ],
            "explicit_genres": [
              
            ],
            "themes": [
              {
                "mal_id": 58,
                "type": "manga",
                "name": "Gore",
                "url": "https://myanimelist.net/manga/genre/58/Gore"
              },
              {
                "mal_id": 38,
                "type": "manga",
                "name": "Military",
                "url": "https://myanimelist.net/manga/genre/38/Military"
              },
              {
                "mal_id": 6,
                "type": "manga",
                "name": "Mythology",
                "url": "https://myanimelist.net/manga/genre/6/Mythology"
              },
              {
                "mal_id": 40,
                "type": "manga",
                "name": "Psychological",
                "url": "https://myanimelist.net/manga/genre/40/Psychological"
              }
            ],
            "demographics": [
              {
                "mal_id": 41,
                "type": "manga",
                "name": "Seinen",
                "url": "https://myanimelist.net/manga/genre/41/Seinen"
              }
            ]
          }
        ]
      })
  });
});

describe("jikanv4 api client to test the details of a specific anime", () => {
  test('it should return steins gate info', async () => {
      const animeDetails = await fetch(
          `https://api.jikan.moe/v4/anime/9253`
        ).then((res) => res.json());
      expect(animeDetails).toStrictEqual({
        "data": {
          "mal_id": 9253,
          "url": "https://myanimelist.net/anime/9253/Steins_Gate",
          "images": {
            "jpg": {
              "image_url": "https://cdn.myanimelist.net/images/anime/1935/127974.jpg",
              "small_image_url": "https://cdn.myanimelist.net/images/anime/1935/127974t.jpg",
              "large_image_url": "https://cdn.myanimelist.net/images/anime/1935/127974l.jpg"
            },
            "webp": {
              "image_url": "https://cdn.myanimelist.net/images/anime/1935/127974.webp",
              "small_image_url": "https://cdn.myanimelist.net/images/anime/1935/127974t.webp",
              "large_image_url": "https://cdn.myanimelist.net/images/anime/1935/127974l.webp"
            }
          },
          "trailer": {
            "youtube_id": "27OZc-ku6is",
            "url": "https://www.youtube.com/watch?v=27OZc-ku6is",
            "embed_url": "https://www.youtube.com/embed/27OZc-ku6is?enablejsapi=1&wmode=opaque&autoplay=1",
            "images": {
              "image_url": "https://img.youtube.com/vi/27OZc-ku6is/default.jpg",
              "small_image_url": "https://img.youtube.com/vi/27OZc-ku6is/sddefault.jpg",
              "medium_image_url": "https://img.youtube.com/vi/27OZc-ku6is/mqdefault.jpg",
              "large_image_url": "https://img.youtube.com/vi/27OZc-ku6is/hqdefault.jpg",
              "maximum_image_url": "https://img.youtube.com/vi/27OZc-ku6is/maxresdefault.jpg"
            }
          },
          "approved": true,
          "titles": [
            {
              "type": "Default",
              "title": "Steins;Gate"
            },
            {
              "type": "Japanese",
              "title": "STEINS;GATE"
            },
            {
              "type": "English",
              "title": "Steins;Gate"
            }
          ],
          "title": "Steins;Gate",
          "title_english": "Steins;Gate",
          "title_japanese": "STEINS;GATE",
          "title_synonyms": [
            
          ],
          "type": "TV",
          "source": "Visual novel",
          "episodes": 24,
          "status": "Finished Airing",
          "airing": false,
          "aired": {
            "from": "2011-04-06T00:00:00+00:00",
            "to": "2011-09-14T00:00:00+00:00",
            "prop": {
              "from": {
                "day": 6,
                "month": 4,
                "year": 2011
              },
              "to": {
                "day": 14,
                "month": 9,
                "year": 2011
              }
            },
            "string": "Apr 6, 2011 to Sep 14, 2011"
          },
          "duration": "24 min per ep",
          "rating": "PG-13 - Teens 13 or older",
          "score": 9.08,
          "scored_by": 1297813,
          "rank": 3,
          "popularity": 13,
          "members": 2365107,
          "favorites": 178566,
          "synopsis": "Eccentric scientist Rintarou Okabe has a never-ending thirst for scientific exploration. Together with his ditzy but well-meaning friend Mayuri Shiina and his roommate Itaru Hashida, Rintarou founds the Future Gadget Laboratory in the hopes of creating technological innovations that baffle the human psyche. Despite claims of grandeur, the only notable \"gadget\" the trio have created is a microwave that has the mystifying power to turn bananas into green goo.\n\nHowever, when Rintarou decides to attend neuroscientist Kurisu Makise's conference on time travel, he experiences a series of strange events that lead him to believe that there is more to the \"Phone Microwave\" gadget than meets the eye. Apparently able to send text messages into the past using the microwave, Rintarou dabbles further with the \"time machine,\" attracting the ire and attention of the mysterious organization SERN.\n\nDue to the novel discovery, Rintarou and his friends find themselves in an ever-present danger. As he works to mitigate the damage his invention has caused to the timeline, he is not only fighting a battle to save his loved ones, but also one against his degrading sanity.\n\n[Written by MAL Rewrite]",
          "background": "Steins;Gate is based on 5pb. and Nitroplus' released in 2009.",
          "season": "spring",
          "year": 2011,
          "broadcast": {
            "day": "Wednesdays",
            "time": "02:05",
            "timezone": "Asia/Tokyo",
            "string": "Wednesdays at 02:05 (JST)"
          },
          "producers": [
            {
              "mal_id": 61,
              "type": "anime",
              "name": "Frontier Works",
              "url": "https://myanimelist.net/anime/producer/61/Frontier_Works"
            },
            {
              "mal_id": 108,
              "type": "anime",
              "name": "Media Factory",
              "url": "https://myanimelist.net/anime/producer/108/Media_Factory"
            },
            {
              "mal_id": 166,
              "type": "anime",
              "name": "Movic",
              "url": "https://myanimelist.net/anime/producer/166/Movic"
            },
            {
              "mal_id": 238,
              "type": "anime",
              "name": "AT-X",
              "url": "https://myanimelist.net/anime/producer/238/AT-X"
            },
            {
              "mal_id": 352,
              "type": "anime",
              "name": "Kadokawa Pictures Japan",
              "url": "https://myanimelist.net/anime/producer/352/Kadokawa_Pictures_Japan"
            },
            {
              "mal_id": 459,
              "type": "anime",
              "name": "Nitroplus",
              "url": "https://myanimelist.net/anime/producer/459/Nitroplus"
            }
          ],
          "licensors": [
            {
              "mal_id": 102,
              "type": "anime",
              "name": "Funimation",
              "url": "https://myanimelist.net/anime/producer/102/Funimation"
            }
          ],
          "studios": [
            {
              "mal_id": 314,
              "type": "anime",
              "name": "White Fox",
              "url": "https://myanimelist.net/anime/producer/314/White_Fox"
            }
          ],
          "genres": [
            {
              "mal_id": 8,
              "type": "anime",
              "name": "Drama",
              "url": "https://myanimelist.net/anime/genre/8/Drama"
            },
            {
              "mal_id": 24,
              "type": "anime",
              "name": "Sci-Fi",
              "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
            },
            {
              "mal_id": 41,
              "type": "anime",
              "name": "Suspense",
              "url": "https://myanimelist.net/anime/genre/41/Suspense"
            }
          ],
          "explicit_genres": [
            
          ],
          "themes": [
            {
              "mal_id": 40,
              "type": "anime",
              "name": "Psychological",
              "url": "https://myanimelist.net/anime/genre/40/Psychological"
            },
            {
              "mal_id": 78,
              "type": "anime",
              "name": "Time Travel",
              "url": "https://myanimelist.net/anime/genre/78/Time_Travel"
            }
          ],
          "demographics": [
            
          ]
        }
      })
  });
});

describe("jikanv4 api client to test the details of a specific manga", () => {
  test('it should return tokyo ghoul:re info', async () => {
      const mangaDetails = await fetch(
          `https://api.jikan.moe/v4/manga/81117`
        ).then((res) => res.json());
      expect(mangaDetails).toStrictEqual({
        "data": {
          "mal_id": 81117,
          "url": "https://myanimelist.net/manga/81117/Tokyo_Ghoul_re",
          "images": {
            "jpg": {
              "image_url": "https://cdn.myanimelist.net/images/manga/3/145997.jpg",
              "small_image_url": "https://cdn.myanimelist.net/images/manga/3/145997t.jpg",
              "large_image_url": "https://cdn.myanimelist.net/images/manga/3/145997l.jpg"
            },
            "webp": {
              "image_url": "https://cdn.myanimelist.net/images/manga/3/145997.webp",
              "small_image_url": "https://cdn.myanimelist.net/images/manga/3/145997t.webp",
              "large_image_url": "https://cdn.myanimelist.net/images/manga/3/145997l.webp"
            }
          },
          "approved": true,
          "titles": [
            {
              "type": "Default",
              "title": "Tokyo Ghoul:re"
            },
            {
              "type": "Synonym",
              "title": "Tokyo Kushu:re"
            },
            {
              "type": "Synonym",
              "title": "Toukyou Kuushu:re"
            },
            {
              "type": "Synonym",
              "title": "Tokyo Ghoul: \"Joker\""
            },
            {
              "type": "Synonym",
              "title": "Tokyo Kushu:re"
            },
            {
              "type": "Synonym",
              "title": "Toukyou Kuushu:re"
            },
            {
              "type": "Synonym",
              "title": "Tokyo Ghoul: \"Joker\""
            },
            {
              "type": "Japanese",
              "title": "東京喰種-トーキョーグール-:re"
            },
            {
              "type": "English",
              "title": "Tokyo Ghoul:re"
            },
            {
              "type": "French",
              "title": "Tokyo Ghoul : Re"
            }
          ],
          "title": "Tokyo Ghoul:re",
          "title_english": "Tokyo Ghoul:re",
          "title_japanese": "東京喰種-トーキョーグール-:re",
          "title_synonyms": [
            "Tokyo Kushu:re",
            "Toukyou Kuushu:re",
            "Tokyo Ghoul: \"Joker\""
          ],
          "type": "Manga",
          "chapters": 181,
          "volumes": 16,
          "status": "Finished",
          "publishing": false,
          "published": {
            "from": "2014-10-16T00:00:00+00:00",
            "to": "2018-07-05T00:00:00+00:00",
            "prop": {
              "from": {
                "day": 16,
                "month": 10,
                "year": 2014
              },
              "to": {
                "day": 5,
                "month": 7,
                "year": 2018
              }
            },
            "string": "Oct 16, 2014 to Jul 5, 2018"
          },
          "score": 8.26,
          "scored": 8.26,
          "scored_by": 132327,
          "rank": 335,
          "popularity": 21,
          "members": 259639,
          "favorites": 18978,
          "synopsis": "Two years have passed since the CCG's raid on Anteiku. Although the atmosphere in Tokyo has changed drastically due to the increased influence of the CCG, ghouls continue to pose a problem as they have begun taking caution, especially the terrorist organization Aogiri Tree, who acknowledge the CCG's growing threat to their existence. The creation of a special team, known as the Quinx Squad, may provide the CCG with the push they need to exterminate Tokyo's unwanted residents. As humans who have undergone surgery in order to make use of the special abilities of ghouls, they participate in operations to eradicate the dangerous creatures. The leader of this group, Haise Sasaki, is a half-ghoul, half-human who has been trained by famed special class investigator, Kishou Arima. However, there's more to this young man than meets the eye, as unknown memories claw at his mind, slowly reminding him of the person he used to be. [Written by MAL Rewrite]",
          "background": "Tokyo Ghoul:re was the 10th best-selling manga series in Japan in 2015 with an estimated sales of 3,758,541 copies sold. The series has been published in English by VIZ Media since October 17, 2017. It is also published in Spanish by Norma Editorial since June 23, 2016; in German by Kazé since September 1, 2016; in Polish by Waneko since August 14, 2017; and in Portuguese by Panini Editorial since December 15, 2017.",
          "authors": [
            {
              "mal_id": 15753,
              "type": "people",
              "name": "Ishida, Sui",
              "url": "https://myanimelist.net/people/15753/Sui_Ishida"
            }
          ],
          "serializations": [
            {
              "mal_id": 87,
              "type": "manga",
              "name": "Young Jump",
              "url": "https://myanimelist.net/manga/magazine/87/Young_Jump"
            }
          ],
          "genres": [
            {
              "mal_id": 1,
              "type": "manga",
              "name": "Action",
              "url": "https://myanimelist.net/manga/genre/1/Action"
            },
            {
              "mal_id": 10,
              "type": "manga",
              "name": "Fantasy",
              "url": "https://myanimelist.net/manga/genre/10/Fantasy"
            },
            {
              "mal_id": 14,
              "type": "manga",
              "name": "Horror",
              "url": "https://myanimelist.net/manga/genre/14/Horror"
            }
          ],
          "explicit_genres": [
            
          ],
          "themes": [
            {
              "mal_id": 58,
              "type": "manga",
              "name": "Gore",
              "url": "https://myanimelist.net/manga/genre/58/Gore"
            },
            {
              "mal_id": 40,
              "type": "manga",
              "name": "Psychological",
              "url": "https://myanimelist.net/manga/genre/40/Psychological"
            }
          ],
          "demographics": [
            {
              "mal_id": 41,
              "type": "manga",
              "name": "Seinen",
              "url": "https://myanimelist.net/manga/genre/41/Seinen"
            }
          ]
        }
      })
  });
});























