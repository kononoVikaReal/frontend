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
import {
	getRutubeSubscribers,
	getVkSubscribers,
	getYoutubeSubscribers,
	getZenSubscribers,
} from '@/lib/subscribers'

// Включаем ISR
// Каждые 60 секунд ревалидируем данные от запросов
export const revalidate = 60

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

				{/* Используем nullish coalescing для обработки undefined */}
				<TenthElement
					youtubeSubscribers={youtubeSubscribers ?? 0}
					vkSubscribers={vkSubscribers ?? 0}
					zenSubscribers={zenSubscribers ?? 0}
					rutubeSubscribers={rutubeSubscribers ?? 0}
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
