import { FC } from 'react'
import classes from './header.module.scss'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'

const Header: FC = () => {
	return (
		<div className={classes.HeaderContainer}>
			<div className={classes.LeftSideIcons}>ICON</div>
			<div className={classes.RightSideIcons}>
				<div>
					<FaRegHeart size={24} />
				</div>
				<div>
					<FaRegUser size={24} />
				</div>
			</div>
		</div>
	)
}

export default Header
