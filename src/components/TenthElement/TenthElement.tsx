import Link from 'next/link'

const TenthElement = async ({
	youtubeSubscribers,
	vkSubscribers,
	zenSubscribers,
	rutubeSubscribers,
}: {
	youtubeSubscribers?: number
	vkSubscribers?: number
	zenSubscribers?: number
	rutubeSubscribers?: number
}) => {
	return (
		<div className='bg-[#CBCDCA] text-[#16161c] pb-8'>
			<div className='pt-10 mx-auto max-w-[1200px] px-4'>
				<h2 className='flex mx-auto w-max text-4xl mb-12 font-prata'>
					МПЦ в Медиа
				</h2>

				<div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
					{/* YouTube Card */}
					<Link
						href='https://youtube.com/@mpcrf?si=W1nWqlfxcZFaRfms'
						target='_blank'
						rel='noopener noreferrer'
						className='p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-red-50'
					>
						<div className='flex flex-col items-center'>
							<svg
								className='w-10 h-10 mb-4'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5 12 5 12 5s-6.264 0-7.831.438a2.506 2.506 0 0 0-1.766 1.766c-.439 1.582-.439 4.891-.439 4.891s0 3.308.439 4.891a2.49 2.49 0 0 0 1.766 1.765c1.582.439 7.831.439 7.831.439s6.265 0 7.831-.439a2.49 2.49 0 0 0 1.766-1.765c.439-1.582.439-4.891.439-4.891s.004-3.309-.437-4.891ZM9.996 15.005l.005-6 5.207 3.005-5.212 2.995Z'
									fill='#FF0000'
								/>
							</svg>
							<span className='font-medium'>YouTube</span>
							<span className='text-sm text-gray-500'>
								{youtubeSubscribers ? youtubeSubscribers : '0'}
							</span>
							<span className='text-sm text-gray-600'>Подписаться</span>
						</div>
					</Link>

					{/* VK Card */}
					<Link
						href='https://vk.com/mpc.news'
						target='_blank'
						rel='noopener noreferrer'
						className='p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-blue-50'
					>
						<div className='flex flex-col items-center'>
							<svg
								className='w-10 h-10 mb-4'
								viewBox='0 0 202 202'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									id='SVGID_1_'
									fill='#5181b8'
									d='M71.6 5h58.9C184.3 5 197 17.8 197 71.6v58.9c0 53.8-12.8 66.5-66.6 66.5H71.5C17.7 197 5 184.2 5 130.4V71.5C5 17.8 17.8 5 71.6 5z '
								/>
								<path d='M0 0h202v202H0z' />
								<path
									fill='#fff'
									d='M162.2 71.1c.9-3 0-5.1-4.2-5.1h-14c-3.6 0-5.2 1.9-6.1 4 0 0-7.1 17.4-17.2 28.6-3.3 3.3-4.7 4.3-6.5 4.3-.9 0-2.2-1-2.2-4V71.1c0-3.6-1-5.1-4-5.1H86c-2.2 0-3.6 1.7-3.6 3.2 0 3.4 5 4.2 5.6 13.6v20.6c0 4.5-.8 5.3-2.6 5.3-4.7 0-16.3-17.4-23.1-37.4-1.4-3.7-2.7-5.3-6.3-5.3H42c-4 0-4.8 1.9-4.8 4 0 3.7 4.7 22.1 22.1 46.4C70.9 133 87.2 142 102 142c8.9 0 10-2 10-5.4V124c0-4 .8-4.8 3.7-4.8 2.1 0 5.6 1 13.9 9 9.5 9.5 11.1 13.8 16.4 13.8h14c4 0 6-2 4.8-5.9-1.3-3.9-5.8-9.6-11.8-16.4-3.3-3.9-8.2-8-9.6-10.1-2.1-2.7-1.5-3.9 0-6.2 0-.1 17.1-24.1 18.8-32.3z'
								/>
							</svg>
							<span className='font-medium'>VK</span>
							<span className='text-sm text-gray-500'>
								{vkSubscribers ? vkSubscribers : '0'}
							</span>
							<span className='text-sm text-gray-600'>Подписаться</span>
						</div>
					</Link>

					{/* Dzen Card */}
					<Link
						href='https://dzen.ru/mpc'
						target='_blank'
						rel='noopener noreferrer'
						className='p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-100'
					>
						<div className='flex flex-col items-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								x='0px'
								y='0px'
								width='100'
								height='100'
								viewBox='0 0 50 50'
								className='w-10 h-10 mb-4'
							>
								<path d='M46.894 23.986c.004 0 .007 0 .011 0 .279 0 .545-.117.734-.322.192-.208.287-.487.262-.769C46.897 11.852 38.154 3.106 27.11 2.1c-.28-.022-.562.069-.77.262-.208.192-.324.463-.321.746C26.193 17.784 28.129 23.781 46.894 23.986zM46.894 26.014c-18.765.205-20.7 6.202-20.874 20.878-.003.283.113.554.321.746.186.171.429.266.679.266.03 0 .061-.001.091-.004 11.044-1.006 19.787-9.751 20.79-20.795.025-.282-.069-.561-.262-.769C47.446 26.128 47.177 26.025 46.894 26.014zM22.823 2.105C11.814 3.14 3.099 11.884 2.1 22.897c-.025.282.069.561.262.769.189.205.456.321.734.321.004 0 .008 0 .012 0 18.703-.215 20.634-6.209 20.81-20.875.003-.283-.114-.555-.322-.747C23.386 2.173 23.105 2.079 22.823 2.105zM3.107 26.013c-.311-.035-.555.113-.746.321-.192.208-.287.487-.262.769.999 11.013 9.715 19.757 20.724 20.792.031.003.063.004.094.004.25 0 .492-.094.678-.265.208-.192.325-.464.322-.747C23.741 32.222 21.811 26.228 3.107 26.013z'></path>
							</svg>
							<span className='font-medium'>Дзен</span>
							<span className='text-sm text-gray-500'>
								{zenSubscribers ? zenSubscribers : '0'}
							</span>
							<span className='text-sm text-gray-600'>Подписаться</span>
						</div>
					</Link>

					{/* RuTube Card */}
					<Link
						href='https://rutube.ru/channel/24837155/about/'
						target='_blank'
						rel='noopener noreferrer'
						className='p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-purple-100'
					>
						<div className='flex flex-col items-center'>
							<svg
								className='w-10 h-10 mb-4'
								viewBox='0 0 25 25'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g clipPath='url(#clip0_12_17186)'>
									<rect
										x='0.248047'
										y='0.396973'
										width='24.5234'
										height='24.5234'
										fill='#100943'
									></rect>
									<path
										d='M24.7099 12.6281C31.4651 12.6281 36.9413 7.15191 36.9413 0.396693C36.9413 -6.35853 31.4651 -11.8347 24.7099 -11.8347C17.9547 -11.8347 12.4785 -6.35853 12.4785 0.396693C12.4785 7.15191 17.9547 12.6281 24.7099 12.6281Z'
										fill='#ED143B'
									></path>
									<path
										d='M15.3586 12.0697H8.13142V9.2098H15.3586C15.7808 9.2098 16.0743 9.28338 16.2216 9.41188C16.3689 9.54037 16.4602 9.7787 16.4602 10.1268V11.1537C16.4602 11.5206 16.3689 11.7589 16.2216 11.8874C16.0743 12.0159 15.7808 12.0708 15.3586 12.0708V12.0697ZM15.8544 6.51355H5.06641V18.7439H8.13142V14.7648H13.7799L16.4602 18.7439H19.8924L16.9373 14.7462C18.0267 14.5847 18.516 14.2508 18.9194 13.7006C19.3229 13.1504 19.5252 12.2707 19.5252 11.0966V10.1796C19.5252 9.48326 19.4515 8.93303 19.3229 8.5113C19.1943 8.08956 18.9744 7.72274 18.6622 7.39326C18.3324 7.08135 17.9652 6.8617 17.5243 6.71453C17.0835 6.58604 16.5327 6.51245 15.8544 6.51245V6.51355Z'
										fill='white'
									></path>
								</g>
								<defs>
									<clipPath id='clip0_12_17186'>
										<rect
											x='0.248047'
											y='0.396729'
											width='24.4628'
											height='24.4628'
											rx='5.95041'
											fill='white'
										></rect>
									</clipPath>
								</defs>
							</svg>
							<span className='font-medium'>RuTube</span>
							<span className='text-sm text-gray-500'>
								{rutubeSubscribers ? rutubeSubscribers : '0'}
							</span>
							<span className='text-sm text-gray-600'>Подписаться</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default TenthElement
