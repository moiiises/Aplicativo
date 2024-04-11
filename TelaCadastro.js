import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const TelaCadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [modeloCarro, setModeloCarro] = useState('');
  const [anoCarro, setAnoCarro] = useState('');
  const [marcaCarro, setMarcaCarro] = useState('');
  const [potenciaCarro, setPotenciaCarro] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleVoltarPress = () => {
    navigation.goBack();
  };

  const handleCadastro = async () => {
    try {
      const response = await fetch('http://10.0.0.238:8081/api/cadastro', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          sobrenome,
          modeloCarro,
          anoCarro,
          marcaCarro,
          potenciaCarro,
          senha,
        }),
      });
      const data = await response.json();
      console.log('Resposta do servidor:', data);
  
      // Limpa os campos após o cadastro
      setNome('');
      setSobrenome('');
      setModeloCarro('');
      setAnoCarro('');
      setMarcaCarro('');
      setPotenciaCarro('');
      setSenha('');
      setConfirmarSenha('');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: '#fff' }]}>
      <Text style={styles.title}>S&L Control Charging</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Modelo do Carro"
        value={modeloCarro}
        onChangeText={setModeloCarro}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Ano do Carro"
        value={anoCarro}
        onChangeText={setAnoCarro}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Marca do Carro"
        value={marcaCarro}
        onChangeText={setMarcaCarro}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Potência do Carro Elétrico"
        value={potenciaCarro}
        onChangeText={setPotenciaCarro}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.voltarButton} onPress={handleVoltarPress}>
        <Text style={styles.voltarButtonText}>Voltar para a tela inicial</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#f2f2f2',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#333',
  },
  button: {
    backgroundColor: '#1ABC9C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  voltarButton: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  voltarButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TelaCadastro;
