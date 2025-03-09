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

export default function Home() {
	return (
		<main className='bg-background selection:text-elite'>
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
			<TenthElement />
			<EleventhElement />
			<TwelfthElement />
			<ThirteenthElement />
			<FourteenthElement />
			<VisitOfficeElement />
			<Footer />
		</main>
	)
}
