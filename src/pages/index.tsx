import Head from 'next/head'
import DynamicBackground from '@/components/dynamic-background/dynamic-background'
import Header from '@/components/header/header'
import TextImageBtnSection from '@/components/text-image/text-image-btn'
import { useState } from 'react'
import QuestionsCard from '@/components/questions-card/questions-card'
// import Footer from '@/components/footer/footer'

export default function Home() {
	const [showQuestionsCard, setShowQuestionsCard] = useState(false)

	const handleShowQuestionsBtnClick = () => {
		setShowQuestionsCard(true)
	}

	return (
		<>
			<Head>
				<title>UPDATE THIS + FAVICON</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<DynamicBackground />
				<Header />
				{!showQuestionsCard && (
					<>
						<TextImageBtnSection handleShowQuestionsBtnClick={handleShowQuestionsBtnClick} />
						{/* <Footer /> */}
					</>
				)
				}
				{showQuestionsCard &&
					<QuestionsCard />
				}
			</main>
		</>
	)
}
