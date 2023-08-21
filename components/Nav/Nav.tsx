import Image from "next/image";
import React from "react";
import styles from "./Nav.module.scss";
import Link from "next/link";

const Nav = () => {
  return (
    <header className={styles.navWrapper}>
      <div className={`container ${styles.navbar}`}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.svg" alt="" width={200} height={200} />
          </Link>
          <nav className={styles.nav}>
            <ul role="list">
              <li className="active" data-active="true">
                <Link href="#">Anime</Link>
              </li>
              <li>
                <Link href="#">Manga</Link>
              </li>
              <li>
                <Link href="#">People</Link>
              </li>
              <li>
                <Link href="#">Characters</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.right}>
          <Link href="">login</Link>
          <Link href="">Signup</Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;
