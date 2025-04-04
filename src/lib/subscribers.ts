import axios from 'axios'
import * as cheerio from 'cheerio'

export async function getYoutubeSubscribers() {
	let youtubeSubscribers = undefined
	try {
		const googleAPIKey = process.env.GOOGLE_API_KEY
		const youtubeChannelID = 'UCOESKqC1ycRpuZ62uCzmRFA'
		youtubeSubscribers = await axios
			.get(
				`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeChannelID}&fields=items/statistics/subscriberCount&key=${googleAPIKey}`
			)
			.then(res => res.data.items[0].statistics.subscriberCount)
	} catch (error) {
		console.log('Ошибка при получении YouTube подписчиков')
		if (axios.isAxiosError(error)) {
			console.error('Ошибка Axios:', error.message)
		} else if (error instanceof Error) {
			console.error('Общая ошибка:', error.message)
		} else {
			console.error('Неизвестная ошибка:', error)
		}
	}
	return youtubeSubscribers
}

export async function getVkSubscribers() {
	const vkGroupID = '211186476'
	const vkAPIKey = process.env.VK_API_KEY
	let vkSubscribers = undefined
	try {
		vkSubscribers = await axios
			.get(
				`http://api.vk.com/method/groups.getById?group_ids=${vkGroupID}&fields=members_count&access_token=${vkAPIKey}&v=5.81`
			)
			.then(res => res.data.response[0].members_count)
	} catch (error) {
		console.log('Ошибка при получении VK подписчиков')
		if (axios.isAxiosError(error)) {
			console.error('Ошибка Axios:', error.message)
		} else if (error instanceof Error) {
			console.error('Общая ошибка:', error.message)
		} else {
			console.error('Неизвестная ошибка:', error)
		}
	}
	return vkSubscribers
}

export async function getRutubeSubscribers() {
	const rutubeID = '24837155'
	let rutubeSubscribers = undefined
	try {
		rutubeSubscribers = await axios
			.get(`https://rutube.ru/api/profile/user/${rutubeID}`)
			.then(res => res.data.subscribers_count)
	} catch (error) {
		console.log('Ошибка при получении Rutube подписчиков')
		if (axios.isAxiosError(error)) {
			console.error('Ошибка Axios:', error.message)
		} else if (error instanceof Error) {
			console.error('Общая ошибка:', error.message)
		} else {
			console.error('Неизвестная ошибка:', error)
		}
	}
	return rutubeSubscribers
}

export async function getZenSubscribers() {
	const url = 'https://dzen.ru/mpc'
	try {
		// 1. Получаем HTML страницы
		const response = await axios.post(url, {
			headers: {
				'User-Agent':
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
				'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
			},
			timeout: 10000,
		})
		const html = response.data

		// 2. Загружаем HTML в Cheerio
		const $: cheerio.CheerioAPI = cheerio.load(html)

		// 3. Ищем все элементы, содержащие ключевые слова
		// :contains() чувствителен к регистру в Cheerio
		const potentialElements = $(
			'*:contains("тыс"), *:contains("тыс."), *:contains("млн"), *:contains("млн.")'
		)

		let subscriberText: string | null = null
		let foundElementTag: string | undefined = undefined

		// 4. Фильтруем найденные элементы
		potentialElements.each((index: number, el) => {
			// Если уже нашли подходящий текст, дальше не ищем
			if (subscriberText !== null) {
				return
			}

			if (el.type === 'tag' || el.type === 'script' || el.type === 'style') {
				const element = $(el)
				const text = element.text().trim()

				// Применяем строгий фильтр по формату: число (возможно, с .,) + слово/буква
				const counterRegex = /^\s*\d+([.,]\d+)?\s*(тыс\.?|млн\.?|k|m)\s*$/i

				if (counterRegex.test(text)) {
					// Нашли первый элемент, текст которого точно соответствует формату счетчика
					subscriberText = text
					foundElementTag = el.tagName as string
					console.log(
						`Найден подходящий текст: "${subscriberText}" в элементе <${foundElementTag}>`
					)
				}
			}
		})

		// 5. Проверяем, был ли найден текст, прежде чем пытаться его использовать
		if (subscriberText === null) {
			console.warn(
				`Не удалось найти на странице элемент с текстом, соответствующим формату счетчика (число + тыс/тыс./млн/млн.) на ${url}.`
			)
			console.warn(
				'Возможно, контент загружается динамически, формат текста изменился, или страница не загрузилась корректно.'
			)
			return undefined
		}

		// 6. Очищаем найденный текст и преобразуем в число
		if (subscriberText !== null) {
			let numStr = (subscriberText as string).replace(/\s+/g, '').toLowerCase()

			let multiplier = 1

			if (numStr.includes('тыс')) {
				multiplier = 1000
				numStr = numStr.replace(/тыс\.?/g, '')
			} else if (numStr.includes('млн')) {
				multiplier = 1000000
				numStr = numStr.replace(/млн\.?/g, '')
			}

			numStr = numStr.replace(',', '.')
			numStr = numStr.replace(/[^\d.]/g, '')

			const count = parseFloat(numStr)

			if (isNaN(count)) {
				console.error(
					`Не удалось преобразовать очищенную строку "${numStr}" (из "${subscriberText}") в число.`
				)
				return undefined
			}

			return Math.round(count * multiplier)
		}
	} catch (error) {
		// Обработка ошибок
		if (axios.isAxiosError(error)) {
			console.error(`Ошибка при загрузке URL ${url}: ${error.message}`)
			if (error.response) {
				console.error(
					`Статус ответа: ${error.response.status} ${error.response.statusText}`
				)
			} else if (error.request) {
				console.error('Запрос был сделан, но ответ не получен.')
			} else {
				console.error('Ошибка при настройке запроса:', error.message)
			}
		} else {
			console.error(`Произошла неизвестная ошибка при парсинге ${url}:`, error)
		}
		return undefined
	}
}
