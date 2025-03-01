import Image from 'next/image'

const SixthElement = () => {
	return (
		<div className='bg-slate-50 text-[#16161c] pb-8'>
			<div className='pt-10 mx-auto max-w-[1200px]'>
				<div className="relative before:content-[''] before:block before:border before:border-elite before:absolute before:w-[1000px] before:-left-[1039px] before:top-3">
					<span className='text-3xl leading-[45px] w-96'>
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
						<div className='relative h-full w-full'>
							<Image
								src='/BusinessCenter1.webp'
								alt='Atrium with glass ceiling'
								layout='fill'
								objectFit='cover'
								className='transition-transform duration-300 hover:scale-105'
							/>
						</div>
					</div>

					{/* Маленькие картинки */}
					<div className='overflow-hidden rounded-lg'>
						<div className='relative h-40 w-full'>
							<Image
								src='/BusinessCenter2.webp'
								alt='Cozy meeting area with plants'
								layout='fill'
								objectFit='cover'
								className='transition-transform duration-300 hover:scale-105'
							/>
						</div>
					</div>

					<div className='overflow-hidden rounded-lg'>
						<div className='relative h-40 w-full'>
							<Image
								src='/BusinessCenter3.webp'
								alt='Workspace with Broker display'
								layout='fill'
								objectFit='cover'
								className='transition-transform duration-300 hover:scale-105'
							/>
						</div>
					</div>

					<div className='overflow-hidden rounded-lg'>
						<div className='relative h-40 w-full'>
							<Image
								src='/BusinessCenter4.webp'
								alt='Indoor garden space'
								layout='fill'
								objectFit='cover'
								className='transition-transform duration-300 hover:scale-105'
							/>
						</div>
					</div>

					<div className='overflow-hidden rounded-lg'>
						<div className='relative h-40 w-full'>
							<Image
								src='/BusinessCenter5.webp'
								alt='Meeting table with chairs'
								layout='fill'
								objectFit='cover'
								className='transition-transform duration-300 hover:scale-105'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SixthElement
