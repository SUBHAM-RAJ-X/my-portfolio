import { Fonts } from '@/constants/theme';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

const MANTRAS = [
    'Design with Heart # Build with Logic',
    'Vibe Coding # High Velocity Impact',
    'User-Centric Growth # Simplify Complexity',
    'Stay Artistic # Engineering Excellence',
];

export function Ticker() {
    const translateX = useSharedValue(0);

    useEffect(() => {
        translateX.value = withRepeat(
            withTiming(-400, {
                duration: 10000,
                easing: Easing.linear,
            }),
            -1,
            false
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.track, animatedStyle]}>
                {MANTRAS.map((mantra, index) => (
                    <Text key={index} style={styles.text}>
                        {mantra} <Text style={styles.bullet}>•</Text>{' '}
                    </Text>
                ))}
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#111',
        justifyContent: 'center',
        overflow: 'hidden',
        marginHorizontal: -24,
        marginVertical: 40,
    },
    track: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 3000, // Large enough for continuous feel
    },
    text: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: Fonts.mono,
        textTransform: 'uppercase',
        letterSpacing: 1,
        paddingRight: 40,
    },
    bullet: {
        color: '#A1CEDC',
        fontSize: 24,
    },
});
