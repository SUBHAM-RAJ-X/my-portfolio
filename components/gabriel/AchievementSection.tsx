import { Fonts, GabrielDesign } from '@/constants/theme';
import React from 'react';
import { Dimensions, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const { width: windowWidth } = Dimensions.get('window');

const achievements = [
  {
    title: 'Prompt Master Certification– Naukri Campus',
    description: 'Certified in advanced AI prompting, structured workflows, and real-world AI application techniques.',
    date: '2026',
    url: 'https://drive.google.com/file/d/1VhL-d1iA_6zTvFc07j9batXm4zqjJTbD/view?usp=sharing',
    // icon: '🏆'
  },
  {
    title: 'Oracle Certification - Badge',
    description: ' Cloud Fundamentals',
    date: '2025',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=7A7584D6661E52D1B25E7DB15E6A8E9B27F217AB35ACA0013022DDE642CDE427',
    // icon: '💻'
  },
  // {
  //   title: 'Certified Developer',
  //   description: 'Multiple certifications in web and mobile development',
  //   date: '2023',
  //   icon: '🎖️'
  // },
  // {
  //   title: 'Technical Lead',
  //   description: 'Led development team for college fest website',
  //   date: '2024',
  //   icon: '👥'
  // }
];

export function AchievementSection() {
  const handleCertificationPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Achievements</Text>
      
      <View style={styles.achievementsGrid}>
        {achievements.map((achievement, index) => (
          <Animated.View 
            key={index} 
            entering={FadeInUp.delay(200 + index * 100)} 
            style={styles.achievementCard}
          >
            {/* <Text style={styles.icon}>{achievement.icon}</Text> */}
            <TouchableOpacity onPress={() => handleCertificationPress(achievement.url)}>
              <Text style={styles.achievementTitle}>{achievement.title}</Text>
            </TouchableOpacity>
            <Text style={styles.achievementDescription}>{achievement.description}</Text>
            <Text style={styles.achievementDate}>{achievement.date}</Text>
          </Animated.View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginBottom: 60,
  },
  sectionTitle: {
    fontSize: Platform.OS === 'web' ? 36 : 28,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: Fonts.sans,
    marginBottom: 40,
    textTransform: 'uppercase',
    letterSpacing: -1,
  },
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 20,
  },
  achievementCard: {
    width: Platform.OS === 'web' ? '48%' : '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: Platform.OS === 'web' ? 0 : 20,
  },
  icon: {
    fontSize: 32,
    marginBottom: 16,
  },
  achievementTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    fontFamily: Fonts.sans,
    marginBottom: 8,
    textDecorationLine: 'underline',
  },
  achievementDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    fontFamily: Fonts.sans,
    lineHeight: 20,
    marginBottom: 12,
  },
  achievementDate: {
    fontSize: 12,
    color: GabrielDesign.colors.accent,
    fontFamily: Fonts.mono,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
