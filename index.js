const btn = document.querySelector('.button');
const srch = document.querySelector('.Search');
const Recipecontainer =document.querySelector('.container');

const fetchrecipe = async (q) => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`);
    const response = await data.json();
    // console.log(response.meals[0]);

    Recipecontainer.innerHTML="";
    response.meals.forEach(meal => {
         const recipediv = document.createElement('div');
         recipediv .classList.add('recipe');
         recipediv.innerHTML =` 
         <img src="${meal.strMealThumb}">
         <h3> ${meal.strMeal}</h3>
         <p>${meal.strArea} Dish</p?
         <p> ${meal.strCategory}</p>

         `
         const button = document.createElement('button')
         button.textContent="View Recipe";
         recipediv.appendChild(button);
    //   adding event listner at buuton
    button.addEventListener('click',()=>{
       openRecipePopup(meal);
    })

         Recipecontainer.appendChild(recipediv);
    });
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchinput = srch.value.trim();
    fetchrecipe(searchinput);
})