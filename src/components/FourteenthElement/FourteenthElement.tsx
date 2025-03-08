import FeedBackForm from '../FeedBackForm/FeedBackForm'
import Instruction from '../Instruction/Instruction'

const FourteenthElement = () => {
	return (
		<div className='bg-[#ececf2] pb-4'>
			<div className='mx-auto max-w-[1200px] mb-14 text-black'>
				<div className='pt-10'>
					<div className="relative before:content-[''] before:block before:border before:border-elite before:absolute before:w-[1000px] before:-left-[1039px] before:top-3 mb-4">
						<span className='text-[28px] leading-[45px] font-prata '>
							Не упустите возможность решить проблему быстро и качественно
						</span>
					</div>
					{/* Инструкция */}
					<div className='max-w-fit flex items-center justify-center gap-48 mt-8'>
						<FeedBackForm beforeFooter={true} />
						<Instruction />
					</div>
				</div>
			</div>
		</div>
	)
}

export default FourteenthElement
