import Image from 'next/image'
import Menu from '../Menu/Menu'
import OfficeInformation from '../OfficeInformation/OfficeInformation'

const StartElement = () => {
	return (
		<div className='mx-auto max-w-[1200px] mb-14' id='forStickyMenu'>
			<div className='flex justify-between my-4'>
				<Menu />

				<OfficeInformation />
			</div>
			<h1 className='text-right text-3xl leading-[58px] font-medium pr-3'>
				МПЦ – это команда профессиональных юристов нового формата
			</h1>
			<div className='flex gap-4'>
				<Image
					src={'/IgorMatveev.jpg'}
					alt={'Игорь Матвеев'}
					width={160}
					height={160}
					className='rounded-lg w-40 h-40 object-cover'
				/>

				<blockquote className='text-lg text-gray-300 border-l-4 border-gray-500 pl-4 italic'>
					“Мы представляем интересы граждан и юридических лиц по уголовным,
					<br />
					гражданским, административным и арбитражным делам. <br />
					Все области права, в том числе международное.”
					<footer className='mt-2 text-sm text-gray-400'>
						— Игорь Матвеев, автор проекта МПЦ
					</footer>
				</blockquote>
			</div>
		</div>
	)
}

export default StartElement
