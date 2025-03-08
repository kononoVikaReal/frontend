import Image from 'next/image'

const speakers = [
	{
		avatar: '/IgorMatveev.png',
		name: 'Игорь Матвеев',
		role: 'Автор проекта',
		description: 'Описание',
	},
	{
		avatar: '/MuxtarSaidovich.png',
		name: 'Мухтар Саидович',
		role: 'Юрист МПЦ',
		description: 'Описание',
	},
	{
		avatar: '/VadimGennadevich.png',
		name: 'Вадим Геннадьевич',
		role: 'Юрист МПЦ',
		description: 'Описание',
	},
	{
		avatar: '/JuliaVladimirovna.png',
		name: 'Юлия Владимировна',
		role: 'Юрист МПЦ',
		description: 'Описание',
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
								className='bg-gray-800 p-4 rounded-lg flex duration-300 ease-in transition-all hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(96,165,250,0.3)] opacity-80 hover:opacity-100 hover:before:absolute hover:before:inset-0 hover:before:border-2 hover:before:border-blue-400 hover:before:animate-pulse group'
							>
								<Image
									alt={`Portrait of ${speaker.name}`}
									className='rounded-xl mr-4'
									height='159'
									objectFit='scale-down'
									src={speaker.avatar}
									width='144'
								/>
								<div className='w-full'>
									<h2 className='text-lg font-semibold'>{speaker.name}</h2>
									<p className='text-gray-400'>{speaker.role}</p>
									<div className='mt-2 h-1 bg-gradient-to-r from-blue-400 to-purple-400 opacity-10 transition-opacity group-hover:opacity-50 rounded-full'></div>
									<div className='flex space-x-2 mt-2'>
										<i className='fas fa-envelope text-gray-400'>
											{speaker.description}
										</i>
									</div>
								</div>
							</div>
						))}
					</div>
					{/* Обратная связь */}
					<p className='text-center text-3xl mb-8'>
						Не упустите возможность решить проблему быстро и качественно
					</p>
					<div className='mx-auto max-w-fit flex gap-6'>
						{/* <div className='grid gap-2 text-xl'>
							<div className=''>
								<span> {'>'} Расскажите о проблеме</span>
							</div>
							<div className=''>
								<span> {'>'} Получите консультацию</span>
							</div>
							<div className=''>
								<span> {'>'} Станьте клиентом</span>
							</div>
							<div className=''>
								<span> {'>'} Забудьте о проблеме</span>
							</div>
						</div> */}
						<div className='grid gap-6 text-xl p-8 bg-[#ededed] rounded-lg'>
							<div className='flex items-center gap-4 hover:bg-white p-2 rounded-lg transition-all duration-300 cursor-pointer'>
								<span className='flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-black hover:scale-110'>
									1
								</span>
								<span className='text-gray-700 transition-all duration-300 hover:text-black hover:translate-x-1'>
									Расскажите о проблеме
								</span>
							</div>
							<div className='flex items-center gap-4 hover:bg-white p-2 rounded-lg transition-all duration-300 cursor-pointer'>
								<span className='flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-black hover:scale-110'>
									2
								</span>
								<span className='text-gray-700 transition-all duration-300 hover:text-black hover:translate-x-1'>
									Получите консультацию
								</span>
							</div>
							<div className='flex items-center gap-4 hover:bg-white p-2 rounded-lg transition-all duration-300 cursor-pointer'>
								<span className='flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-black hover:scale-110'>
									3
								</span>
								<span className='text-gray-700 transition-all duration-300 hover:text-black hover:translate-x-1'>
									Станьте клиентом
								</span>
							</div>
							<div className='flex items-center gap-4 hover:bg-white p-2 rounded-lg transition-all duration-300 cursor-pointer'>
								<span className='flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-black hover:scale-110'>
									4
								</span>
								<span className='text-gray-700 transition-all duration-300 hover:text-black hover:translate-x-1'>
									Забудьте о проблеме
								</span>
							</div>
						</div>

						<form className='space-y-4'>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
								<div className='md:col-span-1'>
									<input
										className='h-14 px-4 bg-transparent text-white border-amber-600 rounded-md focus:border-amber-500 focus:ring-amber-500'
										placeholder='Ваше имя'
									/>
								</div>
								<div className='md:col-span-1'>
									<input
										className='h-14 px-4 bg-transparent text-white border-amber-600 rounded-md focus:border-amber-500 focus:ring-amber-500'
										placeholder='Номер телефона'
										type='tel'
									/>
								</div>
								<div className='md:col-span-1'>
									<button
										type='submit'
										className='w-full h-14 bg-amber-600 hover:bg-amber-700 text-white rounded-md'
									>
										Зарегистрироваться
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ThirteenthElement
