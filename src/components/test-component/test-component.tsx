import { FC } from "react"
import classes from './test-component.module.scss'

const TestComponent: FC = () => {
    return (
        <div>
            <h1 className={classes.TestStyle}>I am a test component tihi</h1>
            <h2>Sup man</h2>
        </div>
    )
}

export default TestComponent