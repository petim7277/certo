import React from 'react';
import Hero from "./hero/HeroSection";
import TestimonialsSection from "./testimonials/TestimonialsSection";
import FeatureDetailSection from "./featureDetail/FeatureDetailSection";
import FeatureGridSection from "./featureGrid/FeatureGridSection";
import StoryHelpSection from "./storyHelp/StoryHelpSection";
import CallToActionSection from "./cta/CallToActionSection";
import InsightsSection from "./insights/InsightsSection";

const Features = () => {
    return (
        <main>
            <Hero />
            <TestimonialsSection />
            <FeatureDetailSection />
            <FeatureGridSection />
            <StoryHelpSection />
            <CallToActionSection />
            <InsightsSection />
        </main>
    );
};

export default Features;
