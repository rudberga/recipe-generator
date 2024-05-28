import Head from 'next/head'
import DynamicBackground from '@/components/dynamic-background/dynamic-background'
import Header from '@/components/header/header'
import TextImageBtnSection from '@/components/text-image/text-image-btn'
import { useEffect, useState } from 'react'
import QuestionsCard from '@/components/questions-card/questions-card'
import Footer from '@/components/footer/footer'
import { supabase } from '@/utils/supabase/client'
import { User } from '@supabase/supabase-js'
import UserProfile from '@/components/user-profile/user-profile'

export default function Home() {
	const [showQuestionsCard, setShowQuestionsCard] = useState(false)
	const [isFinalStep, setIsFinalStep] = useState(false)
	const [user, setUser] = useState<User | null>(null)
	const [imagesLoaded, setImagesLoaded] = useState(false)

	const handleShowQuestionsBtnClick = () => {
		setShowQuestionsCard(true)
	}

	const handleStepChange = (activeStep: number) => {
		setIsFinalStep(activeStep === 3)
	}

	useEffect(() => {
        // Set up an effect for handling authentication state changes
        const authListener = supabase.auth.onAuthStateChange(async (event, session) => {
            setUser(session?.user ?? null)
        });

        // Check the current session and set the user initially
        (async () => {
            const { data, error } = await supabase.auth.getSession()
            if (data && data.session) {
                setUser(data.session.user)
            } else {
                console.error('Error fetching session:', error)
            }
        })()

        // Clean up the auth listener when the component unmounts
        return () => {
            authListener.data?.subscription.unsubscribe()
        };
    }, []);

	useEffect(() => {
        const loadImages = async () => {
            const imageUrls = ['/yellow-blob.svg', '/yellow-blob2.svg', '/green-blob2.svg', '/green-blob3.svg', '/cookingIllustration.png'];
            const images = imageUrls.map(url => {
                const img = new Image();
                img.src = url;
                return new Promise((resolve, reject) => {
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });
            await Promise.all(images);
            setImagesLoaded(true);
        };

        loadImages();
    }, []);

	return (
		<>
			<Head>
				<title>UPDATE THIS + FAVICON</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				{/* Preload of images to improve UX */}
				<div style={{ display: 'none' }}>
					<img src='/yellow-blob.svg' alt='preload' />
					<img src='/yellow-blob2.svg' alt='preload' />
					<img src='/green-blob2.svg' alt='preload' />
					<img src='/green-blob3.svg' alt='preload' />
					<img src='/cookingIllustration.png' alt='preload' />
				</div>
				<DynamicBackground
					showQuestionsCard={showQuestionsCard}
					showFinalStep={isFinalStep}
				/>
				<Header />
				{!showQuestionsCard && !user && imagesLoaded && (
					<>
						<TextImageBtnSection handleShowQuestionsBtnClick={handleShowQuestionsBtnClick} />
						<Footer />
					</>
				)
				}
				{showQuestionsCard &&
					<QuestionsCard onStepChange={handleStepChange} />
				}

				{user && !showQuestionsCard && <UserProfile user={user} />}
			</main>
		</>
	)
}
