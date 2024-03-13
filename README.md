## UPON CLONING, RUN COMMAND npm install IN THIS PROJECT'S TERMINAL. MAKE SURE YOU ARE IN THIS DIRECTORY!!!

# Components you will need to build:

- App = Should return a div with className "container" that contains the order your Header, Menu, and Footer components will stack in.

- Header = Should return a header for your page with the name of the pizza company. Use a <header> as the containing div in the return, give it className "header".

- Menu = Should essentially act as a container for the UL of your pizza components. It should return a <main> tag of className "menu" that contains your UL. Should use .map to automate the creation of the Pizza objects. The UL should have the className "pizzas".

- Pizza = Should take in a prop for the current individual pizza's data to be used. Should return an <li> tag as the container for the pizza. The LI's styling should be of className pizza but if it's .soldOut is true then it should also have the sold-out class in it's className.

- Footer = Should return a <footer> tag of className "footer" as the container. If it is currently during open hours the footer should call the Order component, otherwise it should provide a message that says "We're closed, we welcome you to return between 10:00 AM and 10:00 PM. Utilize datetime logic for the current time, new Date().getHours() to get just the hours.

- Order = Should return a <div> of className "order" as the container for this component's markup. Should only be called in the footer if the current time is during operation hours. Should provide a message that says "We're open! From 10:00 AM to 10:00 PM. Come visit us or order online!" and then have a button that says "Order" on it.
