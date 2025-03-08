import { JSX } from 'react'

export function Details({
	digit,
	heading,
	subHeading,
	child,
}: {
	digit: string
	heading: string
	subHeading: string
	child: JSX.Element
}) {
	return (
		<div className='w-full mx-auto p-4 mb-10'>
			<div className='bg-white rounded-2xl mb-4 shadow-detailsHeader'>
				<div className='py-[48px] px-[80px]'>
					<div className='flex items-start gap-4'>
						<span className='text-elite text-[28px] font-medium'>
							0{digit}.
						</span>
						<h2 className='text-xl sm:text-[28px] font-medium'>{heading}</h2>
					</div>
				</div>
			</div>

			<h3 className='text-center text-[20px] font-medium my-6 opacity-50'>
				{subHeading}
			</h3>

			<div className='bg-detailsBackground rounded-3xl'>
				<div className='p-[50px]'>{child}</div>
			</div>
		</div>
	)
}
