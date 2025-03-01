import Link from 'next/link'

const SocialHeader = () => {
	return (
		<div className='w-full bg-socialHeader h-10 flex justify-center items-center gap-4'>
			<div className='flex justify-center items-center gap-4'>
				<span className='text-[#333333] text-sm font-medium'>
					Telegram - публичный канал МПЦ
				</span>
				<Link
					href={'https://t.me/mpcrf'}
					target='_blank'
					className='bg-[#222222] rounded-md px-8 py-1 font-medium text-white text-sm transition-all duration-300 hover:shadow-lg hover:scale-105'
				>
					Подписаться
				</Link>
			</div>
			<div className='flex justify-center items-center gap-4'>
				<span className='text-[#333333] text-sm font-medium'>
					Telegram - частный клуб МПЦ
				</span>
				<Link
					href={'https://t.me/mpcrf'}
					target='_blank'
					className='bg-[#222222] rounded-md px-8 py-1 font-medium text-white text-sm transition-all duration-300 hover:shadow-lg hover:scale-105'
				>
					Вступить
				</Link>
			</div>
		</div>
	)
}

export default SocialHeader
