import { FC } from 'react'
import classes from './header.module.scss'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import Image from 'next/image'

const Header: FC = () => {
	return (
		<div className={classes.HeaderContainer}>
			<div className={classes.LeftSideIcons}>
				{/* Placeholder logo */}
				<Image alt='logo' src='./logo.svg' height={50} width={50}></Image>
			</div>
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
