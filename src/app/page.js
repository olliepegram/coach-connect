import Image from 'next/image';

export default function Home() {
	return (
		<div className='hero mt-32'>
			<div className='hero-content flex-col lg:flex-row-reverse'>
				<div className='flex flex-col items-center'>
					<h1 className='text-5xl font-bold'>
						Your <span className='text-primary'>Journey</span>, Your{' '}
						<span className='text-primary'>Coach</span>
					</h1>
					<p className='py-6'>
						Matched to Perfection, Explore Our Coaches to Uncover Your Ideal
						Fitness Mentor
					</p>
					<button className='btn btn-secondary text-white mt-8'>
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
}
