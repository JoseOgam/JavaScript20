const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const mealsEL = document.getElementById('meals');
const resultHeading = document.getElementById('result-heading');
const single_mealEL = document.getElementById('single-meal');

function searchMeal(e) {
    
    e.preventDefault();
    
    // clear single meal
    single_mealEL.innerHTML = '';

    // get search term

    const term = search.value;

    // check for empty

    if (term.trim())
    {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ term }`).then(res => res.json()).then(data => {
            console.log(data);
            resultHeading.innerHTML = `<h2>serach result for '${ term }'</h2>`
            
            if (data.meals === null)
            {
                resultHeading.innerHTML = `<h2>There is no search result for '${term}'</h2>`
            } else
            {
                mealsEL.innerHTML = data.meals
                .map(
              meal => `
            <div class="meal">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
              <div class="meal-info" data-mealID="${meal.idMeal}">
                <h3>${meal.strMeal}</h3>
              </div>
            </div>
          `
            )
            .join('');
            }
         });
    }

    search.value = ''
}

submit.addEventListener('click', searchMeal);