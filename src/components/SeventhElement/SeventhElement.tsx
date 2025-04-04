import Image from 'next/image'
import FeedBackForm from '../FeedBackForm/FeedBackForm'

const items = [
	{
		title: 'Прозрачный договор',
		image: '/DealCard1.webp',
	},
	{
		title: 'Персональный юрист',
		image: '/DealCard2.webp',
	},
	{
		title: 'Доступ в личный кабинет',
		image: '/DealCard3.webp',
	},
]

const SeventhElement = () => {
	return (
		<div className='mx-auto max-w-[1200px] mb-14'>
			<div className='pt-10'>
				<div className='mb-4'>
					<div className="relative before:content-[''] before:block before:border before:border-elite before:absolute before:w-[1000px] before:-left-[1039px] before:top-3 mb-4">
						<span className='text-[28px] leading-[45px] font-prata '>
							Качественное юридическое сопровождение
						</span>
					</div>
					<div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
						{items.map((item, index) => (
							<div
								key={index}
								className='relative rounded-lg overflow-hidden group hover:scale-110 transition-all ease-out duration-700'
							>
								<div className='relative h-64 w-full'>
									<div className='absolute bottom-0 left-0 p-6 z-20 w-full  blur-xl bg-black'></div>
									<div className='absolute bottom-0 left-0 p-2 z-20 w-full '>
										<h2 className='text-lg font-semibold'>
											{index + 1}. {item.title}
										</h2>
									</div>
									<div className='h-full w-full overflow-hidden rounded-lg'>
										<Image
											src={item.image}
											alt={item.title}
											width={500}
											height={300}
											className='object-cover w-full h-full'
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<FeedBackForm beforeFooter={false} />
			</div>
		</div>
	)
}

export default SeventhElement
