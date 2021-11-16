import { getData } from '../service/apiRequest'

function  fetchDataFromApi ()  {
    getData('http://localhost:3002/')
    .then((res) => console.log(res))
}

export { fetchDataFromApi }
