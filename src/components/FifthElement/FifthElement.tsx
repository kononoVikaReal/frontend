import Image from 'next/image'

const people = [
	{
		name: 'Игорь Матвеев',
		image: '/IgorMatveev.png',
	},
	{
		name: 'Мухтар Саидович',
		image: '/MuxtarSaidovich.png',
	},
	{
		name: 'Юлия Владимировна',
		image: '/JuliaVladimirovna.png',
	},
	{
		name: 'Вадим Геннадьевич',
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
						Обучение{' '}
						<span className='px-2 rounded-sm bg-blue-500'>без воды</span> от
						лучших юристов Межрегионального правового центра
					</h2>
				</div>
				<div className='grid grid-cols-4 gap-4 mb-4'>
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
				<div className='text-center'>
					<span className='font-medium text-lg p-4'>
						МПЦ — это <strong>сплоченный коллектив</strong> профессионалов в
						сфере
						<em> юриспруденции</em>, <em>практики</em> и{' '}
						<em>реальных кейсов</em> от действующих экспертов рынка юридических
						услуг
					</span>
				</div>
			</div>
		</div>
	)
}

export default FifthElement
