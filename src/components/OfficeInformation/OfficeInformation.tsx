'use client'
import Link from 'next/link'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { City, useCity } from '../CityContext/CityContext'

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

const Location01Icon = (props: React.SVGProps<SVGSVGElement>) => (
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
			d='M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z'
			stroke='currentColor'
			strokeWidth='1.5'
		/>
		<path
			d='M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z'
			stroke='currentColor'
			strokeWidth='1.5'
		/>
	</svg>
)

const EnergyIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
			d='M6.19351 11.3965L12.192 3.31186C12.6611 2.67957 13.5405 3.07311 13.5405 3.91536V10.1729C13.5405 10.6775 13.8853 11.0865 14.3107 11.0865H17.2283C17.891 11.0865 18.2443 12.0134 17.8065 12.6035L11.808 20.6881C11.3389 21.3204 10.4595 20.9269 10.4595 20.0846V13.8271C10.4595 13.3225 10.1147 12.9135 9.68931 12.9135H6.77173C6.10895 12.9135 5.75566 11.9866 6.19351 11.3965Z'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)

// Функция для форматирования названий городов
const formatCityName = (city: City): string => {
	switch (city) {
		case 'Saint-Petersburg':
			return 'Санкт-Петербург'
		case 'Tula':
			return 'Тула'
		case 'Krasnodar':
			return 'Краснодар'
		case 'Sevastopol':
			return 'Севастополь'
		default:
			return city
	}
}

// Данные о городах (филиалах) и их адресах
const cityData = {
	'Saint-Petersburg': {
		address: 'Петроградская набережная, дом 20, БЦ "Веда-Хаус", офис 223',
		// phone: '8 (800) 777-17-00',
	},
	Tula: {
		address: 'ул. Пушкина, дом 45, офис 101',
		// phone: '8 (800) 777-17-00',
	},
	Krasnodar: {
		address: 'ул. Красная, дом 78, офис 305',
		// phone: '8 (800) 777-17-00',
	},
	Sevastopol: {
		address: 'ул. Морская, дом 56, офис 210',
		// phone: '8 (800) 777-17-00',
	},
}

const OfficeInformation: React.FC<{
	shareCity?: Dispatch<SetStateAction<City>>
}> = ({ shareCity }) => {
	// const [currentCity, setCurrentCity] = useState<City>('Saint-Petersburg')
	const { currentCity, setCurrentCity, cities } = useCity()
	const [isOpen, setIsOpen] = useState(false)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const handleCitySelect = (city: City) => {
		setCurrentCity(city)
		if (shareCity) {
			shareCity(city)
		}
		setIsOpen(false)
	}

	return (
		<div className='p-4'>
			<div
				className={`flex flex-col text-sm gap-2 ${
					shareCity ? 'items-center' : 'items-end'
				} `}
			>
				{/* Селектор города */}
				<div className='relative mb-4 md:mb-0'>
					<button
						onClick={toggleDropdown}
						className={`flex items-center justify-center ${
							isOpen && 'min-w-48'
						} px-3 py-1 text-white bg-transparent border border-white rounded-full hover:bg-gray-800 transition-all duration-300`}
					>
						<span className='text-center'>{formatCityName(currentCity)}</span>
						<svg
							className={`w-5 h-5 ml-2 transition-transform duration-200 ${
								isOpen ? 'transform rotate-180' : ''
							}`}
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							aria-hidden='true'
						>
							<path
								fillRule='evenodd'
								d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
								clipRule='evenodd'
							/>
						</svg>
					</button>

					{isOpen && (
						<div className='absolute z-20 w-full mt-2 bg-#333131 border border-gray-200 rounded-xl shadow-md transition-all duration-200 ease-out backdrop-blur-sm'>
							<ul className='py-1 overflow-auto text-base rounded-md max-h-60 focus:outline-none sm:text-sm'>
								{cities.map(city => (
									<li
										key={city}
										className={`${
											shareCity && 'text-black bg-white rounded-sm m-1'
										}  cursor-pointer select-none relative py-2 pl-3 pr-9 ${
											city === currentCity
												? 'rounded-sm m-1 bg-blue-50 text-blue-600 font-medium border-l-2 border-blue-500'
												: ''
										}`}
										onClick={() => handleCitySelect(city)}
									>
										{formatCityName(city)}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>

				{/* Информация об адресе и телефоне */}
				<div
					className={`flex flex-col ${
						shareCity ? 'items-center' : 'items-end'
					} gap-2`}
				>
					<div className='flex items-center gap-2'>
						<Location01Icon className='w-5 h-5' />
						<span className='hover:select-all'>
							{cityData[currentCity].address}
						</span>
					</div>

					<div className='flex items-center gap-4'>
						<Link
							// href={`tel:${cityData[currentCity].phone.replace(
							// 	/(?!^\+)\D/g,
							// 	''
							// )}`}
							href={`tel:88007771700`}
							className='flex items-center gap-2 transition-all duration-500 ease-in-out hover:scale-105 group'
						>
							<CallIcon className='w-5 h-5' />
							{/* <span>{cityData[currentCity].phone}</span> */}
							<span>8 (800) 777-17-00</span>
							<div className='absolute -bottom-3 left-0 w-0 h-0.5 bg-gray-500 rounded-full transition-all duration-500 ease-in-out group-hover:w-full'></div>
						</Link>

						<div className='flex items-center gap-2 text-[#EBD63A]'>
							<EnergyIcon className='text-[#EBD63A] w-5 h-5' />
							<span>Звоните! Мы работаем</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OfficeInformation
