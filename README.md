# Book Search Engine

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
```

## Mock-Up

As you can see in the following image, a user can type a search term (in this case, "twilight") in a search box and the results appear:

![Image shows "twilight" typed into a search box and books about Star Wars appearing as results.](./assets/twilight.png)

The user can save books by clicking "Save This Book!" under each search result, as shown in the following image:

![Image shows user clicking "Save This Book!" button to save books that appear in search results. The button label changes to "This book has already been saved" after it is clicked and the book is saved.](./assets/savebook.png)

A user can view their saved books on a separate page, as shown in the following image:

![Image shows the books that the user has saved.](./assets/seebooks.png)

A user can delete their saved books by clicking "Delete this Book!", and the following will appear:

![Image shows the books that the user deleted a book.](./assets/deletedbook.png)

## Installation

First clone the repository:

```
git clone https://github.com/ninadri/google-book-search.git
```

Then install the packages in each the client folder, server folder and the main by using the following:

```
npm i
```

In the server folder, run the apollo server by using the following:

```
node server.js
```

In the client server, run the following:

```
npm run build
```

In the main folder, run the following:

```
npm run develop
```

This will run the application.

## License

MIT License

---

© Adriana Nino. [Github Repo](https://github.com/ninadri/google-book-search). [Google Book Search Site]().
