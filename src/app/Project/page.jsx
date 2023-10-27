import React from "react";
import RootLayout from "../layout";
import layout from "src/app/Home.module.css";
import styles from "./Project.module.css"
import Subject from "src/app/About/About.module.css";
import Option from "../Component/Option";

export default function Project(){
    return(
        <main className={layout.body}>
        <div className={layout.Container}>
         <div className={styles.Display}>
           <div className={styles.Title}>
              <h1 className={Subject.Subject} id='title'>Project</h1>
           </div>
           <Option />
        </div> 
      </div>
        </main>
    );
}


