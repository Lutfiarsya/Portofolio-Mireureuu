import React from "react";
import layout from "/src/app/Home.module.css"
import styles from './Contact.module.css'
import Sosmed from "../Component/Sosmed";



export default function Contact(){
    return(
        <main className={layout.body}>
            <div className={layout.Container}>
                <div className={styles.Display}>
                    <h1 className={styles.Subject}>Contact Me</h1>
                    <div className={styles.Sosmed}>
                        <Sosmed />
                    </div>
                </div>
            </div>
        </main>
    );
}