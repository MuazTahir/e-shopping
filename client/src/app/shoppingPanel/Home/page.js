
import ApiFetch from '@/app/components/apiData/apiFetch'
import HeroSection from '@/app/components/common/hero-section'
import Posters from '@/app/components/common/posters/poster'
import React from 'react'

function Home() {
    return (
        <div>
            <Posters />
            <HeroSection />
            <ApiFetch />

        </div>
    )
}

export default Home