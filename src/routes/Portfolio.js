import Card from '../components/Card';
import profile_picture from '../pictures/moxie-commission.jpg';

export default function Portfolio() {
	return (
		<div className='relative isolate px-6 pt-14 lg:px-8'>
			<div className='flex mx-auto justify-center py-32 sm:py-48 lg:py-56'>
				<div className='text-center max-w-3xl'>
					<h1 className='text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl'>
						My Work
					</h1>
					<div className='mt-10 grid grid-cols-2 gap-10'>
						<Card
							title='My First App'
							imageSrc={profile_picture}
							description='This Markdown Previewer will convert any Markdown formatting in the left-hand input area and convert it into rendered Markdown in the right-hand display area. It comes with a few examples, and even more Markdown formatting can be found here.'
							appLink=''
							githubLink='https://github.com/colin-green/Markdown-Previewer'
						/>
						<Card
							title='My Second App'
							imageSrc={profile_picture}
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
						/>
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
}
