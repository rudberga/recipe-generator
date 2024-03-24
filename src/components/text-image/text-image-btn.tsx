import Image from 'next/image'
import { FC } from 'react'
import classes from './text-image-btn.module.scss'
import ButtonBasic from '../button/button'

interface TextImageBtnSectionProps {
	handleShowQuestionsBtnClick: () => void
}

const TextImageBtnSection: FC<TextImageBtnSectionProps> = ({
	handleShowQuestionsBtnClick,
}) => {
	return (
		<div className={classes.TextImageContainer}>
			<div className={classes.Text}>
				{/* Placeholder texts  */}
				<div className={classes.LargeText}>
					<p>Din personliga</p>
					<p>medhjälpare</p>
					<p>i köket!</p>
				</div>
				<div className={classes.SmallText}>
					<p>
						Ta hjälp av AI och få receptidéer från vad du har tillgängligt.
						<br />
						Enkelt, snabbt och stressfritt.
					</p>
				</div>
				<div className={classes.StartButtonContainer}>
					<ButtonBasic text='Testa nu ' onClick={handleShowQuestionsBtnClick} />
				</div>
			</div>
			<div className={classes.ImagesWrapper}>
				<div>
					<Image
						alt='placeholder'
						src='/placeholder-food2.jpeg'
						height={350}
						width={220}
					></Image>
				</div>
				<div>
					<Image
						alt='placeholder'
						src='/placeholder-food.jpg'
						height={350}
						width={220}
					></Image>
				</div>
			</div>
		</div>
	)
}

export default TextImageBtnSection
