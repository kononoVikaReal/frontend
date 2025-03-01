import Link from 'next/link'
import { CallIcon, MPCLogo, TelegramIcon, WhatsappIcon } from '../Menu/Menu'

const Footer = () => {
	return (
		<div className='border-t-4 border-t-red-500 rounded-md'>
			<div className='flex max-w-[1600px] justify-between mx-auto p-8 '>
				<MPCLogo />
				<div className='flex justify-between items-center gap-4'>
					{/* Способы связи */}
					<div className='flex gap-5'>
						<Link
							href={'https://t.me/mpcrf'}
							target='_blank'
							className='flex gap-4 items-center relative group cursor-pointer'
						>
							<TelegramIcon className='transition-all duration-300 ease-in-out group-hover:fill-blue-500' />
							<span>Telegram</span>
							<div className='absolute -bottom-3 left-0 w-0 h-0.5 bg-blue-500 rounded-full transition-all duration-500 ease-in-out group-hover:w-full'></div>
						</Link>

						<Link
							href={`https://wa.me/79291137777?text=Здравствуйте!%20Меня%20зовут%20[Ваше%20имя].%20Я%20обращаюсь %20к%20вам%20по%20поводу%20следующей%20ситуации:%20[Ваша%20ситуация]`}
							target='_blank'
							className='flex gap-4 items-center relative group cursor-pointer '
						>
							<WhatsappIcon className='transition-all duration-300 ease-in-out group-hover:fill-green-500' />
							<span>WhatsApp</span>
							<div className='absolute -bottom-3 left-0 w-0 h-0.5 bg-green-500 rounded-full transition-all duration-500 ease-in-out group-hover:w-full'></div>
						</Link>

						<Link
							href={`tel:+78007771700`}
							target='_blank'
							className='flex gap-4 items-center relative group cursor-pointer'
						>
							<CallIcon className='transition-all duration-300 ease-in-out group-hover:fill-gray-500' />
							<span>Позвонить нам</span>
							<div className='absolute -bottom-3 left-0 w-0 h-0.5 bg-gray-500 rounded-full transition-all duration-500 ease-in-out group-hover:w-full'></div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
