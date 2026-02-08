import { Linking, Platform, StyleSheet, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function TabTwoScreen() {
  const handleEmail = () => {
    const url = 'mailto:subhamrajx@gmail.com';
    if (Platform.OS === 'web') {
      const link = document.createElement('a');
      link.href = url;
      link.target = '_self';
      link.click();
    } else {
      Linking.openURL(url);
    }
  };

  const handlePhone = () => {
    const url = 'tel:8797285830';
    if (Platform.OS === 'web') {
      const link = document.createElement('a');
      link.href = url;
      link.target = '_self';
      link.click();
    } else {
      Linking.openURL(url);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Profile Details</ThemedText>
      </ThemedView>
      <Collapsible title="Education">
        <ThemedText type="defaultSemiBold">Academy of Technology</ThemedText>
        <ThemedText>
          Bachelor of Technology in Computer Science and Engineering (2022 - Present)
        </ThemedText>
        <ThemedText>CGPA: 6.00 / 10</ThemedText>
      </Collapsible>
      <Collapsible title="Work Experience">
        <ThemedText type="defaultSemiBold">Yuga Yatra Retail (OPC) Pvt. Ltd.</ThemedText>
        <ThemedText>Software Developer Intern (2 Months)</ThemedText>
        <ThemedText>On-Field Training (1 Month)</ThemedText>
        <ThemedText>
          • Designed and developed AI-integrated websites using modern web technologies.
          • Applied "vibe coding" techniques to deliver engaging user-centric interfaces.
          • Gained valuable experience working as an HR.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Technical Skills">
        <ThemedText>• Languages: Java, C++, JavaScript, SQL, HTML/CSS</ThemedText>
        <ThemedText>• Frameworks: React.js</ThemedText>
        <ThemedText>• Tools: Git, GitHub, MySQL</ThemedText>
      </Collapsible>
      <Collapsible title="Contact Info">
        <TouchableOpacity onPress={handleEmail}>
          <ThemedText>Email: <ThemedText type="defaultSemiBold" style={{ textDecorationLine: 'underline' }}>subhamrajx@gmail.com</ThemedText></ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePhone}>
          <ThemedText>Phone: <ThemedText type="defaultSemiBold" style={{ textDecorationLine: 'underline' }}>8797285830</ThemedText></ThemedText>
        </TouchableOpacity>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
