export default function Card({
	title,
	imageSrc,
	description,
	appLink,
	githubLink,
}) {
	const applicationLink = (
		<a
			href={appLink}
			target='_blank'
			className='inline-block btn btn-green mr-2'
		>
			Application
		</a>
	);

	const noAppButton = (
		<button className='inline-block btn btn-green mr-2 disabled'>
			App not deployed
		</button>
	);

	return (
		<div className='rounded overflow-hidden shadow-lg bg-gray-200'>
			<img className='w-full h-44 object-cover' src={imageSrc} alt={title} />
			<div className='px-6 py-4'>
				<div className='font-bold text-xl mb-2'>{title}</div>
				<p className='text-gray-700 text-base'>{description}</p>
			</div>
			<div className='px-6 pt-4 pb-2'>
				{appLink !== '' ? applicationLink : noAppButton}
				<a
					href={githubLink}
					target='_blank'
					className='inline-block btn btn-green'
				>
					GitHub
				</a>
			</div>
		</div>
	);
}
