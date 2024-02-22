// finally
const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
    return fetch(url).then(people => people.json())
}))
    .then(array => {
        throw Error
        console.log('1', array[0])
        console.log('1', array[1])
        console.log('1', array[2])
        console.log('1', array[3])
    })
    .catch(err => console.log('Oop!..', err))
    // .finally(data => console.log('extra', data))
    .finally(() => console.log('extra'))    //--> do after all completed

//result after run is below
//Oop!.. Error() { [native code] }
//extra