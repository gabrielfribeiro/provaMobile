import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.texts}>Prova Mobile</Text>
        <Text style={styles.texts}>GABRIEL PRADO RIBEIRO</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyContainer}>
          <View>
            <Text style={styles.title}>Dados da entrega:</Text>
            <View style={styles.entrega}>
              <Text style={styles.itensText}>Avenida Brasil, n°380</Text>
              <Text style={styles.itensText}>Tempo de entrega: 70min a 80min</Text>
              <Text style={styles.itensText}>Tipo de entrega: Delivery</Text>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Itens do pedido:</Text>
            <View style={styles.itens}>
              <Text style={styles.itensText}>2x ------- Coca Lata</Text>
              <Text style={styles.itensText}>1x ------- Marmita M</Text>
              <Text style={styles.itensText}>1x ------- Salada</Text>
              <Text style={styles.itensText}>1x ------- Sorvete 300ml</Text>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Dados do pagamento:</Text>
              <View style={styles.itens}>
                <Text style={styles.itensText}>Cartão de Crédito:  ************1569</Text>
                <Text style={styles.itensText}>Valor do pedido: R$ 40,00</Text>
                <Text style={styles.itensText}>Taxa de entrega: R$ 12,98</Text>
                <Text style={styles.itensText}>Valor Total: R$ 52,98</Text>
              </View>
          </View>
        </View>
      </View>
      <View style={styles.footer} />
    </View>
  );
}

 const styles = StyleSheet.create({
  itens: {
    backgroundColor: '#2869DE',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  entrega: {
    backgroundColor: '#2869DE',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  container: {
     flex: 1,
  },
  title: {
    color: '#000',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 5,
  },
  header: {
    backgroundColor: '#2869DE',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  body: {
    backgroundColor: '#fff',
    flex: 7,
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: '#2869DE',
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
  },
  texts: {
    color: '#fff',
    fontSize: 15,
  },
  itensText: {
    color: '#fff',
    fontSize: 17,
  },
  bodyTexts: {
    color: '#000',
    fontSize: 17,
  }
 });
