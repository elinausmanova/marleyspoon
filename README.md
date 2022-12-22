This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started - How to run this project locally

1. Clone this github repo `git clone ...`
2. Run `npm install` to install all necessary dependencies
3. Run `npm run dev` to start the server on your localhost and run the app

## Guide through the web-app

1. Go to the root page and select 2 recipes - you cannot choose the same recipe twice (alert message), you cannot change your choice
2. After selecting 2 recipes the button to proceed will be activated and the user will see a `user-details` page after clicking on the button
3. On the `user-details` page a user has to provide first name and email (both fields are mandatory) and click Submit
4. If everything goes correct the user will be redirected to `confirmation` page, and if not, there will be an alert message

## Outlook of ideas/suggestions to change/add/improve

1. Add filter to the root page to select specific type of a meal (by category, cooking time, etc.)
2. Add cart icon, so the user will see how many of the recipes are selected
3. Being able to unselect the recipe on the root page
4. Use nice pop-up messages instead of alert messages
5. On the `user-details` page to be able to see more information about a recipe and to add an opportunity to delete selected recipe
6. Use Redux (or any other global state manager) to avoid passing parameters between pages
7. URL of the `user-details` page includes names of the selected recipes (by query) - it should not contain this information
8. Add testing
9. Change `confirmation` page so it would contain more details
10. Create a login so a user doesn't have to put name and email everytime
11. When a recipe is selected it should be saved in a global state and not on local state