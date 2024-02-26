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
					<p>Placeholder</p>
					<p>Text!</p>
				</div>
				<div className={classes.SmallText}>
					<p>
						Unleash your culinary creativity with our personalized recipe generator. 
						<br />
						Let us tailor your cooking experience based on your
						preferences. 
						<br />
						Follow the simple steps below :
					</p>
				</div>
			</div>
			<div className={classes.ImagesWrapper}>
				<div>
					<Image
						alt='placeholder'
						src='/placeholder-food2.jpeg'
						height={375}
						width={250}
					></Image>
				</div>
				<div>
					<Image
						alt='placeholder'
						src='/placeholder-food.jpg'
						height={375}
						width={250}
					></Image>
				</div>
			</div>
		</div>
	)
}

export default TextImageSection
