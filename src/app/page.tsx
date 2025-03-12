import { CityProvider } from '@/components/CityContext/CityContext'
import EighthElement from '@/components/EighthElement/EighthElement'
import EleventhElement from '@/components/EleventhElement/EleventhElement'
import FifthElement from '@/components/FifthElement/FifthElement'
import Footer from '@/components/Footer/Footer'
import FourteenthElement from '@/components/FourteenthElement/FourteenthElement'
import FourthElement from '@/components/FourthElement/FourthElement'
import HomeHeader from '@/components/HomeHeader/HomeHeader'
import NinthElement from '@/components/NinthElement/NinthElement'
import SecondElement from '@/components/SecondElement/SecondElement'
import SeventhElement from '@/components/SeventhElement/SeventhElement'
import SixthElement from '@/components/SixthElement/SixthElement'
import SocialHeader from '@/components/SocialHeader/SocialHeader'
import StartElement from '@/components/StartElement/StartElement'
import TenthElement from '@/components/TenthElement/TenthElement'
import ThirdElement from '@/components/ThirdElement/ThirdElement'
import ThirteenthElement from '@/components/ThirteenthElement/ThirteenthElement'
import TwelfthElement from '@/components/TwelfthElement/TwelfthElement'
import VisitOfficeElement from '@/components/VisitOfficeElement/VisitOfficeElement'
import axios from 'axios'

// Включаем ISR
// Каждые 60 секунд ревалидируем данные от запросов
export const revalidate = 60

async function getYoutubeSubscribers() {
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

async function getVkSubscribers() {
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

async function getZenSubscribers() {
	// На момент 2025 года у них нету API (по крайней мере, общедоступного)
	const zenSubscribers = 68400
	return zenSubscribers
}

async function getRutubeSubscribers() {
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

export default async function Home() {
	// Получение подписчиков
	// YOUTUBE
	const youtubeSubscribers = await getYoutubeSubscribers()
	// ВК
	const vkSubscribers = await getVkSubscribers()
	// Яндекс.Дзен
	const zenSubscribers = await getZenSubscribers()
	// RUTUBE
	const rutubeSubscribers = await getRutubeSubscribers()
	return (
		<main className='bg-background selection:text-elite'>
			<CityProvider>
				<SocialHeader />
				<HomeHeader />
				<StartElement />
				<SecondElement />
				<ThirdElement />
				<FourthElement />
				<FifthElement />
				<SixthElement />
				<SeventhElement />
				<EighthElement />
				<NinthElement />
				<TenthElement
					youtubeSubscribers={youtubeSubscribers}
					vkSubscribers={vkSubscribers}
					zenSubscribers={zenSubscribers}
					rutubeSubscribers={rutubeSubscribers}
				/>
				<EleventhElement />
				<TwelfthElement />
				<ThirteenthElement />
				<FourteenthElement />
				<VisitOfficeElement />
				<Footer />
			</CityProvider>
		</main>
	)
}
