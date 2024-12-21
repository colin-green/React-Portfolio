import Card from '../components/Card';
import markdown from '../pictures/markdown.png';
import quotes from '../pictures/quotes.png';
import friendFinderHomepage from '../pictures/friend-finder-homepage.jpg';
import liriCropped from '../pictures/liri-cropped.jpg';
import hangman from '../pictures/Hangman.jpg';
import crystal from '../pictures/Crystals.jpg';
import wowLogo from '../pictures/wow-logo.jpg';

export default function Portfolio() {
	const applications = [
		{
			title: 'WoW Weekly Checklist',
			imageSrc: wowLogo,
			description:
				'You can use this WoW Weekly Checklist to keep track of the tasks needed to fill out your weekly great vault on multiple different characters.',
			appLink: 'https://colin-green.github.io/WoW-Weekly-Checklist/',
			githubLink: 'https://github.com/colin-green/WoW-Weekly-Checklist',
		},
		{
			title: 'Markdown Previewer',
			imageSrc: markdown,
			description:
				'This Markdown Previewer will convert any Markdown formatting in the left-hand input area and convert it into rendered Markdown in the right-hand display area.',
			appLink: 'https://colin-green.github.io/Markdown-Previewer/',
			githubLink: 'https://github.com/colin-green/Markdown-Previewer',
		},
		{
			title: 'Random Quote Generator',
			imageSrc: quotes,
			description:
				'Generates a random inspirational quote at the click of a button, and allows you to tweet it out on X.com as well.',
			appLink: 'https://colin-green.github.io/Random-Quote-Generator/',
			githubLink: 'https://github.com/colin-green/Random-Quote-Generator',
		},
		{
			title: 'World of Warcraft Damage Calculator',
			imageSrc: wowLogo,
			description:
				"Takes in the user's input of spell data to calculate the damage (or healing) per second and damage (or healing) per mana.",
			appLink: 'https://colin-green.github.io/WoW-DPS-DPM/',
			githubLink: 'https://github.com/colin-green/WoW-DPS-DPM/',
		},
		{
			title: 'Friend Finder',
			imageSrc: friendFinderHomepage,
			description:
				'Find compatible friends from our database after taking a survey.',
			appLink: '',
			githubLink: 'https://github.com/colin-green/Friend-Finder',
		},
		{
			title: 'LIRI Node App',
			imageSrc: liriCropped,
			description:
				'LIRI stands for "Language Interpretation & Recognition Interface" and has 4 commands that allow users to get information on artists, songs, and movies.',
			appLink: '',
			githubLink: 'https://github.com/colin-green/LIRI-Node-App',
		},
		{
			title: 'Hangman Game',
			imageSrc: hangman,
			description:
				'The classic game you know and love. Figure out the secret word by guessing letters before you run out of guesses.',
			appLink: 'https://colin-green.github.io/Hangman-Game/',
			githubLink: 'https://github.com/colin-green/Hangman-Game',
		},
		{
			title: 'Crystal Clicker Game',
			imageSrc: crystal,
			description:
				'Try to guess the Magic Number by clicking on the 4 crystals that all add differing values to your number. If you go over the Magic Number, you bust!',
			appLink: 'https://colin-green.github.io/Crystal-Collector-Game/',
			githubLink: 'https://github.com/colin-green/Crystal-Collector-Game/',
		},
	];

	return (
		<div className='relative isolate px-6 lg:px-8'>
			<div className='flex mx-auto justify-center py-32 sm:py-48 lg:py-56'>
				<div className='text-center max-w-3xl'>
					<h1 className='text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl'>
						My Work
					</h1>
					<div className='mt-10 grid grid-cols-2 gap-10'>
						{applications.map(app => (
							<Card
								key={applications.indexOf(app)}
								title={app.title}
								imageSrc={app.imageSrc}
								description={app.description}
								appLink={app.appLink}
								githubLink={app.githubLink}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
