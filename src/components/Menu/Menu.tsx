'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Menu01Icon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width={48}
		height={48}
		color={'#ffffff'}
		fill={'none'}
		{...props}
	>
		<path
			d='M4 5L20 5'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 12L20 12'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 19L20 19'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)

const Cancel01Icon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width={32}
		height={32}
		color={'#ffffff'}
		fill={'none'}
		{...props}
	>
		<path
			d='M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)

export const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width={32}
		height={32}
		color={'#ffffff'}
		fill={'none'}
		{...props}
	>
		<path
			d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinejoin='round'
		/>
		<path
			d='M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118'
			stroke='currentColor'
			strokeWidth='1.5'
		/>
	</svg>
)

export const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width={32}
		height={32}
		color={'#ffffff'}
		fill={'none'}
		{...props}
	>
		<path
			d='M11.9854 15.4083L15.2268 19.0936C16.4277 20.4589 17.0282 21.1416 17.6567 20.9754C18.2852 20.8092 18.5008 19.9108 18.9318 18.1138L21.3229 8.1459C21.9868 5.37832 22.3187 3.99454 21.5808 3.312C20.843 2.62947 19.564 3.13725 17.0061 4.15282L5.13876 8.86449C3.09293 9.67674 2.07001 10.0829 2.00507 10.7808C1.99842 10.8522 1.99831 10.9241 2.00474 10.9955C2.06754 11.6937 3.08921 12.1033 5.13255 12.9223C6.05838 13.2934 6.5213 13.479 6.8532 13.8344C6.89052 13.8743 6.9264 13.9157 6.96078 13.9584C7.26658 14.3384 7.39709 14.8371 7.65808 15.8344L8.14653 17.701C8.4005 18.6715 8.52749 19.1568 8.86008 19.223C9.19267 19.2891 9.48225 18.8867 10.0614 18.0819L11.9854 15.4083ZM11.9854 15.4083L11.6676 15.0771C11.3059 14.7001 11.1251 14.5117 11.1251 14.2775C11.1251 14.0433 11.3059 13.8548 11.6676 13.4778L15.2406 9.75409'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)

export const CallIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width={32}
		height={32}
		color={'#ffffff'}
		fill={'none'}
		{...props}
	>
		<path
			d='M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinejoin='round'
		/>
	</svg>
)

const InformationCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width={32}
		height={32}
		color={'#ffffff'}
		fill={'none'}
		{...props}
	>
		<path
			d='M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z'
			stroke='currentColor'
			strokeWidth='1.5'
		/>
		<path
			d='M12.2422 17V12C12.2422 11.5286 12.2422 11.2929 12.0957 11.1464C11.9493 11 11.7136 11 11.2422 11'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.992 8H12.001'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)

const AdventureIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width={32}
		height={32}
		color={'#ffffff'}
		fill={'none'}
		{...props}
	>
		<path
			d='M6.56457 19.5607C5.97878 20.1464 5.02903 20.1464 4.44325 19.5607C3.85746 18.9749 3.85746 18.0251 4.44325 17.4393C5.02903 16.8536 5.97878 16.8536 6.56457 17.4393C7.15035 18.0251 7.15035 18.9749 6.56457 19.5607Z'
			stroke='currentColor'
			strokeWidth='1.5'
		/>
		<path
			d='M6.00391 12H6.37548C6.90591 12 7.41462 12.2107 7.78969 12.5858L11.4181 16.2142C11.7932 16.5893 12.0039 17.098 12.0039 17.6284V18'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.5103 15L18.5559 8.37415C18.8887 8.10007 19.1248 7.7264 19.2294 7.30812L19.9938 4.25039C20.0307 4.10291 19.8971 3.96933 19.7496 4.0062L16.6919 4.77063C16.2736 4.8752 15.8999 5.11126 15.6258 5.44407L9 13.4897'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.9091 2.89255C12.86 2.29753 12.3355 2.00001 12.0007 2C11.6659 1.99999 11.1413 2.29748 10.0921 2.89247C9.07711 3.46803 8.01375 3.82383 6.97637 4.04312C4.91674 4.47852 3.88691 4.69622 3.44345 5.23327C3 5.77032 3 6.61265 3 8.29731V9.96205M12.0006 22C12.3126 22 12.6246 21.9587 12.9276 21.8762C13.4183 21.7426 13.8799 21.4552 14.8031 20.8804C16.8654 19.5964 17.8965 18.9545 18.6779 18.13C19.643 17.1117 20.3379 15.8876 20.7044 14.5603C20.9539 13.6568 20.9937 12.6829 21 11'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.5 17.5L9.5 14.5'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinejoin='round'
		/>
	</svg>
)

const LegalDocument02Icon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width={32}
		height={32}
		color={'#ffffff'}
		fill={'none'}
		{...props}
	>
		<path
			d='M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14Z'
			stroke='currentColor'
			strokeWidth='1.5'
		/>
		<path
			d='M8 18H16'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
		/>
		<path
			d='M7.04941 6.97656H16.9569M12.0148 6.97656V13.9827M12.0148 13.9827H11.4817M12.0148 13.9827H12.5414M8.01555 7.96462C7.29005 8.71035 6.08766 9.99631 6.61359 11.0676C7.08068 12.0191 7.74498 12.0358 8.01512 12.0358C8.28525 12.0358 8.98805 12.0191 9.45514 11.0676C9.98108 9.99631 8.74104 8.71035 8.01555 7.96462ZM15.9824 7.96462C15.2569 8.71035 14.0545 9.99631 14.5804 11.0676C15.0475 12.0191 15.7118 12.0358 15.9819 12.0358C16.2521 12.0358 16.9549 12.0191 17.422 11.0676C17.9479 9.99631 16.7079 8.71035 15.9824 7.96462Z'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)

const Contact02Icon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width={32}
		height={32}
		color={'#ffffff'}
		fill={'none'}
		{...props}
	>
		<path
			d='M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2H13.5C17.2712 2 19.1569 2 20.3284 3.17157C21.5 4.34315 21.5 6.22876 21.5 10V14C21.5 17.7712 21.5 19.6569 20.3284 20.8284C19.1569 22 17.2712 22 13.5 22H12C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10Z'
			stroke='currentColor'
			strokeWidth='1.5'
		/>
		<path
			d='M9.79993 11.9741C9.37332 11.2302 9.16733 10.6228 9.04313 10.007C8.85943 9.09641 9.27981 8.20686 9.97622 7.63926C10.2706 7.39937 10.608 7.48133 10.782 7.79358L11.1749 8.49851C11.4864 9.05725 11.6421 9.33663 11.6112 9.63282C11.5803 9.929 11.3703 10.1702 10.9503 10.6527L9.79993 11.9741ZM9.79993 11.9741C10.6634 13.4797 12.0185 14.8356 13.5259 15.7001M13.5259 15.7001C14.2698 16.1267 14.8772 16.3327 15.493 16.4569C16.4036 16.6406 17.2931 16.2202 17.8607 15.5238C18.1006 15.2294 18.0187 14.892 17.7064 14.718L17.0015 14.3251C16.4427 14.0136 16.1634 13.8579 15.8672 13.8888C15.571 13.9197 15.3298 14.1297 14.8473 14.5497L13.5259 15.7001Z'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinejoin='round'
		/>
		<path
			d='M5 6L2.5 6M5 12L2.5 12M5 18H2.5'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)

export const MPCLogo = () => (
	<div className='flex justify-center items-center content-center gap-4'>
		<div className='flex flex-col'>
			<span className='text-xl'>Межрегиональный</span>
			<span className='text-center text-2xl'>правовой центр</span>
		</div>
		<Image
			src={'/MPCIcon.png'}
			alt={'MPC Icon'}
			width={50}
			height={50}
			quality={100}
			style={{ objectFit: 'cover' }}
		/>
	</div>
)

// const StickyMenu = () => {
// 	const [isVisible, setIsVisible] = useState(false)

// 	useEffect(() => {
// 		const checkVisibility = () => {
// 			const firstSection = document.getElementById('forStickyMenu')
// 			console.log('firstSection: ', firstSection)
// 			if (firstSection) {
// 				const rect = firstSection.getBoundingClientRect()

// 				// Задаем границу, после которой делаем видимым sticky-меню
// 				setIsVisible(rect.bottom <= 20)
// 			}
// 		}

// 		// Проверяем на видимость элемент
// 		checkVisibility()

// 		// Добавление прослушивания события
// 		window.addEventListener('scroll', checkVisibility)

// 		// Удаление прослушивания события
// 		return () => {
// 			window.removeEventListener('scroll', checkVisibility)
// 		}
// 	}, [])

// 	return (
// 		<nav
// 			className={cn(
// 				'fixed top-0 left-0 w-full bg-background backdrop-blur-lg z-30 shadow-md transition-transform duration-500',
// 				isVisible ? 'translate-y-0' : '-translate-y-full'
// 			)}
// 		>
// 			<div className='container px-4 py-4 max-w-[1200px] mx-auto'>
// 				<div className='flex items-center justify-between'>
// 					<Menu />
// 					<div className='flex gap-4'>
// 						<Link
// 							href='#'
// 							className='hover:text-gray-300 transition-all duration-300 ease-in-out'
// 						>
// 							Наши услуги
// 						</Link>
// 						<Link
// 							href='#'
// 							className='hover:text-gray-300 transition-all duration-300 ease-in-out'
// 						>
// 							Судебная практика
// 						</Link>
// 						<Link
// 							href='#'
// 							className='hover:text-gray-300 transition-all duration-300 ease-in-out'
// 						>
// 							Прайс-лист
// 						</Link>
// 						<Link
// 							href='#'
// 							className='hover:text-gray-300 transition-all duration-300 ease-in-out'
// 						>
// 							Контакты
// 						</Link>
// 					</div>
// 					<Link
// 						href={`tel:88007771700`}
// 						className='flex items-center gap-2 transition-all duration-500 ease-in-out hover:scale-105 group'
// 					>
// 						<CallIcon className='w-5 h-5' />
// 						<span>8 (800) 777-17-00</span>
// 						<div className='absolute -bottom-3 left-0 w-0 h-0.5 bg-gray-500 rounded-full transition-all duration-500 ease-in-out group-hover:w-full'></div>
// 					</Link>
// 				</div>
// 			</div>
// 		</nav>
// 	)
// }

// Меню после нажатия на 'бургер'
const FullMenu = ({
	closeMenu,
}: {
	closeMenu: React.Dispatch<React.SetStateAction<boolean>>
}) => (
	<div className='fixed inset-0 z-40 flex items-center justify-center bg-black/90 backdrop-blur-lg'>
		<div className='mt-40 relative w-full h-full max-w-[1200px] p-6 text-white '>
			{/* Кнопка закрытия */}
			<div className='relative flex items-center gap-14'>
				<div className=''>
					<Cancel01Icon
						className='transition-all duration-300 ease-in-out cursor-pointer hover:text-red-400'
						onClick={() => closeMenu(false)}
					/>
				</div>
				{/* Логотип */}
				<div className=''>
					<div className='relative flex flex-col'>
						{/* <Image
							src={'/MPCIcon.png'}
							alt={''}
							width={40}
							height={40}
							className='rounded-full absolute -top-5 -right-10'
						/>
						<span className='text-2xl'>Межрегиональный</span>
						<span className='text-center text-xl'>правовой центр</span> */}
						<MPCLogo />
					</div>
				</div>
			</div>

			<div className='mt-40 flex justify-between gap-8'>
				{/* Элементы меню */}
				<nav className='flex flex-col gap-6 text-lg'>
					<div className='flex items-center gap-4'>
						<InformationCircleIcon />
						<Link
							href='#'
							className='hover:text-gray-300 transition-all duration-300 ease-in-out'
						>
							Наши услуги
						</Link>
					</div>
					<div className='flex items-center gap-4'>
						<AdventureIcon />
						<Link
							href='#'
							className='hover:text-gray-300 transition-all duration-300 ease-in-out'
						>
							Судебная практика
						</Link>
					</div>
					<div className='flex items-center gap-4'>
						<LegalDocument02Icon />
						<Link
							href='#'
							className='hover:text-gray-300 transition-all duration-300 ease-in-out'
						>
							Прайс-лист
						</Link>
					</div>
					<div className='flex items-center gap-4'>
						<Contact02Icon />
						<Link
							href='#'
							className='hover:text-gray-300 transition-all duration-300 ease-in-out'
						>
							Контакты
						</Link>
					</div>
				</nav>
				<div className='flex justify-center flex-col gap-5'>
					<span className='text-2xl'>
						Свяжитесь с нами любым удобным способом
					</span>
					{/* РАЗДЕЛИТЕЛЬ */}
					<div className='mt-2 h-1 w-full bg-gradient-to-r from-elite to-purple-400 opacity-70 transition-opacity rounded-full'></div>

					<div className='flex justify-between items-center gap-5'>
						<div className='flex gap-5'>
							<Link
								href={`https://wa.me/79291137777?text=Здравствуйте!%20Меня%20зовут%20[Ваше%20имя].%20Я%20обращаюсь %20к%20вам%20по%20поводу%20следующей%20ситуации:%20[Ваша%20ситуация]`}
								target='_blank'
								className='relative group cursor-pointer'
							>
								<WhatsappIcon className='transition-all duration-300 ease-in-out hover:fill-green-500' />
								<div className='absolute -bottom-3 left-0 w-0 h-0.5 bg-green-500 rounded-full transition-all duration-500 ease-in-out group-hover:w-full'></div>
							</Link>

							<Link
								href={'https://t.me/mpcrf'}
								target='_blank'
								className='relative group cursor-pointer'
							>
								<TelegramIcon className='transition-all duration-300 ease-in-out hover:fill-blue-500' />
								<div className='absolute -bottom-3 left-0 w-0 h-0.5 bg-blue-500 rounded-full transition-all duration-500 ease-in-out group-hover:w-full'></div>
							</Link>

							<Link
								href={`tel:88007771700`}
								target='_blank'
								className='relative group cursor-pointer'
							>
								<CallIcon className='transition-all duration-300 ease-in-out hover:fill-gray-500' />
								<div className='absolute -bottom-3 left-0 w-0 h-0.5 bg-gray-500 rounded-full transition-all duration-500 ease-in-out group-hover:w-full'></div>
							</Link>
						</div>
						<Link
							href='#'
							className='py-3 px-9 bg-elite rounded-lg hover:bg-[#d5a257] hover:shadow-[0_0_10px_5px_rgba(213,162,87,0.3)] transition-all duration-300 ease-in-out'
							aria-label='Личный кабинет'
						>
							<span className='text-base'>Заказать звонок</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
)

// 'Начальное' меню
const Menu = () => {
	// Для меню по нажатию на 'бургер'
	const [showMenu, setShowMenu] = useState<boolean>(false)
	// Для sticky-меню
	const [isVisible, setIsVisible] = useState(false)
	// Для того, чтобы понять, с какого момента отобразить sticky-меню
	useEffect(() => {
		const checkVisibility = () => {
			const firstSection = document.getElementById('forStickyMenu')
			console.log('firstSection: ', firstSection)
			if (firstSection) {
				const rect = firstSection.getBoundingClientRect()

				// Задаем границу, после которой делаем видимым sticky-меню
				setIsVisible(rect.bottom <= 20)
			}
		}

		// Проверяем на видимость элемент
		checkVisibility()

		// Добавление прослушивания события
		window.addEventListener('scroll', checkVisibility)

		// Удаление прослушивания события
		return () => {
			window.removeEventListener('scroll', checkVisibility)
		}
	}, [])

	return (
		<>
			{/* Меню на весь экран */}
			{showMenu && <FullMenu closeMenu={setShowMenu} />}
			<div className='flex'>
				<div className='flex gap-20 items-center'>
					<Menu01Icon
						className='cursor-pointer transition-all duration-300 hover:scale-110'
						onClick={() => setShowMenu(prev => !prev)}
					/>
					<MPCLogo />
				</div>
			</div>

			{/* Sticky-меню */}
			<div
				className={cn(
					'fixed top-0 left-0 w-full bg-background backdrop-blur-lg z-30 shadow-md transition-transform duration-500',
					isVisible ? 'translate-y-0' : '-translate-y-full'
				)}
			>
				<div className='container px-4 py-4 max-w-[1200px] mx-auto'>
					<div className='flex items-center justify-between'>
						<div className='flex gap-20 items-center'>
							<Menu01Icon
								className='cursor-pointer transition-all duration-300 hover:scale-110'
								onClick={() => setShowMenu(prev => !prev)}
							/>
							<MPCLogo />
						</div>
						<div className='flex gap-4'>
							<Link
								href='#'
								className='hover:text-gray-300 transition-all duration-300 ease-in-out'
							>
								Наши услуги
							</Link>
							<Link
								href='#'
								className='hover:text-gray-300 transition-all duration-300 ease-in-out'
							>
								Судебная практика
							</Link>
							<Link
								href='#'
								className='hover:text-gray-300 transition-all duration-300 ease-in-out'
							>
								Прайс-лист
							</Link>
							<Link
								href='#'
								className='hover:text-gray-300 transition-all duration-300 ease-in-out'
							>
								Контакты
							</Link>
						</div>
						<Link
							href={`tel:88007771700`}
							className='flex items-center gap-2 transition-all duration-500 ease-in-out hover:scale-105 group'
						>
							<CallIcon className='w-5 h-5' />
							<span>8 (800) 777-17-00</span>
							<div className='absolute -bottom-3 left-0 w-0 h-0.5 bg-gray-500 rounded-full transition-all duration-500 ease-in-out group-hover:w-full'></div>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Menu
