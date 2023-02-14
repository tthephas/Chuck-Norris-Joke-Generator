const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

// add event listener

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC AWAIT
async function generateJoke() {

    const res = await fetch('https://api.chucknorris.io/jokes/random') 

     const data = await res.json() 

    console.log(data) 

    jokeEl.innerHTML = data.value 

}
