import Circle from '../Circle/Circle'

const items = [
	{
		title: 'Расскажите о проблеме',
	},
	{
		title: 'Получите консультацию',
	},
	{
		title: 'Станьте клиентом',
	},
	{
		title: 'Забудьте о проблеме',
	},
]

const Instruction = () => {
	return (
		<div>
			<div className='flex items-center'>
				{items.map((item, index) => (
					<div key={index} className='flex items-center'>
						{/* Шаг с цифрой */}
						<div className='flex flex-col max-w-[160px] mx-auto ml-4'>
							<Circle digit={index + 1 + ''} />
							<h3 className='font-medium text-lg ml-2 '>{item.title}</h3>
						</div>

						{/* Добавляем стрелку между элементами (кроме последнего) */}
						{index < items.length - 1 && (
							<svg
								className='w-6 h-6 flex-shrink-0 text-gray-400 mx-3'
								fill='none'
								stroke='currentColor'
								strokeWidth={2}
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M9 5l7 7-7 7'
								/>
							</svg>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default Instruction
