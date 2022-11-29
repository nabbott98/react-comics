import apiUrl from '../apiConfig'
import axios from 'axios'


export const getAuthors = () => {
    return axios({
		method: 'GET',
		url: apiUrl + '/authors/',
	})
}
export const getIllustrators = () => {
    return axios({
		method: 'GET',
		url: apiUrl + '/illustrators/',
	})
}
export const getCharacters = () => {
    return axios({
		method: 'GET',
		url: apiUrl + '/characters/',
	})
}
export const getPublishers = () => {
    return axios({
		method: 'GET',
		url: apiUrl + '/publishers/',
	})
}
export const getAllComics = () => {
    return axios({
		method: 'GET',
		url: apiUrl + '/comics/',
	})
}

export const postComic = (data) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/comics/',
		api_comicbook: data
	})
}
