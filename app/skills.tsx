import { Fonts, GabrielDesign } from '@/constants/theme';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, Linking, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInLeft, FadeInUp } from 'react-native-reanimated';

const { height: windowHeight } = Dimensions.get('window');

const skillGroups = [
  {
    title: 'Design Skills',
    items: [
      'UI/UX Design',
      'Wireframing & Prototyping',
      'Adobe Creative Suite',
      'Figma',
      'Logo Design',
      'Brand Identity'
    ]
  },
  {
    title: 'Development Skills',
    items: [
      'React & React Native',
      'TypeScript',
      'JavaScript ES6+',
      'HTML5 & CSS3',
      'Node.js',
      'Git & GitHub'
    ]
  },
  {
    title: 'Tools & Technologies',
    items: [
      'Expo & Expo Router',
      'Metro Bundler',
      'VS Code',
      'Chrome DevTools',
      'Responsive Design',
      'Performance Optimization'
    ]
  }
];

export default function SkillsScreen() {
  const router = useRouter();
  
  const handleBack = () => router.back();
  const handleConnect = () => Linking.openURL('https://www.linkedin.com/in/subham-raj-4aa551254');

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Skills & Expertise</Text>
        <TouchableOpacity onPress={handleConnect} style={styles.connectButton}>
          <Text style={styles.connectButtonText}>Connect</Text>
        </TouchableOpacity>
      </View>

      <Animated.View entering={FadeInLeft.delay(200)} style={styles.introSection}>
        <Text style={styles.introText}>
          A comprehensive skill set combining creative design expertise with modern development technologies.
        </Text>
      </Animated.View>

      <View style={styles.skillsContainer}>
        {skillGroups.map((group, index) => (
          <Animated.View 
            key={index} 
            entering={FadeInUp.delay(400 + index * 200)} 
            style={styles.skillGroup}
          >
            <Text style={styles.groupTitle}>{group.title}</Text>
            <View style={styles.skillsList}>
              {group.items.map((skill, skillIndex) => (
                <View key={skillIndex} style={styles.skillItem}>
                  <View style={styles.bullet} />
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>
          </Animated.View>
        ))}
      </View>

      <Animated.View entering={FadeInUp.delay(1000)} style={styles.footer}>
        <Text style={styles.footerText}>
          Building with purpose. Designing with impact. Growing every day.
        </Text>
        <TouchableOpacity onPress={handleBack} style={styles.backToHomeButton}>
          <Text style={styles.backToHomeText}>Back to Portfolio</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    minHeight: windowHeight,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'web' ? 60 : 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  backButton: {
    padding: 8,
    marginRight: 16,
  },
  backButtonText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  title: {
    fontSize: Platform.OS === 'web' ? 28 : 22,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: Fonts.sans,
    flex: 1,
    textAlign: 'center',
  },
  connectButton: {
    backgroundColor: GabrielDesign.colors.accent,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  connectButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: Fonts.sans,
    fontWeight: '600',
  },
  introSection: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  introText: {
    fontSize: 16,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: Fonts.sans,
    textAlign: 'center',
  },
  skillsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  skillGroup: {
    marginBottom: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  groupTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    fontFamily: Fonts.sans,
    marginBottom: 16,
  },
  skillsList: {
    gap: 12,
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: GabrielDesign.colors.accent,
    marginTop: 8,
  },
  skillText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    fontFamily: Fonts.sans,
    lineHeight: 20,
    flex: 1,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 60,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
    fontFamily: Fonts.sans,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 24,
  },
  backToHomeButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  backToHomeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: Fonts.sans,
    fontWeight: '500',
  },
});
