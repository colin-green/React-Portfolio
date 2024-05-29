export default function Card({
	title,
	imageSrc,
	description,
	appLink,
	githubLink,
}) {
	return (
		<div className='rounded overflow-hidden shadow-lg bg-gray-200'>
			<img className='w-full h-44 object-cover' src={imageSrc} alt={title} />
			<div className='px-6 py-4'>
				<div className='font-bold text-xl mb-2'>{title}</div>
				<p className='text-gray-700 text-base'>{description}</p>
			</div>
			<div className='px-6 pt-4 pb-2'>
				<a
					href={appLink}
					target='_blank'
					className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
				>
					Application
				</a>
				<a
					href={githubLink}
					target='_blank'
					className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
				>
					GitHub
				</a>
			</div>
		</div>
	);
}
