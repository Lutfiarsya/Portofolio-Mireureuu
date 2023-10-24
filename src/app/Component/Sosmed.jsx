"use client"
import React, { useState } from "react"
import styles from '/src/app/Contact/Contact.module.css'
import Image from "next/image";
import twitter from '/src/app/Assets/twitter.png'
import Instagram from '/src/app/Assets/instagram.png'
import Gmail from '/src/app/Assets/gmail-logo.png'
import Whatsapp from '/src/app/Assets/whatsapp.png'



export default function Sosmed(){

    function twitterRedirect(){
        window.location.href ='https://twitter.com/@am_x02_'
    }

    function instagramRedirect(){
        window.location.href ='https://twitter.com/@a.m_x02'
    }


    function gmailRedirect(){
        window.location.href ='mailto:mireureuu@gmail.com'
    }

    function whatsappRedirect(){
        window.location.href ='https://wa.me/628161844844'
    }
    
    return(
        <>
        <div className={styles.Border} value="Twitter" onClick={twitterRedirect}>
                        <Image 
                         src={twitter}
                         width={40}
                         height={40}
                         className={styles.Image}
                         
                        />
                        <p className={styles.Account}>am_x02_</p>
                    </div>
                    <div className={styles.Border}value="Instagram" onClick={instagramRedirect}>
                    <Image 
                         src={Instagram}
                         width={40}
                         height={40}
                         className={styles.Image}
                        />
                      <p className={styles.Account}>a.m_x02</p>  
                     </div>
                     <div className={styles.Border} onClick={gmailRedirect}>
                     <Image 
                         src={Gmail}
                         width={40}
                         height={40}
                         className={styles.Image}
                        />
                        <p className={styles.Account}>mireureuu@gmail.com</p> 
                     </div>
                     <div className={styles.Border} onClick={whatsappRedirect}>
                     <Image 
                         src={Whatsapp}
                         width={40}
                         height={40}
                         className={styles.Image}
                        />
                        <p className={styles.Account}>+62 816-1844-844</p> 
                     </div>
        </>
    )
}