"use client"
import { useState } from "react"
import styles from "./FaqItem.module.scss"

type Props = {
    id: string;
    question: string;
    answer: string;
}

function FaqItem( { id, question, answer }: Props ) {
    const [openId, setOpenId] = useState<string | null>(null);

    const handleClick = ( id: string ) => {
        setOpenId(openId === id ? null : id);
    }

  return (
    <div 
    id={id} 
    className={`${styles.item}`}>
        <button 
        onClick={() => handleClick(id)}
        className={styles.question}>
            {question}<span>{ openId === id ? "ー" : "+" }</span>
        </button>
       <div className={`${openId === id ? styles.isOpen : ""} ${styles.answer}`}>
        <div>
        {answer}
        </div>
       </div>
    </div>
  )
}

export default FaqItem
