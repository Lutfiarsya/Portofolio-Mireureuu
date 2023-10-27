import React from "react";
import styles from "./Home.module.css"
import Image from "next/image";
import Personal from "/src/app/Assets/Personal2.png"
import Link from "next/link";





export default function Page(){
    return(
    <>
        <main className={styles.body}>
            <div className={styles.Container}>
                <div className={styles.Home}>
                    <div className={styles.Text}>
                    <h1 className={styles.Introduction}>Hi,<br/>I'm Mireu</h1>
                    <p className={styles.Role}>Artist and Cosplayer</p>
                    <Link href={'/Contact'}>
                        <button className={styles.Button}>Contact Me</button>
                    </Link>
                    
                    </div>
                    <Image
                    src={Personal}
                    width={450}
                    height={450}
                    className={styles.PersonalImage}
                    />
                </div>
            </div>
        </main>
    </>
    );
}
