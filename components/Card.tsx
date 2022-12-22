import React, { useState } from 'react';

import styles from './Card.module.css'

type CardProps = {
    id: string,
    title: string,
    subtitle: string
    category: string
    attributes: string
    recipeType: string
    image: string,
    updateSelectedRecipes: (arg: string) => void,
    selected: boolean
}

const Card = ({ id, title, subtitle, category, attributes, recipeType, image, updateSelectedRecipes, selected }: CardProps) => {

    // change style depending if the card was clicked or not
    const [cardStyle, setCardStyle] = useState('notselected');
    let card = cardStyle === 'notselected' ? "button" : "selectedbutton";
    let style;
    if (selected) {
        style = styles.selectedCard;
    } else {
        style = styles.card;
    }

    return (
        <div id={id} className={style} onClick={() => { setCardStyle('selected'); updateSelectedRecipes(id) }}>
            <img src={image} alt={title} className={styles.img} />
            <div className={styles.container}>
                <p className={styles.category}><b>{category}</b></p>
                <h4 className={styles.title}><b>{title}</b></h4>
                <p className={styles.subtitle}><b>{subtitle}</b></p>

            </div>
        </div>
    )
}

export default Card