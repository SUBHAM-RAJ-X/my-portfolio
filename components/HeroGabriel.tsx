import { Fonts, GabrielDesign } from '@/constants/theme';
import React from 'react';
import { Dimensions, Image, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInLeft, FadeInUp } from 'react-native-reanimated';

const { height: windowHeight } = Dimensions.get('window');

export function HeroGabriel() {
    const handleConnect = () => Linking.openURL('https://www.linkedin.com/in/subham-raj-4aa551254');
    const handleResume = () => Linking.openURL('https://drive.google.com/file/d/1Ic076nNNbTQlK1gW0k4OWAu4FVnJpcdQ/view?usp=sharing'); // Placeholder URL

    return (
        <View style={styles.container}>
            <Animated.View entering={FadeInLeft.delay(200)} style={styles.topRow}>
                <View style={styles.tagContainer}>
                    <View style={styles.nameSection}>
                        <Image
                            source={require('@/assets/images/Design Studio Logo Modern Elegance.png')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                        <Text style={styles.name}>Subham Raj</Text>
                    </View>
                    <Text style={styles.tag}>Website UI/UX Designer</Text>
                    <Text style={styles.tag}>App UI/UX Designer</Text>
                    {/* <Text style={styles.tag}>Branding and Strategy</Text> */}
                </View>
                <View style={styles.linksContainer}>
                    <TouchableOpacity onPress={handleConnect}>
                        <Text style={styles.connectLink}>Connect with me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleResume}>
                        <Text style={styles.connectLink}>Resume</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>

            <Animated.View entering={FadeInUp.delay(400)} style={styles.titleWrapper}>
                <Text style={styles.mainTitle}>
                    software <Text style={styles.italic}>DEVELOPer</Text> {'\n'}& AI enthusiast
                </Text>
            </Animated.View>

            <Animated.View entering={FadeInUp.delay(600)} style={styles.bottomSection}>
                <View style={styles.introSnippet}>
                    <Text style={styles.description}>
                        CS Engineer & Vibe Coder | Frontend Specialist
                        I am a Engineer from the Academy of Technology who bridges complex JavaScript logic with intuitive, stress-free UI/UX.
                    </Text>
                </View>

                <View style={styles.statsRow}>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>2 / 1</Text>
                        <Text style={styles.statLabel}>Projects (Done / Active)</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>2 + 1</Text>
                        <Text style={styles.statLabel}>Months (Intern / Training)</Text>
                    </View>
                </View>
            </Animated.View>

            <Animated.View entering={FadeInUp.delay(800)} style={styles.scrollIndicator}>
                <Text style={styles.scrollText}>(Scroll to explore)</Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        minHeight: windowHeight * 0.9,
        justifyContent: 'space-between',
        paddingVertical: GabrielDesign.spacing.xl,
        backgroundColor: 'transparent',
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: GabrielDesign.spacing.xl,
    },
    tagContainer: {
        flexDirection: 'column',
        gap: 4,
    },
    nameSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: -10, // Slight left offset for the whole section
    },
    logo: {
        width: 60,
        height: 60,
        marginRight: 10,
    },
    name: {
        color: '#FFFFFF',
        fontSize: 44,
        fontWeight: '700',
        fontFamily: Fonts.sans,
    },
    tag: {
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: Fonts.mono,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    linksContainer: {
        alignItems: 'flex-end',
        gap: 8,
    },
    connectLink: {
        color: '#FFFFFF',
        fontSize: 12,
        textDecorationLine: 'underline',
        fontFamily: Fonts.mono,
        textTransform: 'uppercase',
    },
    titleWrapper: {
        marginVertical: GabrielDesign.spacing.xxl,
    },
    mainTitle: {
        fontSize: Platform.OS === 'web' ? 96 : 54,
        fontWeight: '800',
        color: '#FFFFFF',
        lineHeight: Platform.OS === 'web' ? 100 : 58,
        textTransform: 'uppercase',
        letterSpacing: -2,
    },
    italic: {
        fontStyle: 'italic',
        fontWeight: '300',
        fontFamily: Fonts.serif,
    },
    bottomSection: {
        flexDirection: Platform.OS === 'web' ? 'row' : 'column',
        justifyContent: 'space-between',
        alignItems: Platform.OS === 'web' ? 'flex-end' : 'flex-start',
        gap: 32,
    },
    introSnippet: {
        maxWidth: Platform.OS === 'web' ? 450 : '100%',
    },
    description: {
        fontSize: 16,
        lineHeight: 22,
        color: 'rgba(255, 255, 255, 0.7)',
        fontFamily: Fonts.sans,
    },
    statsRow: {
        flexDirection: 'row',
        gap: 48,
    },
    statItem: {
        gap: 4,
    },
    statValue: {
        fontSize: 32,
        fontWeight: '700',
        color: '#FFFFFF',
        fontFamily: Fonts.sans,
    },
    statLabel: {
        fontSize: 10,
        color: 'rgba(255, 255, 255, 0.4)',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    scrollIndicator: {
        marginTop: 40,
        alignItems: 'center',
    },
    scrollText: {
        fontSize: 10,
        color: 'rgba(255, 255, 255, 0.3)',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
});
