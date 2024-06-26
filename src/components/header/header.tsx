import { FC } from 'react'
import classes from './header.module.scss'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import Image from 'next/image'
import { useDisclosure } from '@mantine/hooks'
import { Button, Modal } from '@mantine/core'
import Login from '../login/login'

const Header: FC = () => {
	const [opened, { open, close }] = useDisclosure(false);

	const handleLogoClick = () => {
		window.location.reload();
	};

	return (
		<>
			<div className={classes.HeaderContainer}>
				<div className={classes.LeftSideLogo} onClick={handleLogoClick}>
					{/* Placeholder logo */}
					<Image alt='logo' src='./logo.svg' height={50} width={50} />
				</div>
				<div className={classes.RightSideIcons}>
					{/* Commented out until working on them */}
					{/* <div>
						<Button
							classNames={{root: classes.FavoriteModalBtn}}
						>
						<FaRegHeart size={24} />
						</Button>
					</div>
					<div>
						<Button 
						onClick={open}
						classNames={{root: classes.LoginModalBtn}}
						>
							<FaRegUser size={24} />
							</Button>
					</div> */}
				</div>
			</div>
			<Modal 
			opened={opened} 
			onClose={close} 
			title="Authentication" 
			centered
			>
				<Login />
			</Modal>
		</>
	)
}

export default Header
