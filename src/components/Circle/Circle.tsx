const Circle = ({ digit, title }: { digit: string; title: string }) => {
	return (
		<div className='flex flex-col items-center text-center group'>
			<div className='w-16 h-16 rounded-full bg-circle flex items-center justify-center mb-6 transition-all duration-500 ease-in-out group-hover:scale-110'>
				<span className='text-white font-medium text-[20px]'>0{digit}.</span>
			</div>
			<p className='text-lg font-medium'>
				{/* Юридические услуги
				<br />
				гражданам */}
				{title}
			</p>
		</div>
	)
}

export default Circle
