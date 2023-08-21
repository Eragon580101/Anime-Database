"use client";
import { CardProps } from "@/Types";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef } from "react";
import styles from "./Card.module.scss";

const Card: FC<CardProps> = ({
  anime: { mal_id, images, title_english, title, year, score, aired },
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && score) {
      ref.current.style.setProperty("--rating", score * 36 + "deg");
      ref.current.dataset.rating = `${score}`;
    }
  }, []);

  return (
    <Link href={`/anime/${mal_id}`} className={styles.moviecard}>
      <div className={styles.img}>
        <Image
          src={images?.jpg?.large_image_url || "/placeholder-image.webp"}
          alt="image"
          width={200}
          height={200}
        />
        <div className={styles.rating} ref={ref}>
          <span>{score}</span>
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{title_english || title}</p>
        <p className={styles.date}>
          {year || (aired?.from && new Date(aired?.from).getFullYear())}
        </p>
      </div>
    </Link>
  );
};

export default Card;
