import Link from 'next/link'

const services = [
	{
		title: 'Юридические услуги',
		elements: [
			{
				title:
					'Устная консультация, не связанная с анализом документов Клиента, не требующая изучения соответствующего законодательства (судебной практики)',
				price: 'от 7 000 руб.',
			},
			{
				title:
					'Устная консультация, связанная с предварительным анализом документов Клиента или требующая предварительного анализа соответствующего законодательства (судебной практики)',
				price: 'от 10 000 руб.',
			},
		],
	},
	{
		title: 'Составление документов правового характера',
		elements: [
			{
				title: 'Не связанных с ведением дела в суде',
				price: 'от 50 000 руб.',
			},
			{
				title:
					'Связанные с ведением Клиентом дела в суде, органах государственной власти, Прокуратуре и других учреждениях',
				price: 'от 100 000 руб.',
			},
		],
	},
]

const TwelfthElement = () => {
	return (
		<div className='bg-[#ECECF2] pb-4'>
			<div className='mx-auto max-w-[1200px] mb-7 text-black'>
				<div className='pt-10'>
					<div className="relative before:content-[''] before:block before:border before:border-elite before:absolute before:w-[1000px] before:-left-[1039px] before:top-3 mb-4">
						<span className='text-[28px] leading-[45px] font-prata '>
							Стоимость наших услуг
						</span>
					</div>
					<div className='flex flex-col gap-14'>
						{services.map((service, index) => (
							<div key={index} className='space-y-8 group'>
								{index !== 0 && (
									<div className='h-1 bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 transition-opacity group-hover:opacity-70 rounded-lg'></div>
								)}
								<h3 className='text-2xl font-medium text-neutral-800'>
									{service.title}
								</h3>

								<div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-between gap-6'>
									{service.elements.map((element, index) => (
										<div
											key={index}
											className='relative bg-white p-6 rounded-xl border border-neutral-100 hover:border-neutral-200 hover:scale-105  transition-all duration-300'
										>
											<div className='flex flex-col justify-between h-full'>
												<div className='text-lg font-normal text-neutral-600 mb-4'>
													{element.title}
												</div>
												<div className='text-3xl font-semibold text-neutral-900'>
													{element.price}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
					<div className='mt-8 flex justify-center'>
						<Link
							href={'#'}
							className='inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl px-10 py-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl'
						>
							<span className='text-lg tracking-tight'>Все услуги</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-6 h-6 -mr-1'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M17 8l4 4m0 0l-4 4m4-4H3'
								/>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TwelfthElement
