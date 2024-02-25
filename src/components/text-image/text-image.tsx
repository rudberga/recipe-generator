import Image from 'next/image'
import { FC } from 'react'
import classes from './text-image.module.scss'

const TextImageSection: FC = () => {
	return (
		<div className={classes.TextImageContainer}>
			<div className={classes.Text}>
				<h2>LARGE TEXT</h2>
				<p>SMALLER TEXT OVER HERE MATE</p>
			</div>
			<div className={classes.ImagesWrapper}>
				<div>
					<Image
						alt='placeholder'
						src='/placeholder-food.jpg'
						height={275}
						width={175}
					></Image>
				</div>
				<div>
					<Image
						alt='placeholder'
						src='/placeholder-food.jpg'
						height={275}
						width={175}
					></Image>
				</div>
			</div>
		</div>
	)
}

export default TextImageSection
