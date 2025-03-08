import Image from 'next/image'

const people = [
	{
		name: 'Игорь Матвеев',
		image: '/IgorMatveev.png',
	},
	{
		name: 'Мухтар Магомедов',
		image: '/MuxtarSaidovich.png',
	},
	{
		name: 'Юлия Власова',
		image: '/JuliaVladimirovna.png',
	},
	{
		name: 'Вадим Ерхов',
		image: '/VadimGennadevich.png',
	},
]

const FifthElement = () => {
	return (
		<div className='mx-auto max-w-[1200px] mb-14'>
			<div className='pt-10'>
				<div className=''>
					<div className="relative before:content-[''] before:block before:border before:border-elite before:absolute before:w-[1000px] before:-left-[1039px] before:top-3 mb-4">
						<span className='text-[28px] leading-[45px] font-prata '>
							Обучение от МПЦ
						</span>
					</div>
					<h2 className='text-2xl font-medium mb-6'>
						Обучение без воды от лучших юристов Межрегионального правового
						центра
					</h2>
				</div>
				{/* Кружки */}
				<div className='grid grid-cols-4 gap-4 mb-4 mt-12'>
					{people.map((person, index) => (
						<div key={index} className='flex flex-col items-center group'>
							<Image
								src={person.image}
								alt={person.name}
								className='w-32 h-32 object-cover rounded-full mb-2'
								width={128}
								height={128}
							/>
							<span className='text-lg font-medium'>{person.name}</span>
							<div className='w-0 h-1 bg-elite rounded-full transition-all duration-500 ease-in-out group-hover:w-3/5'></div>
						</div>
					))}
				</div>
				{/* Приписка */}
				<p className='text-lg text-white-700 font-light'>
					МПЦ — это{' '}
					<span className='font-medium text-white-900'>
						сплоченный коллектив профессионалов
					</span>{' '}
					в сфере юриспруденции, практики и{' '}
					<span className='font-medium text-white-900'>реальных кейсов</span> от{' '}
					<span className='italic'>действующих экспертов</span> рынка
					юридических услуг.
				</p>
			</div>
		</div>
	)
}

export default FifthElement
