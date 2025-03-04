import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { useUser } from '../context/AppContext';

export default function UserDetailScreen ({ navigation }) {
  const { user, resetUser } = useUser();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.BackButton}
            onPress={() => navigation.navigate('HomeScreen')}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Home</Text>
      </View>
      <Text style={styles.title}>User Details</Text>
      <Text>Name: {user.name}</Text>
      <Text>Age: {user.age}</Text>
      <Text>Address: {user.address}</Text>
      {user.profilePicture && (
        <Image source={{ uri: user.profilePicture }} style={styles.image} />
      )}
      <Text>Family Details:</Text>
      {user.familyDetails.map((member, index) => (
        <Text key={index}>{member.name} - {member.relation}</Text>
      ))}
      <Text>Educational Details:</Text>
      {user.educationDetails.map((edu, index) => (
        <Text key={index}>{edu.institution} - {edu.degree}</Text>
      ))}
      <Button title="Edit" onPress={() => navigation.navigate("EditForm")} />
      <Button title="Reset" onPress={resetUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  image: { width: 100, height: 100, marginVertical: 10 },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10, 
  },
  BackButton: {
    backgroundColor: '#9A82F6',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
});
