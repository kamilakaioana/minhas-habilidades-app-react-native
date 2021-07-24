import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps{
    skill: string;
    
}

export function  SkillCard({skill, ...rest} : SkillCardProps){
    return(
        <TouchableOpacity 
        style={styles.habilidadesButton}
        {...rest}
        >
           <Text style={styles.habilidadesText}>{skill}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    habilidadesButton: {
        backgroundColor: "#1f1e25",
        padding: 15,
        borderRadius: 50,
        alignItems: "center",
        marginVertical: 10,
      },
      habilidadesText: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
      },
}) 