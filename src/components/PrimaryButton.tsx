import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, RADIUS, SPACING } from '../constants/theme'

type Props = {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secundary';
}

const PrimaryButton = ({title, onPress, variant = 'primary'}: Props) => {

    const isPrimary = variant == 'primary';

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.base,
                isPrimary ? styles.primary : styles.secundary,
                pressed && styles.pressed,
            ]}
            >
            <Text style={[styles.text, isPrimary && styles.textSecundary]}>{title}</Text>
        </Pressable>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    base: {
        paddingVertical: 12,
        paddingHorizontal: SPACING.lg,
        borderRadius: RADIUS.sm,
        alignItems: 'center',
    },
    primary: { backgroundColor: COLORS.primary },
    secundary: { backgroundColor: 'transparent', borderWidth: 1.5, borderColor: COLORS.primary },
    pressed: { opacity: 0.7 },
    text: { color: COLORS.text, fontWeight: '700', fontSize: 15 },
    textSecundary: { color: COLORS.card },
})