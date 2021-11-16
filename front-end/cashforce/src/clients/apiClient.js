import { getData } from '../service/apiRequest'

export const fetchDataFromApi = async () => {
   await getData('http://localhost:3002/')
    .then((res) => console.log(res))
}

