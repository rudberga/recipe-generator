import React, { FC } from 'react'
import classes from './dynamic-background.module.scss'

// interface Props {
// 	isActive: boolean
// }

const DynamicBackground: FC = () => {
	// const backgroundImage = isActive
	// 	? '/images/activeBackground.svg'
	// 	: '/images/defaultBackground.svg'

	return (
		<div
			className={classes.BackgroundStyle}
			// style={{ backgroundImage: `url(${backgroundImage})` }}
		></div>
	)
}

export default DynamicBackground
