import React, { FC } from 'react'
import classes from './dynamic-background.module.scss'
import classNames from 'classnames'

interface DynamicBackgroundProps {
	showQuestionsCard: boolean
	showFinalStep: boolean
}

const DynamicBackground: FC<DynamicBackgroundProps> = ({
	showQuestionsCard,
	showFinalStep,
}) => {

	const MainBackgroundStyles = classNames({
		[classes.LandingBackgroundStyle]: !showQuestionsCard,
		[classes.QuestionsBackgroundStyle]: showQuestionsCard,
		[classes.RecipeBackgroundStyle]: showFinalStep,
	})

	return (
		<div
			className={MainBackgroundStyles}
		></div>
	)
}

export default DynamicBackground
