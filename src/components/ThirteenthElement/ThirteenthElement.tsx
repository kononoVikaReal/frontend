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
					<div className='bg-gray-800 text-white py-2 px-4 rounded-lg mb-8 hover:scale-110 duration-300 ease-in transition-all w-fit'>
						Команда
					</div>
					<h1 className='text-4xl font-bold mb-8'>
						Спикеры&nbsp;
						<span className='text-red-500'>МПЦ</span>
					</h1>
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
						{/* <form className='flex flex-col justify-between gap-2'>
							<div className='flex flex-col gap-4'>
								<input
									className='bg-gray-800 text-white rounded-lg px-4 h-20'
									placeholder='Ваше имя'
										required
									type='text'
								/>
								<input
									className='bg-gray-800 text-white rounded-lg px-4 h-20'
									placeholder='+7 999 123-45-67'
										pattern='[+]{0,1}[0-9\s\-]+'
										required
								/>
							</div>

							<button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg '>
								Заказать звонок
							</button>
						</form> */}
						<form className='flex flex-col gap-6 items-end'>
							<div className='w-full flex flex-col gap-4'>
								{/* Поле имени */}
								<div className='flex-1'>
									<input
										type='text'
										className='w-full px-4 py-3 bg-[#16161C] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400 text-gray-100'
										placeholder='Ваше имя'
										required
									/>
								</div>

								{/* Поле телефона */}
								<div className='flex-1'>
									<input
										type='tel'
										className='w-full px-4 py-3 bg-[#16161C] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400 text-gray-100'
										placeholder='+7 999 123-45-67'
										pattern='[+]{0,1}[0-9\s\-]+'
										required
									/>
								</div>
							</div>

							{/* Кнопка */}
							<button
								type='submit'
								className='w-full bg-blue-600 hover:bg-blue-700 font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:scale-[1.02]'
							>
								Заказать звонок
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ThirteenthElement
