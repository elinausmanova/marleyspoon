import React, { useState } from 'react';
import Link from "next/link";

import Card from '../components/Card'
import styles from '../styles/Home.module.css'

interface Data {
  props: any,
  data: any
}

function Page(props: Data) {

  // create state for selected recipes and their ids
  const [selectedRecipeId1, setSelectedRecipeId1] = useState('');
  const [selectedRecipeName1, setSelectedRecipeName1] = useState('');
  const [selectedRecipeId2, setSelectedRecipeId2] = useState('');
  const [selectedRecipeName2, setSelectedRecipeName2] = useState('');

  // to update a state
  const updateSelectedRecipes = (recipeId: any) => {

    if (selectedRecipeId1 === '') {
      setSelectedRecipeId1(recipeId)
      let selectedRecipe1 = props.data.recipes.filter((recipe: any) => recipe.id === recipeId)[0];
      setSelectedRecipeName1(selectedRecipe1.title);
    } else if (selectedRecipeId2 === '' && selectedRecipeId1 === recipeId) {
      alert('You cannot choose the same recipe twice, please choose a different one')
    } else if (selectedRecipeId2 === '') {
      setSelectedRecipeId2(recipeId)
      let selectedRecipe2 = props.data.recipes.filter((recipe: any) => recipe.id === recipeId)[0];
      setSelectedRecipeName2(selectedRecipe2.title);
    } else {
      alert('You have already chosen 2 recipes, please submit');
    }
  }

  // change style of the button depending on the user's choice
  let buttonStyle;

  if (selectedRecipeId1 !== '' && selectedRecipeId2 !== '') {
    buttonStyle = styles.button;
  } else {
    buttonStyle = styles.disabledButton;
  }

  return (
    <div>
      {/* Hint what a user should do on the page depending on the state */}
      <p className={styles.welcome}>Welcome to Marley Spoon</p>
      {selectedRecipeId1 === '' && selectedRecipeId2 === '' && <p className={styles.status}>Please choose 2 recipes</p>}
      {selectedRecipeId1 !== '' && selectedRecipeId2 === '' && <p className={styles.status}>Please choose 1 more recipe</p>}
      {selectedRecipeId1 !== '' && selectedRecipeId2 !== '' && <p className={styles.status}>Please submit your choice</p>}

      {/* show all possible recipes */}
      <div className={styles.main}>
        {props.data.recipes.map((recipe: any) => (

          <Card
            selected={selectedRecipeId1 === recipe.id || selectedRecipeId2 == recipe.id}
            key={recipe.id}
            updateSelectedRecipes={updateSelectedRecipes}
            id={recipe.id}
            title={recipe.title}
            subtitle={recipe.subtitle}
            category={recipe.category.displayText}
            attributes={recipe.attributes}
            recipeType={recipe.recipeType}
            image={recipe.image.url}
          />

        ))}
      </div>

      {/* button to go to the next page */}
      <div className={styles.buttonLocation}>
        {selectedRecipeId1 !== '' && selectedRecipeId2 !== '' &&
          <Link className={buttonStyle}
            href={{
              pathname: '/user-details',
              query: {
                recipe1: selectedRecipeName1,
                id1: selectedRecipeId1,
                recipe2: selectedRecipeName2,
                id2: selectedRecipeId2,
              }
            }}
          >
            Next
          </Link>
        }

        {/* disabled button which shows on the screen before a user did the choice */}
        {(selectedRecipeId1 === '' || selectedRecipeId2 === '') &&
          <button className={buttonStyle} disabled>Next</button>
        }

      </div>
    </div>
  )
}

// get request
export async function getServerSideProps() {
  const res = await fetch('https://code-challenge-mid.vercel.app/api/recipes')
  const data = await res.json()

  return { props: { data } }
}

export default Page