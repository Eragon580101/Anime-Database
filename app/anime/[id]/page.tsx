"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import React from "react";
import Image from "next/image";
import { Scroll } from "@/components";
import { useRouter, usePathname } from "next/navigation";

const page = () => {
  const [name, setName] = useState<string | undefined>("");
  const id = usePathname().split("/")[2];
  const [details, setDetails] = useState<any>(null);
  const [charactersData, setCharactersData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
      const animeData = await res.json();
      const res2 = await fetch(
        `https://api.jikan.moe/v4/anime/${id}/characters`
      );
      const charactersData = await res2.json();
      setCharactersData(charactersData);
      setDetails(animeData);
      setLoading(false);
      console.log(details);
    })();
  }, [id]);

  return (
    !loading && (
      <main>
        <div className={`${styles.hero}`}>
          <div>
            <div className="container">
              <div className={styles.heroContent}>
                <div className={styles.left}>
                  <Image
                    src={details.data.images.jpg.large_image_url}
                    alt={details.data.title}
                    width={200}
                    height={200}
                  />
                </div>
                <div className={styles.right}>
                  <div className="title">
                    <h1>
                      {details.data.title_english || details.data.title}
                      <span className={styles.date}>
                        ({details.data?.year})
                      </span>
                    </h1>
                    <div className={styles.rating}>
                      <p className={styles.ratingValue}>
                        {details.data.rating.split(" ")[0]}
                      </p>
                      <div className={styles.genre}>
                        {details.data.genres.map((genre: any, index: any) => {
                          if (index > 2) return;
                          return (
                            <p className={styles.genre} key={index}>
                              {genre.name}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.userScore}>
                      <span>{details.data.score}</span>
                    </div>
                    <p>User Score</p>
                    <div className={styles.buttons}>
                      <div className={styles.buttons__}>
                        <button className={styles.createList}>
                          <Image
                            src="/CreateList.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </button>
                        <button className={styles.createList}>
                          <Image
                            src="/Heart.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </button>
                        <button className={styles.createList}>
                          <Image
                            src="/Save.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </button>
                        <button className={styles.createList}>
                          <Image
                            src="/Star.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </button>
                      </div>
                      <button className={styles.play}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          width="24px"
                          height="24px"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span>Play Trailer</span>
                      </button>
                    </div>
                  </div>
                  <div className={styles.overview}>
                    <h3>Overview</h3>
                    <p>{details.data.synopsis}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="characters">
          <div className="container">
            <Scroll
              title="Characters"
              data={charactersData.data}
              character={true}
              setActive={setName}
            />
            <Scroll
              title="Voice Actors"
              data={charactersData.data}
              actor={true}
              setActive={setName}
            />
          </div>
        </div>
      </main>
    )
  );
};

export default page;
