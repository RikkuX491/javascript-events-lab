# Lab - JavaScript Events

## Overview

This lab will further help you understand how JavaScript Events work.

The Flatburger restaurant wants to add functionality to their website that displays a menu of burgers to sell to its customers. You will need to use your knowledge of JavaScript Events to complete this lab.

## Tools and Resources

It is recommended that you use the Visual Studio Code (VSCode) IDE for this lab.

Useful considerations and terminology:

**Event**: Something a user does on a web page or something that happens on a web page.

**Event handler**: A callback function that executes code in response to an event.

**click event**: An event that occurs when a user clicks on an element on a web page.

Here are some other useful resources:

- MDN
  - [Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
  - [Event reference (Web Events)](https://developer.mozilla.org/en-US/docs/Web/Events)
  - [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
    - [Element: click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)

## Instructions

In this lab, you will practice adding event listeners to allow for elements to listen for events and execute code in response to events.

**Fork and clone** this lab into your local environment. Navigate into its
directory in the terminal, then run `code .` to open the files in Visual Studio
Code.

Then, open the `index.html` file on your browser to run the application.

Write your code in the `index.js` file. There is some starter code provided in `index.js`.

These are your tasks:

- `addBurgerImageToMenu(burger)`: The `addBurgerImageToMenu()` function has been declared for you, but you will need to write the code that should go inside of this function. It has 1 parameter named `burger` whose value is an `object` that contains the following keys: `name`, `image`, and `description`. When the `addBurgerImageToMenu()` function is called, the following actions should take place:
  - A new `<img>` element is created.
  - The new `<img>` element’s `src` attribute is set to the value of the `image` key of the `object` referenced by the `burger` variable.
  - The new `<img>` element is appended to the `<div>` element with the id of `burger-menu`.
  - An event listener is added to the `<img>` element that will allow the `<img>` element to listen for a `click` event. The event handler (callback function) for the event listener should call the `displayBurgerDetails()` function and pass in the `burger` variable as an argument to the `displayBurgerDetails()` function.
- `displayBurgerDetails(burger)`: The `displayBurgerDetails()` function has been declared for you, but you will need to write the code that should go inside of this function. It has 1 parameter named `burger` whose value should be an `object` that contains the following keys: `name`, `image`, and `description`, when the correct value is passed as an argument into the function. When the `displayBurgerDetails()` function is called, the following actions should take place:
  - The `src` attribute for the `<img>` element with the class of `detail-image` is set to the value of the `image` key of the `object` referenced by the `burger` variable.
  - The `textContent` attribute for the `<h2>` element with the class of `name` is set to the value of the `name` key of the `object` referenced by the `burger` variable.
  - The `textContent` attribute for the `<p>` element with the id of `description-display` is set to the value of the `description` key of the `object` referenced by the `burger` variable.

## Submission and Grading Criteria

When you're done with this lab, remember to commit and push your changes up to GitHub, then
submit your work to Canvas using CodeGrade.
