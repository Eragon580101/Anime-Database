"use client";
import React, { BaseSyntheticEvent, FC, useRef } from "react";
import { Card, CharacterCard } from "@/components";
import styles from "./Scroll.module.scss";
import { ScrollProps } from "@/Types";

const Scroll: FC<ScrollProps> = ({
  setActive,
  data,
  title,
  text1,
  text2,
  character,
  anime,
  actor,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);

  const handleClick = (e: BaseSyntheticEvent) => {
    const buttons = ref.current?.querySelectorAll("button");
    if (e.target.nodeName !== "BUTTON") return;
    buttons?.forEach((button: any) => {
      button.dataset.active = "false";
    });
    e.target.dataset.active = "true";
    e.target.parentElement.style.setProperty(
      "--translate",
      e.target.offsetLeft + "px"
    );

    if (e.target.innerText === text1) {
      setActive(text1);
    }
    if (e.target.innerText === text2) {
      setActive(text2);
    }
  };

  return (
    <div className={styles.trendingContainer}>
      <div className={styles.top}>
        <p>{title}</p>
        {anime && (
          <div className={styles.filter} ref={ref} onClick={handleClick}>
            <button data-active="true">{text1}</button>
            <button>{text2}</button>
          </div>
        )}
      </div>
      <div
        className={styles.CardContainer}
        style={{
          backgroundImage: `${anime ? "var(--bg)" : "none"}`,
        }}
      >
        {anime && (
          <div className={styles.trending} ref={ref1}>
            {data.map((anime: any) => (
              <Card key={anime.mal_id} anime={anime} />
            ))}
          </div>
        )}
        {character && (
          <div className={styles.trending}>
            {data
              .sort((b, a) => {
                if (a.favorites && b.favorites)
                  return a.favorites - b.favorites;
                else return 0;
              })
              .map((characters: any) => (
                <CharacterCard
                  key={characters.character.mal_id}
                  source={characters?.character?.images?.jpg?.image_url}
                  name={characters.character.name}
                  role={characters.role}
                  favorites={characters.favorites}
                />
              ))}
          </div>
        )}
        {actor && (
          <div className={styles.trending}>
            {data.map((characters: any) =>
              characters.voice_actors
                .filter((e: any) => e.language === "Japanese")
                .map((actors: any, index: number) => {
                  if (index < 0) return;
                  return (
                    <CharacterCard
                      key={actors.person.mal_id}
                      actor={true}
                      source={actors?.person?.images?.jpg?.image_url}
                      role={characters.role}
                      language={actors.language}
                      name={actors.person.name}
                      characterName={characters.character.name}
                      favorites={characters.favorites}
                    />
                  );
                })
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Scroll;
