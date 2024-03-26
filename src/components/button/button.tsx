import { Button } from "@mantine/core"
import { FC } from "react"
import { FaLongArrowAltRight } from "react-icons/fa"
import classes from './button.module.scss'

interface ButtonBasicProps {
    text: string,
    onClick: () => void,
}

const ButtonBasic: FC<ButtonBasicProps> = ({
    text,
    onClick,
}) => {
    return (
        <Button
        classNames={{
            root: classes.ButtonRoot,
            label: classes.ButtonInner,
          }}
        onClick={onClick}
        rightSection={<FaLongArrowAltRight size={20}/>}
        >
            {text}
        </Button>
    )
}

export default ButtonBasic
