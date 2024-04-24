import { FC } from "react"
import classes from './footer.module.scss'
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const Footer: FC = () => {
    return (
        <footer className={classes.FooterContainer}>
            <div className={classes.InnerFooterWrapper}>
                <div className={classes.SocialIcons}>
                    <FaInstagram size={28} />
                    <FaFacebook size={28} />
                    <FaSquareXTwitter size={28} />
                </div>
                <div>©2024 by Rudberg</div>
            </div>
        </footer>
    )
}

export default Footer