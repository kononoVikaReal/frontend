'use client'
import { useCity } from '../CityContext/CityContext'
import OfficesMap from '../OfficesMap/OfficesMap'

const VisitOfficeElement = () => {
	const { currentCity } = useCity()
	return (
		<div className='relative min-h-screen'>
			{/* Фоновая картинка на всю ширину и высоту */}
			<div className='absolute inset-0 h-full w-full'>
				<OfficesMap />
			</div>
			{/* Контент в левом верхнем углу */}
			{currentCity === 'Saint-Petersburg' && (
				<div className='max-w-[1200px] mx-auto relative z-10 pt-16 '>
					<div className='bg-white rounded-lg shadow-lg p-6 max-w-md text-black '>
						<h2 className='text-2xl font-prata leading-tight'>
							Посетите наш офис в центре Санкт-Петербурга
						</h2>
						<p className='font-bold mt-2'>Центральный офис:</p>
						<div className='flex items-center mt-2 text-gray-600'>
							<span className=''>📍</span>
							<span className='ml-4'>
								Петроградская набережная, дом 20, БЦ &quot;Веда-Хаус&quot;, офис
								223
							</span>
						</div>
						<div className='flex items-center mt-1 text-gray-600'>
							<span className=''>🚇</span>
							<span className='ml-2'>
								От метро до нашего офиса 7 минут пешком
							</span>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default VisitOfficeElement
