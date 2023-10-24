"use client";
import { useState } from "react";
import Image from "next/image";
import styles from 'src/app/Project/Project.module.css'
import Sketch1 from '/src/app/Component/Image/Sketch-1.png'
import Sketch2 from '/src/app/Component/Image/Sketch-2.jpg'
import Sketch3 from '/src/app/Component/Image/Sketch-3.jpg'
import Poster1 from '/src/app/Component/Image/Poster-1.jpg'
import Poster2 from '/src/app/Component/Image/Poster-2.jpg'
import Poster3 from '/src/app/Component/Image/Poster-3.png'
import Collage1 from '/src/app/Component/Image/Collage-1.jpg'
import Collage2 from '/src/app/Component/Image/Collage-2.jpg'
import Ilustrasi1 from '/src/app/Component/Image/Ilustrasi-1.png'
import Ilustrasi2 from '/src/app/Component/Image/Ilustrasi-2.png'





export default function Option(){
   
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedImage(selectedValue);
    };

   
    return(
        <>
        <div>
           <select className={styles.Option} id="Option" onChange={handleImageChange}>
                <option className={styles.Select} value="disabled">Select Style</option>
                <option className={styles.Select} value="All">All</option>
                <option className={styles.Select} value="CollageArt">Collage art</option>
                <option className={styles.Select} value="Poster">Poster</option>
                <option className={styles.Select} value="Sketch">Anime sketch</option>
                <option className={styles.Select} value="Illustration">illustration</option>
           </select>
             <div className={styles.DisplayImage}>
                {selectedImage &&
                    <div className={styles.Gallery}>
                         {selectedImage === "All" && (
                            <>
                            <Image
                                    src={Sketch1}
                                    width={250}
                                    height={250} 
                                    className={styles.Image}

                            />
                            <Image
                                    src={Sketch2}
                                    width={250}
                                    height={250} 
                                    className={styles.Image}
                            />   
                            <Image
                                    src={Sketch3}
                                    width={250}
                                    height={250} 
                                    className={styles.Image}
                            />  
                            <Image
                                    src={Poster1}
                                    width={250}
                                    height={250} 
                                    className={styles.Image}
                            />
                            <Image
                                    src={Poster2}
                                    width={250}
                                    height={250} 
                                    className={styles.Image}
                            />  
                            <Image
                                    src={Poster3}
                                    width={250}
                                    height={250} 
                                    className={styles.Image}
                            />     
                            <Image
                                    src={Collage1}
                                    width={250}
                                    height={250} 
                                    className={styles.Image}
                            />
                            <Image
                                    src={Collage2}
                                    width={250}
                                    height={250} 
                                    className={styles.Image}
                            />
                            <Image
                                    src={Ilustrasi1}
                                    width={250}
                                    height={250} 
                                    className={styles.Image}
                             />
                             <Image
                                    src={Ilustrasi2}
                                    width={250}
                                    height={250} 
                                    className={styles.Image}
                            />
                            </>
                        )} 
                        {selectedImage === "Sketch" && (
                            <>
                            <Image
                                    src={Sketch1}
                                    width={250}
                                    height={250} 
                                    className={styles.Image}

                            />
                            <Image
                                    src={Sketch2}
                                    width={250}
                                    height={250} 
                                    className={styles.Image}
                            />   
                            <Image
                                    src={Sketch3}
                                    width={250}
                                    height={250} 
                                    className={styles.Image}
                            />       
                            </>
                        )}
                        {selectedImage === "Poster" && (
                            <>
                            <Image
                                    src={Poster1}
                                    width={250}
                                    height={250} 
                                    className={styles.Image}
                            />
                            <Image
                                    src={Poster2}
                                    width={250}
                                    height={250} 
                                    className={styles.Image}
                            />  
                            <Image
                                    src={Poster3}
                                    width={250}
                                    height={250} 
                                    className={styles.Image}
                            />
                            </>
                        )}
                        {selectedImage === "CollageArt" && (
                            <>
                             <Image
                                    src={Collage1}
                                    width={250}
                                    height={250} 
                                    className={styles.Image}
                             />
                             <Image
                                    src={Collage2}
                                    width={250}
                                    height={250} 
                                    className={styles.Image}
                            />  
                            </>
                        )}
                        {selectedImage === "Illustration" && (
                            <>
                             <Image
                                    src={Ilustrasi1}
                                    width={250}
                                    height={250} 
                                    className={styles.Image}
                             />
                             <Image
                                    src={Ilustrasi2}
                                    width={250}
                                    height={250} 
                                    className={styles.Image}
                            />  
                            </>
                        )}
                        
                    </div>
                }
            </div>   
        </div>
        </>
    );
}