import React from "react";
import layout from "/src/app/Home.module.css"
import styles from "./About.module.css"
import Link from "next/link";
import Image from "next/image";
import Personal from "/src/app/Assets/Foto-About.png"
import Instagram from '/src/app/Assets/instagram.png'
import Whatsapp from '/src/app/Assets/whatsapp.png'
import twitter from '/src/app/Assets/twitter.png'
import Gmail from '/src/app/Assets/gmail-logo.png'


export default function About(){  
return(
    <>
    <body className={layout.body}>
     <div className={layout.Container}>
        <div className={styles.DisplayAbout}>
            <div>
                    <div className={styles.Border}>
                    <Image 
                        src={Personal}
                        width={300}
                        height={300}
                        className={styles.Image}
                    />
                    </div>
            </div>
            <div className={styles.DescriptionDisplay}>
                <div className={styles.AboutDisplay}>
                <h1 className={styles.Subject}>About me</h1> {/** Judul**/}
                <p className={styles.Description}>A student at the Indonesian University of Education who is studying Japanese Language Education. Have expertise and skills in the field of art. Achieved during school at provincial level. Experienced in teaching and coaching in the field of creative design, as well as being a resource person.</p> {/** Deskripsi diri**/}
                <div className={styles.Icon}>
                    <Link href={'https://www.instagram.com/a.m_x02/?hl=id'}>
                        <Image
                            src={Instagram}
                            width={20}
                            height={20}
                            className={styles.Logo}
                        />
                    </Link>
                    <Link href={'https://wa.me/628161844844'}>
                        <Image
                            src={Whatsapp}
                            width={20}
                            height={20}
                            className={styles.Logo}
                        />
                    </Link>
                    <Link href={"https://twitter.com/@am_x02_"}>
                        <Image
                            src={twitter}
                            width={20}
                            height={20}
                            className={styles.Logo}
                        />
                    </Link>
                    <Link href={'mailto:mireureuu@gmail.com'}>
                    <Image 
                         src={Gmail}
                         width={40}
                         height={40}
                         className={styles.Logo}
                        />
                    </Link>
                </div>
                </div>
                
            </div>
        </div>
     </div>
    </body>
    </>

);

}