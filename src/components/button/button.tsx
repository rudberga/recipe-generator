import { Button } from "@mantine/core"
import { FC, ReactNode } from "react"
import classes from './button.module.scss'

interface ButtonBasicProps {
    text: string,
    onClick: () => void,
    rightSection: ReactNode,
}

const ButtonBasic: FC<ButtonBasicProps> = ({
    text,
    onClick,
    rightSection,
}) => {
    return (
        <Button
        classNames={{
            root: classes.ButtonRoot,
            label: classes.ButtonInner,
          }}
        onClick={onClick}
        rightSection={rightSection}
        >
            {text}
        </Button>
    )
}

export default ButtonBasic
