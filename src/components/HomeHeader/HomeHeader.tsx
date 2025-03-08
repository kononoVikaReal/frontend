import Link from 'next/link'
import React from 'react'

// Иконки
const UserAccountIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width={20}
		height={20}
		color={'#fff'}
		fill={'none'}
		{...props}
	>
		<path
			d='M14 8.99988H18'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
		/>
		<path
			d='M14 12.4999H17'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
		/>
		<rect
			x='2'
			y='2.99988'
			width='20'
			height='18'
			rx='5'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinejoin='round'
		/>
		<path
			d='M5 15.9999C6.20831 13.4188 10.7122 13.249 12 15.9999'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.5 8.99988C10.5 10.1044 9.60457 10.9999 8.5 10.9999C7.39543 10.9999 6.5 10.1044 6.5 8.99988C6.5 7.89531 7.39543 6.99988 8.5 6.99988C9.60457 6.99988 10.5 7.89531 10.5 8.99988Z'
			stroke='currentColor'
			strokeWidth='1.5'
		/>
	</svg>
)

const ConversationIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width={20}
		height={20}
		color={'#ffffff'}
		fill={'none'}
		{...props}
	>
		<path
			d='M6.99994 6V5C6.99994 3.58579 6.99994 2.87868 7.43928 2.43934C7.87862 2 8.58573 2 9.99994 2H13.9999C15.4142 2 16.1213 2 16.5606 2.43934C16.9999 2.87868 16.9999 3.58579 16.9999 5V6C16.9999 7.41421 16.9999 8.12132 16.5606 8.56066C16.1213 9 15.4142 9 13.9999 9H12.9999L9.99994 11V9C8.58573 9 7.87862 9 7.43928 8.56066C6.99994 8.12132 6.99994 7.41421 6.99994 6Z'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinejoin='round'
		/>
		<path
			d='M3.59 18.7408C2.96122 19.162 1.31258 20.0221 2.31671 21.0983C2.80722 21.624 3.35352 22 4.04036 22H5.99997H7.95958C8.64642 22 9.19272 21.624 9.68323 21.0983C10.6874 20.0221 9.03872 19.162 8.40994 18.7408C6.93544 17.7531 5.0645 17.7531 3.59 18.7408Z'
			stroke='currentColor'
			strokeWidth='1.5'
		/>
		<path
			d='M15.59 18.7408C14.9612 19.162 13.3126 20.0221 14.3167 21.0983C14.8072 21.624 15.3535 22 16.0404 22H18H19.9596C20.6464 22 21.1927 21.624 21.6832 21.0983C22.6874 20.0221 21.0387 19.162 20.4099 18.7408C18.9354 17.7531 17.0645 17.7531 15.59 18.7408Z'
			stroke='currentColor'
			strokeWidth='1.5'
		/>
		<path
			d='M7.99997 13.5C7.99997 14.6046 7.10454 15.5 5.99997 15.5C4.8954 15.5 3.99997 14.6046 3.99997 13.5C3.99997 12.3954 4.8954 11.5 5.99997 11.5C7.10454 11.5 7.99997 12.3954 7.99997 13.5Z'
			stroke='currentColor'
			strokeWidth='1.5'
		/>
		<path
			d='M20 13.5C20 14.6046 19.1045 15.5 18 15.5C16.8954 15.5 16 14.6046 16 13.5C16 12.3954 16.8954 11.5 18 11.5C19.1045 11.5 20 12.3954 20 13.5Z'
			stroke='currentColor'
			strokeWidth='1.5'
		/>
	</svg>
)

const HomeHeader = () => {
	return (
		<header className='flex justify-end h-full px-4 mx-auto max-w-[1200px]'>
			<nav className='flex justify-center items-center gap-12'>
				{/* Личный кабинет */}
				<Link
					href='#'
					className='flex items-center gap-2 opacity-60 text-xs leading-[14px] font-medium duration-300 border-b-[3px] border-[gray] hover:border-[white] hover:opacity-100 group py-0 h-11'
					aria-label='Личный кабинет'
				>
					<UserAccountIcon className='w-4 h-4' />
					<span className='group-hover:text-white text-foreground'>
						Личный кабинет
					</span>
				</Link>

				{/* Получить консультацию */}
				<Link
					href='#'
					className='flex items-center gap-2 py-2  opacity-60 text-xs leading-[14px] font-medium duration-300 border-b-[3px] border-[gray] hover:border-[white] hover:opacity-100 h-11 group'
					aria-label='Получить консультацию'
				>
					<ConversationIcon className='w-4 h-4' />
					<span className='group-hover:text-white'>Получить консультацию</span>
				</Link>
			</nav>
		</header>
	)
}

export default HomeHeader
