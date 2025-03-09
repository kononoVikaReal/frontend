'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Menu, { CallIcon } from '../Menu/Menu'

export default function StickyNav() {
	const [isVisible, setIsVisible] = useState(false)

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

		// Удаление прослушивания соыбтия
		return () => {
			window.removeEventListener('scroll', checkVisibility)
		}
	}, [])

	return (
		<nav
			className={cn(
				'fixed top-0 left-0 w-full bg-background backdrop-blur-lg z-30 shadow-md transition-transform duration-500',
				isVisible ? 'translate-y-0' : '-translate-y-full'
			)}
		>
			<div className='container px-4 py-4 max-w-[1200px] mx-auto'>
				<div className='flex items-center justify-between'>
					<Menu />
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
		</nav>
	)
}
