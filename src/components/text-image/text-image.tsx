import Image from 'next/image'
import { FC } from 'react'
import classes from './text-image.module.scss'

const TextImageSection: FC = () => {
	return (
		<div className={classes.TextImageContainer}>
			<div className={classes.Text}>
				{/* Placeholder texts  */}
				<div className={classes.LargeText}>
					<p>Welcome to</p>
					<p>Flavorful</p>
					<p>Discoveries!</p>
				</div>
				<div className={classes.SmallText}>
					<p>
						Unleash your culinary creativity with our personalized recipe
						generator. Let's tailor your cooking experience based on your
						preferences. Follow the simple steps below
					</p>
				</div>
			</div>
			<div className={classes.ImagesWrapper}>
				<div>
					<Image
						alt='placeholder'
						src='/placeholder-food.jpg'
						height={325}
						width={200}
					></Image>
				</div>
				<div>
					<Image
						alt='placeholder'
						src='/placeholder-food.jpg'
						height={325}
						width={200}
					></Image>
				</div>
			</div>
		</div>
	)
}

export default TextImageSection
