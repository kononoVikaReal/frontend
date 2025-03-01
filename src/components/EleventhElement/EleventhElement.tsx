import Image from 'next/image'
import Link from 'next/link'

const EleventhElement = () => {
	return (
		<div className='mx-auto max-w-[1200px] mb-14'>
			<div className='pt-10'>
				<div className='container mx-auto px-4 py-16'>
					<div className='grid md:grid-cols-3 items-center'>
						<div className='col-span-1 space-y-6'>
							<h1 className='text-3xl'>Закрытый канал в Телеграм</h1>
							<p className='text-lg text-gray-300'>
								Хотите заглянуть за кулисы нашей жизни?
							</p>
						</div>
						<div className='bg-[#2a2a2a] p-10 rounded-lg flex flex-col md:flex-row items-start gap-6 col-span-2 '>
							<div className='space-y-4 flex-1'>
								<p className='text-base'>
									Эксклюзивный Telegram-канал, где мы делимся тем, что остаётся
									за кадром. Это не просто офисные будни, а настоящая жизнь -
									стримы и подкасты, консультации от Игоря Матвеева, а также
									смешные моменты, личные истории, лайфхаки и то, о чём мы
									обычно молчим
								</p>
								<div className='w-full md:max-w-fit bg-blue-600 hover:bg-blue-700 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105'>
									<Link href='https://t.me/mpcrf' target='_blank'>
										Подписаться
									</Link>
								</div>
							</div>
							{/* QR КОД */}
							<div className='flex-shrink-0 hover:scale-110 transition-all ease-out duration-500'>
								<div className='relative w-36 h-36'>
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
			</div>
		</div>
	)
}

export default EleventhElement
