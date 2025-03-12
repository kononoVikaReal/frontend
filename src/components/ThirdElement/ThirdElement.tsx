import FeedBackForm from '../FeedBackForm/FeedBackForm'
import { CourtCaseCard } from '../LawyerCases/CourtCaseCard'

const ThirdElement = () => {
	return (
		<div className='mx-auto max-w-[1200px] mb-14'>
			<div className='pt-10 mb-16'>
				<div className="relative before:content-[''] before:block before:border before:border-elite before:absolute before:w-[1000px] before:-left-[1039px] before:top-3 mb-4">
					<span className='text-[28px] leading-[45px] font-prata '>
						Судебная практика
					</span>
				</div>
			</div>
			{/* <LawyerCaseFiles /> */}
			<CourtCaseCard />

			<button
				className='
    bg-gradient-to-r from-blue-600 to-blue-500
    hover:from-blue-700 hover:to-blue-600
    active:from-blue-800 active:to-blue-700
    text-white/95 font-semibold
    px-8 py-3.5
    rounded-2xl
    border-b-4 border-blue-700/30
    hover:border-blue-800/40
    transform
    transition-[transform,background,box-shadow]
    duration-300
    ease-&lsqb;cubic-bezier(0.4,0,0.2,1)&rsqb;
    hover:scale-[1.02]
    active:scale-[0.98]
    shadow-lg
    hover:shadow-xl
    shadow-blue-900/20
    hover:shadow-blue-900/30
    relative
    overflow-hidden
    before:absolute
    before:inset-0
    before:bg-gradient-to-r
    before:from-white/10
    before:to-transparent
    before:opacity-20
    hover:before:opacity-30
    focus-visible:ring-4
    focus-visible:ring-blue-400/50
		mx-auto
		flex
		mt-4
'
			>
				<span className='relative flex items-center gap-2'>
					<svg
						className='w-5 h-5 text-white/80 transition-transform group-hover:translate-x-0.5'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M17 8l4 4m0 0l-4 4m4-4H3'
						/>
					</svg>
					Смотреть все
				</span>
			</button>
			<FeedBackForm beforeFooter={false} />
		</div>
	)
}

export default ThirdElement
