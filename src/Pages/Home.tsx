import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
  StatusBar,

} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData{
  id: string;
  name: string;
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },

  titulo: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1F1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  saudacao:{
    color: '#fff',
  },
 

});

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

   
    
    setMySkills((oldState) => [...oldState, data]); //estados antigos, ... para fazer nova combinacao de array
}

  function handleRemoveSkill(id: string){
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  }
 
 useEffect(() => {
   const currentHour = new Date().getHours();
  
  
   if(currentHour < 12){
     setGretting('Bom Dia');
   }
   else if(currentHour >= 12 && currentHour < 18){
     setGretting('Boa Tarde');
   }else{
     setGretting('Boa Noite');
   }
 }, [])


  return (
    <View style={styles.container}>

      <StatusBar barStyle="light-content" />
      <Text style={styles.titulo}>Bem Vinda, Mila</Text>
      <Text style={styles.saudacao}>{gretting}</Text>

      <TextInput
        style={styles.input}
        placeholder="Sua Habilidade"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button
       onPress={handleAddNewSkill}
       title="Add"
       
      />

      <Text style={[styles.titulo, { marginVertical: 50 }]}>
        Minhas Habilidades
      </Text>

      

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard 
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
            />
        )}
      />
     
      
    </View>
  );
}
