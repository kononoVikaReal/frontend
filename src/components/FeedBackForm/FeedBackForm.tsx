'use client'
import { FormEvent, useState } from 'react'

const FeedBackForm = () => {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		console.log({ name, phone })
		setName('')
		setPhone('')
	}

	return (
		<div className='max-w-3xl mx-auto rounded-lg p-6'>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col md:flex-row gap-4 items-end'
			>
				<div className='flex-1 w-full flex flex-col md:flex-row gap-4'>
					{/* Поле имени */}
					<div className='flex-1'>
						<label className='sr-only'>Ваше имя</label>
						<input
							type='text'
							value={name}
							onChange={e => setName(e.target.value)}
							className='w-full px-4 py-3 bg-[#16161C] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400 text-gray-100'
							placeholder='Ваше имя'
							required
						/>
					</div>

					{/* Поле телефона */}
					<div className='flex-1'>
						<label className='sr-only'>Ваш телефон</label>
						<input
							type='tel'
							value={phone}
							onChange={e => setPhone(e.target.value)}
							className='w-full px-4 py-3 bg-[#16161C] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400 text-gray-100'
							placeholder='+7 999 123-45-67'
							pattern='[+]{0,1}[0-9\s\-]+'
							required
						/>
					</div>
				</div>

				{/* Кнопка */}
				<button
					type='submit'
					className='w-full md:w-auto bg-blue-600 hover:bg-blue-700 font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:scale-[1.02]'
				>
					Заказать звонок
				</button>
			</form>
		</div>
	)
}

export default FeedBackForm
