'use client'
import { FormEvent, useState } from 'react'

const FeedBackForm = ({ beforeFooter }: { beforeFooter: boolean }) => {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		console.log({ name, phone })
		setName('')
		setPhone('')
	}

	return (
		<div className={`max-w-3xl mx-auto rounded-lg ${!beforeFooter && 'pt-6'}`}>
			<form
				onSubmit={handleSubmit}
				className={`flex ${
					beforeFooter ? 'flex-col' : 'flex-row'
				} gap-4 items-end`}
			>
				<div
					className={`flex-1 w-full flex ${
						beforeFooter ? 'flex-col' : 'flex-row'
					} gap-4`}
				>
					{/* Поле имени */}
					<div className='flex-1'>
						<label className='sr-only'>Ваше имя</label>
						<input
							type='text'
							value={name}
							onChange={e => setName(e.target.value)}
							className={`w-full ${
								beforeFooter
									? 'py-5 pl-4 pr-24 bg-transparent'
									: 'p-4 bg-[#16161C] placeholder-elite text-elite'
							}  border-2 border-elite rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent `}
							placeholder='Ваше имя'
							required
						/>
					</div>

					{/* Поле телефона */}
					<div className='flex-1'>
						<label className='sr-only'>Номер телефона</label>
						<input
							type='tel'
							value={phone}
							onChange={e => setPhone(e.target.value)}
							className={`w-full  ${
								beforeFooter
									? 'py-5 pl-4 pr-24 bg-transparent'
									: 'p-4 bg-[#16161C] placeholder-elite text-elite'
							} border-2 border-elite rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent`}
							placeholder='Номер телефона'
							pattern='[+]{0,1}[0-9\s\-]+'
							required
						/>
					</div>
				</div>
				<button
					type='submit'
					className={`bg-elite text-white p-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg ${
						beforeFooter && 'w-full'
					}`}
				>
					Заказать звонок
				</button>
				{/* Кнопка */}
				{/* <button
					type='submit'
					className='w-full md:w-auto bg-blue-600 hover:bg-blue-700 font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:scale-[1.02]'
				>
					Заказать звонок
				</button> */}
			</form>
		</div>
	)
}

export default FeedBackForm
