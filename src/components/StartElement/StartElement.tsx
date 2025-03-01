import Image from 'next/image'
import Menu from '../Menu/Menu'
import OfficeInformation from '../OfficeInformation/OfficeInformation'

const StartElement = () => {
	return (
		<div className='mx-auto max-w-[1200px] mb-14'>
			<div className='flex justify-between my-4'>
				<Menu />
				<OfficeInformation />
			</div>
			<h1 className='text-center text-3xl leading-[58px] font-medium group'>
				МПЦ – это команда профессиональных юристов{' '}
				<span className='transition-all duration-500 ease-in-out  group-hover:bg-elite group-hover:px-2 group-hover:rounded-sm'>
					нового формата
				</span>
			</h1>
			<div className='flex gap-4'>
				<Image
					src={'/IgorMatveev.png'}
					alt={'Igor Matveev'}
					width={100}
					height={100}
					className='rounded-lg'
				/>
				<div className='flex flex-col gap-4'>
					<h2 className='text-lg'>
						Мы представляем интересы граждан и юридических лиц по уголовным,
						гражданским, административным и арбитражным делам. Все области
						права, в том числе международное.
					</h2>
					<h3 className='text-base text-gray-300'>
						Игорь Матвеев - Автор проекта МПЦ
					</h3>
				</div>
			</div>
		</div>
	)
}

export default StartElement
