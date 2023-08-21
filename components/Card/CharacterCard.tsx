"use client";
import { CharacterCardProps } from "@/Types";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";
import styles from "./Card.module.scss";

const CharacterCard: FC<CharacterCardProps> = ({
  source,
  name,
  role,
  favorites,
  actor,
  characterName,
}) => {
  return (favorites && favorites > 100) || role === "Main" ? (
    <div className={styles.moviecard}>
      <div className={styles.img}>
        <Image
          src={source || "/placeholder-image.webp"}
          alt="image"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <p className={`${styles.title} ${styles.character}`}>{name}</p>
        <p className={`${styles.date} ${styles.character}`}>
          {!actor && (
            <>
              <span>{role}</span>
              <br />
              <span>{favorites} Favorites</span>
            </>
          )}
          {actor && <span className={styles.characterName}> {characterName}</span>}
        </p>
      </div>
    </div>
  ) : null;
};

export default CharacterCard;
