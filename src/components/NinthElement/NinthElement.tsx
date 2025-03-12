import Image from 'next/image'
import Link from 'next/link'

const NinthElement = () => {
	return (
		<div className='mx-auto max-w-[1200px] mb-10'>
			<div className='pt-6'>
				<div className='container mx-auto p-2'>
					<div className='grid md:grid-cols-2 gap-8 items-center'>
						<div className='space-y-6'>
							<h1 className='text-[28px] leading-[45px] font-prata'>
								Публичный канал в Телеграм
							</h1>
							<p className='text-lg text-gray-300'>
								Будь в курсе всех новостей и событий МПЦ
							</p>
						</div>

						<div className='bg-[#2a2a2a] p-12 rounded-lg flex flex-col md:flex-row gap-6'>
							<div className='flex flex-col flex-1 justify-between gap-4'>
								<p className='text-base leading-[21px]'>
									Telegram-канал наполнен полезным и интересным контентом, над
									которым работает целая команда профессионалов
								</p>
								<Link
									className='w-full md:max-w-fit bg-[#55A4FC] font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:scale-[1.05]'
									href='https://t.me/mpcrf'
									target='_blank'
								>
									Подписаться
								</Link>
							</div>
							{/* QR-КОД */}
							<div className='flex-shrink-0 hover:scale-110 transition-all ease-out duration-500'>
								<div className='relative w-36 h-36 '>
									<Image
										src='/PublicTelegramQR.jpg'
										alt='QR Code for public Telegram Channel'
										width={130}
										height={130}
										className='rounded-lg'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Секция про компанию */}
				<div className='container mx-auto px-4 py-12'>
					<h2 className='text-3xl md:text-[31px] text-center text-elite mb-8 font-prata'>
						Компания дает все инструменты для развития Юристов
					</h2>
					<p className='text-lg text-center text-gray-300 mb-12'>
						Возможность карьерного роста, возможность развиваться как спикер на
						нашу аудиторию
					</p>
					{/* Картинки */}
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
