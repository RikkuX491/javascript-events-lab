const burgers = [
    {
        name: "Flatburger",
        image: "images/burgers/flatburger.jpeg",
        description: "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!",
        healthy: false
    },
    {
        name: "Maple Bacon Burger",
        image: "images/burgers/maple-bacon-burger.jpeg",
        description: "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!",
        healthy: false
    },
    {
        name: "Mushroom Burger",
        image: "images/burgers/mushroom-burger.webp",
        description: "A mushroom burger with our exclusive Flatburger melted cheese!",
        healthy: false
    },
    {
        name: "Avocado Bun Burger",
        image: "images/burgers/avocado-bun-burger.jpeg",
        description: "A healthier take on our signature Flatburger but with avocado buns!",
        healthy: true
    },
    {
        name: "Ramen Burger",
        image: "images/burgers/ramen-burger.jpeg",
        description: "If you love ramen and burgers, what are you waiting for? Order our exclusive ramen burger now!",
        healthy: false
    }
];

burgers.forEach(addBurgerImageToMenu);

function addBurgerImageToMenu(burger){
    const burgerImage = document.createElement('img');
    burgerImage.src = burger.image;
    const burgerMenu = document.getElementById('burger-menu');
    burgerMenu.appendChild(burgerImage);

    // Write your solution code here!
}

function displayBurgerDetails(burger){
    const detailImageElement = document.querySelector('.detail-image');
    detailImageElement.src = burger.image;
    const nameElement = document.querySelector('.name');
    nameElement.textContent = burger.name;
    const descriptionDisplayElement = document.getElementById('description-display');
    descriptionDisplayElement.textContent = burger.description;
}

function updateBurgerMenu(event){
    // Write your solution code here!
}

function addHealthyBurgerToMenu(burger){
    // Write your solution code here!
}