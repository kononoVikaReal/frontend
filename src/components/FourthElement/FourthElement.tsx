import AdvantageCard from '../AdvantageCard/AdvantageCard'

const items = [
	{
		heading: 'Безупречная репутация',
		textColor: 'white',
		icon: '/FirstAdvantage.webp',
	},
	{
		heading: 'Мощный и известный бренд',
		textColor: 'black',
		icon: '/SecondAdvantage.webp',
	},
	{
		heading: 'Сильная команда юристов',
		textColor: 'black',
		icon: '/SecondAdvantage.webp',
	},
	{
		heading: 'Огромный опыт',
		textColor: 'white',
		icon: '/FirstAdvantage.webp',
	},
	{
		heading: 'Максимально быстрые решения',
		textColor: 'white',
		icon: '/FirstAdvantage.webp',
	},
]

const FourthElement = () => {
	return (
		<div className='bg-[#ECECF2] pb-4'>
			<div className='mx-auto max-w-[1200px] mb-14 text-black'>
				<div className='pt-10'>
					<div className="relative before:content-[''] before:block before:border before:border-elite before:absolute before:w-[1000px] before:-left-[1039px] before:top-3 mb-4">
						<span className='text-[28px] leading-[45px] font-prata '>
							Поручите решение ваших проблем надежному и опытному партнеру
						</span>
					</div>
				</div>
				<h2 className='text-base font-medium text-gray-800 mb-6'>
					Почему выбираю МПЦ
				</h2>
				<div className='flex gap-4'>
					{items.map((item, index) => (
						<AdvantageCard key={index} item={item} height='307px' />
					))}
				</div>
			</div>
		</div>
	)
}

export default FourthElement
