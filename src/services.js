const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games'
const gameId = 'p14dkMWGXY308Nr8fNoc'

export const postData = async data => {
	const config = {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		}
	}

	try {
		const response = await fetch(`${baseURL}/${gameId}/scores/`, config)
		const datas = await response.json()
		return datas
	} catch (err) {
		return err
	}
}

export const getData = async () => {
	try {
		const response = await fetch(`${baseURL}/${gameId}/scores/`)
		const datas = await response.json()
		const result = await datas.result
		return result
	} catch (err) {
		return err
	}
}
