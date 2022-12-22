import React from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'

import styles from '../styles/UserDetails.module.css'


const UserDetails = () => {

    const router = useRouter();

    // get parameters from the home page
    const searchParams = useSearchParams()
    let recipe1 = searchParams.get('recipe1')
    let id1 = searchParams.get('id1')
    let recipe2 = searchParams.get('recipe2')
    let id2 = searchParams.get('id2')

    // submit user's choice, first name and email
    const handleSubmit = async (event: any) => {
        event.preventDefault()
        let firstName = event.target.name.value;
        let email = event.target.email.value;

        const postData = async () => {
            const data = {
                firstName: firstName,
                email: email,
                recipes: [id1, id2]
            };

            const response = await fetch("https://code-challenge-mid.vercel.app/api/submit", {
                method: "POST",
                body: JSON.stringify(data),
            });
            return response.json();
        };
        postData().then((data) => {
            if (data.status === 'SUCCESS') {
                router.push('/confirmation')
            } else {
                alert('Something went wrong, please try again')
            }
        });
    }

    return (
        <div>
            <p className={styles.title}>User details</p>
            <p className={styles.details}>Your meal choice</p>
            <div className={styles.container}>
                {/* Show user's choice */}
                <div>
                    <div className={styles.recipeInfo}><p>{recipe1}</p></div>
                    <div className={styles.recipeInfo}><p>{recipe2}</p></div>
                </div>

                {/* Form to submit user details */}
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor="first">First Name</label>
                    <input className={styles.input} type="text" id="name" name="name" required />

                    <label htmlFor="last">Email</label>
                    <input className={styles.input} type="email" id="email" name="email" required />

                    <button className={styles.button} type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UserDetails
