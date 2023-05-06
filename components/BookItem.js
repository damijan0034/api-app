import React from 'react'
import classes from "@/styles/Books.module.css"

export default function BookItem({name, description,id,imgUrl}) {
  return (
    <li className={classes.listItem}>
        <img src={imgUrl} alt={name} />
        <h1>{name}</h1>
        <p>{description}</p>
    </li>
  )
}
