import { Fonts } from '@/constants/theme';
import { StyleSheet, Text, View } from 'react-native';

const TESTIMONIALS = [
    {
        quote: "CS Engineer & Vibe Coder | Frontend Specialist I am a Computer Science Engineer from the Academy of Technology who bridges complex JavaScript logic with intuitive, stress-free UI/UX.",
        author: "Client Feedback",
    },
    {
        quote: "Merging visual storytelling & UX strategy to bring digital products to life. Seamless, engaging experiences.",
        author: "Peer Review",
    },
];

export function TestimonialsSection() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>what people say about me</Text>
            {TESTIMONIALS.map((t, i) => (
                <View key={i} style={styles.testimonial}>
                    <Text style={styles.quote}>"{t.quote}"</Text>
                    <Text style={styles.author}>— {t.author}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 60,
        gap: 40,
    },
    sectionTitle: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.3)',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    testimonial: {
        gap: 16,
        maxWidth: 800,
    },
    quote: {
        fontSize: 20,
        lineHeight: 28,
        color: '#FFF',
        fontStyle: 'italic',
        fontWeight: '300',
    },
    author: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.5)',
        fontFamily: Fonts.mono,
        textTransform: 'uppercase',
    },
});
