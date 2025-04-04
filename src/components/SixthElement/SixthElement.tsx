import Image from 'next/image'

const businessCenterSmallImages = [
	{
		src: '/BusinessCenter2.webp',
		alt: 'Уютная зона для встреч с растениями',
	},
	{
		src: '/BusinessCenter3.webp',
		alt: 'Рабочее пространство с дисплеем брокера',
	},
	{ src: '/BusinessCenter4.webp', alt: 'Крытое садовое пространство' },
	{ src: '/BusinessCenter5.webp', alt: 'Стол для совещаний со стульями' },
]

const SixthElement = () => {
	return (
		<div className='bg-slate-50 text-[#16161c] pb-8'>
			<div className='pt-10 mx-auto max-w-[1200px]'>
				<div className="relative before:content-[''] before:block before:border before:border-elite before:absolute before:w-[1000px] before:-left-[1039px] before:top-3">
					<span className='text-[28px] leading-[45px] font-prata '>
						Лучшая инфраструктура
					</span>
				</div>
				<div className='mt-4 mb-8'>
					<span className='text-lg font-light text-[#16161c]'>
						Рабочие места в офисе класса А, переговорные зоны, пространства для
						встреч с клиентами. Наш главный офис находится в здании культурного
						наследия в историческом центре Санкт-Петербурга и имеет близость к
						крупнейшим достопримечательностям города.
					</span>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
					{/* Крупная картинка */}
					<div className='md:row-span-2 overflow-hidden rounded-lg'>
						<Image
							src='/BusinessCenter1.webp'
							alt='Атриум со стеклянным потолком'
							width={600}
							height={800}
							className='transition-transform duration-300 hover:scale-105 w-full h-full object-cover'
						/>
					</div>

					{/* Маленькие картинки */}
					{businessCenterSmallImages.map(({ src, alt }) => (
						<div key={src} className='overflow-hidden rounded-lg'>
							<Image
								src={src}
								alt={alt}
								width={400}
								height={160}
								className='transition-transform duration-300 hover:scale-105 w-full h-40 object-cover'
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default SixthElement
