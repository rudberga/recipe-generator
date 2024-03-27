import React, { FC } from 'react'
import classes from './dynamic-background.module.scss'
import classNames from 'classnames'

interface DynamicBackgroundProps {
	showQuestionsCard: boolean
}

const DynamicBackground: FC<DynamicBackgroundProps> = ({
	showQuestionsCard
}) => {

	const MainBackgroundStyles = classNames({
		[classes.LandingBackgroundStyle]: !showQuestionsCard,
		[classes.QuestionsBackgroundStyle]: showQuestionsCard,
	})

	return (
		<div
			className={MainBackgroundStyles}
			// style={{ backgroundImage: `url(${backgroundImage})` }}
		></div>
	)
}

export default DynamicBackground
