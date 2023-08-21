"use client";
// Dummy Imports

import { AnimeResponseData } from "@/Types";
import { Scroll } from "@/components";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";

export default function Home() {
  const [data, setData] = useState<AnimeResponseData[]>([]);
  const [active, setActive] = useState<string | undefined>("TV");

  useEffect(() => {
    if (active === "TV") {
      (async () => {
        const data = await fetch(
          "https://api.jikan.moe/v4/top/anime?type=tv&filter=airing"
        );
        const data2 = await data.json();
        setData(data2.data);
      })();
    }
    if (active === "Movie") {
      (async () => {
        const data = await fetch(
          "https://api.jikan.moe/v4/top/anime?type=movie"
        );
        const data2 = await data.json();
        setData(data2.data);
      })();
    }
  }, [active]);

  return (
    data.length > 0 && (
      <main className="container">
        <div className={styles.herocontainer}>
          <div className={styles.hero}>
            <h1>Welcome.</h1>
            <p>Millions of Anime and Manga to discover. Explore now.</p>
            <div className={styles.search}>
              <input type="text" placeholder="Search for anime, manga,.... " />
              <button>Search</button>
            </div>
          </div>
        </div>
        <Scroll
          data={data}
          setActive={setActive}
          text1="TV"
          text2="Movie"
          title="Trending"
          anime={true}
        />
        <Scroll
          data={data}
          setActive={setActive}
          text1="On TV"
          text2="In Theaters"
          title="What's Popular"
          anime={true}
        />
      </main>
    )
  );
}
