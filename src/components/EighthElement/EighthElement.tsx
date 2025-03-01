import AdvantageCard from '../AdvantageCard/AdvantageCard'

const items = [
	{
		heading: 'Профессиональная упаковка',
		textColor: 'white',
		icon: '/FirstAdvantage.webp',
	},
	{
		heading: 'Система работы с клиентами',
		textColor: 'black',
		icon: '/SecondAdvantage.webp',
	},
	{
		heading: 'Коллектив и окружение',
		textColor: 'black',
		icon: '/SecondAdvantage.webp',
	},
	{
		heading: 'Обучение молодых юристов',
		textColor: 'white',
		icon: '/FirstAdvantage.webp',
	},
]

const EighthElement = () => {
	return (
		<div className='bg-slate-50 text-[#16161c] pb-8'>
			<div className='pt-10 mx-auto max-w-[1200px]'>
				<div className="relative before:content-[''] before:block before:border before:border-elite before:absolute before:w-[1000px] before:-left-[1039px] before:top-3">
					<span className='text-3xl leading-[45px] w-96'>
						Объединили лучшее от сферы оказания юридических услуг
					</span>
				</div>
				<div className='mt-6 flex gap-8'>
					{items.map((item, index) => (
						<AdvantageCard key={index} item={item} height='448px' />
					))}
				</div>
			</div>
		</div>
	)
}

export default EighthElement
