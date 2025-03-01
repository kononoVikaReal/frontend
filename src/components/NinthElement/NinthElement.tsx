import Image from 'next/image'
import Link from 'next/link'

const NinthElement = () => {
	return (
		<div className='mx-auto max-w-[1200px] mb-14'>
			<div className='pt-10'>
				<div className='container mx-auto px-4 py-16'>
					<div className='grid md:grid-cols-2 gap-8 items-center'>
						<div className='space-y-6'>
							<h1 className='text-3xl '>Публичный канал в Телеграм</h1>
							<p className='text-lg text-gray-300'>
								Будь в курсе всех новостей и событий МПЦ
							</p>
						</div>

						<div className='bg-[#2a2a2a] p-12 rounded-lg flex flex-col md:flex-row items-center gap-6'>
							<div className='space-y-4 flex-1'>
								<p className='text-base'>
									Telegram-канал наполнен полезным и интересным контентом, над
									которым работает целая команда профессионалов
								</p>
								<div className='w-full md:max-w-fit bg-blue-600 hover:bg-blue-700 font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:scale-[1.05]'>
									<Link href='https://t.me/mpcrf' target='_blank'>
										Подписаться
									</Link>
								</div>
							</div>
							{/* QR-КОД */}
							<div className='flex-shrink-0 hover:scale-110 transition-all ease-out duration-500'>
								<div className='relative w-36 h-36 '>
									<Image
										src='/PublicTelegramQR.jpg'
										alt='QR Code for Telegram Channel'
										width={150}
										height={150}
										className='rounded-lg'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Секция про компанию */}
				<div className='container mx-auto px-4 py-16'>
					<h2 className='text-3xl md:text-[31px] font-bold text-center text-elite mb-8'>
						Компания дает все инструменты для развития Юристов
					</h2>
					<p className='text-lg text-center text-gray-300 mb-12'>
						Возможность роста, возможность развиваться как спикер на нашу
						аудиторию
					</p>

					<div className='grid md:grid-cols-4 gap-4 '>
						<div className='col-span-2 overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:ring-4 hover:ring-elite'>
							<Image
								src='/SpeakerAdvantage1.webp'
								alt='Business presentation'
								width={608}
								height={352}
								className='w-full h-72 object-cover'
							/>
						</div>
						<div className='col-span-1 overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:ring-4 hover:ring-elite'>
							<Image
								src='/SpeakerAdvantage2.webp'
								alt='Business meeting'
								width={279}
								height={352}
								className='w-full h-72 object-cover'
							/>
						</div>
						<div className='col-span-1 overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:ring-4 hover:ring-elite'>
							<Image
								src='/SpeakerAdvantage3.webp'
								alt='Team working'
								width={279}
								height={352}
								className='w-full h-72 object-cover'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NinthElement
