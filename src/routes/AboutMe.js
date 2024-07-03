import profile_picture from '../pictures/moxie-commission.jpg';

export default function Example() {
	return (
		<div className='relative isolate px-6 pt-14 lg:px-8'>
			<div className='flex mx-auto justify-center py-32 sm:py-48 lg:py-56'>
				<div className='text-center max-w-3xl'>
					<h1 className='text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl'>
						About Me
					</h1>
					<p className='mt-6 text-2xl leading-10 text-gray-300'>
						Hello there! My name is Colin. I have always been magnetically
						attracted to video games and computers from a very young age. To
						name a few things I like to do in my free time, I play video games,
						watch anime, and go on hikes with my girlfriend.
					</p>
					<p className='mt-6 text-2xl leading-10 text-gray-300'>
						I have also dedicated much of my life to my favorite game, Super
						Smash Bros. Melee for the Nintendo Gamecube. I attend tournaments
						both locally and nationally, and have been recognized by the
						community to be one of the top 100 players in the world for the past
						10 years in a row.
					</p>
					<p className='mt-6 text-2xl leading-10 text-gray-300'>
						Now, my focus is on programming. I have a certificate in Full Stack
						Web Development from the Georgia Institute of Technology and a
						portfolio of applications I have made that you can check out on the
						next page. I want to dive deeper into this unique world where I can
						bring creative ideas to life on the screen in front of you.
					</p>
				</div>
				<div className='ml-10 mt-24'>
					<img src={profile_picture} alt='Profile picture' />
				</div>
			</div>
		</div>
	);
}
