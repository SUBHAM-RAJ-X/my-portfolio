import { HeroGabriel } from '@/components/HeroGabriel';
import { AchievementSection } from '@/components/gabriel/AchievementSection';
import { AwardsSection } from '@/components/gabriel/AwardsSection';
import { FooterGabriel } from '@/components/gabriel/FooterGabriel';
import { IntroSection } from '@/components/gabriel/IntroSection';
import { ProjectsSection } from '@/components/gabriel/ProjectsSection';
import { SkillsSection } from '@/components/gabriel/SkillsSection';
import { Ticker } from '@/components/gabriel/Ticker';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Background Image with Overlay */}
      <Image
        source={require('@/assets/images/Gemini_Generated_Image_jr2jjujr2jjujr2j.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay} />

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <HeroGabriel />
        <Ticker />
        <IntroSection />
        <AwardsSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementSection />
        <FooterGabriel />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    opacity: 0.4,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 24,
    paddingTop: 60,
    paddingBottom: 80,
  },
});
