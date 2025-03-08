import Image from 'next/image'

const speakers = [
	{
		avatar: '/IgorMatveev.png',
		name: 'Игорь Владимирович Матвеев',
		role: 'Автор проекта, юрист',
		description: 'Окончил университет МВД России',
	},
	{
		avatar: '/MuxtarSaidovich.png',
		name: 'Мухтар Саидович Магомедов',
		role: 'Юрист',
		description: 'Окончил Вологодский институт права и экономики ФСИН России',
	},
	{
		avatar: '/VadimGennadevich.png',
		name: 'Вадим Геннадьевич Ерхов',
		role: 'Юрист',
		description: 'Окончил Московскую государственную юридическую академию',
	},
	{
		avatar: '/JuliaVladimirovna.png',
		name: 'Юлия Владимировна Власова',
		role: 'Адвокат по соглашению',
		description:
			'Окончила институт внешнеэкономических связей экономики и права',
	},
]

const ThirteenthElement = () => {
	return (
		<div className='mx-auto max-w-[1200px] mb-14'>
			<div className='pt-10'>
				<div className='container mx-auto p-4'>
					<div className="relative before:content-[''] before:block before:border before:border-elite before:absolute before:w-[1000px] before:-left-[1039px] before:top-3 mb-4">
						<span className='text-[28px] leading-[45px] font-prata '>
							Спикеры МПЦ
						</span>
					</div>
					{/* Спикеры */}
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8'>
						{speakers.map((speaker, index) => (
							<div
								key={index}
								className='relative bg-gray-900 p-6 rounded-2xl flex items-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_4px_30px_rgba(96,165,250,0.4)] group'
							>
								<div className='relative flex-shrink-0'>
									<Image
										alt={`Portrait of ${speaker.name}`}
										className='rounded-full border-4 border-gray-700 transition-all duration-300 group-hover:border-blue-400'
										height={96}
										width={96}
										src={speaker.avatar}
									/>
								</div>

								<div className='ml-6 w-full'>
									<h2 className='text-xl font-bold text-white'>
										{speaker.name}
									</h2>
									<p className='text-gray-400'>{speaker.role}</p>
									{/* РАЗДЕЛИТЕЛЬ */}
									<div className='mt-2 h-1 w-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 transition-opacity group-hover:opacity-60 rounded-full'></div>

									<p className='mt-3 text-gray-300 text-sm leading-relaxed'>
										{speaker.description}
									</p>
								</div>

								{/* Декоративный эффект на фоне */}
								<div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
									<div className='absolute inset-0 rounded-2xl border border-blue-400 animate-pulse'></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ThirteenthElement
