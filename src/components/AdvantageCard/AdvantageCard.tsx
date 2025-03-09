import Image from 'next/image'

interface AdvantageType {
	heading: string
	textColor: string
	icon: string
}

const AdvantageCard = ({
	item,
	height,
}: {
	item: AdvantageType
	height: string
}) => {
	return (
		<div
			className={`relative overflow-hidden rounded-xl shadow-lg ${
				height === '307px' ? 'h-[307px]' : 'h-[448px]'
			} w-full max-w-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:ring-4 hover:ring-blue-200 hover:ring-opacity-70`}
		>
			{/* Картинка */}
			<div className='absolute inset-0'>
				<Image
					src={item.icon}
					alt={item.heading}
					fill={true}
					className='w-full h-full object-cover'
				/>
				<div className='absolute inset-0 '></div>
			</div>

			{/* Контент */}
			<div
				className={`relative h-full flex flex-col justify-start p-6 ${
					item.textColor === 'white' ? 'text-white' : 'text-black'
				} text-center`}
			>
				<h3
					className={`${
						height === '307px' ? 'font-semibold' : 'font-bold'
					} font-semibold mb-2`}
				>
					{item.heading}
				</h3>
			</div>
		</div>
	)
}

export default AdvantageCard
