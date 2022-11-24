import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    container:{
      flex:1,
      padding:24,
      backgroundColor:'#131016'
    },
    eventName:{
      color:'#fff',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate:{
      color:'#6b6b6b',
      fontSize: 16,
    },
    form:{
      width:'100%',
      flexDirection: 'row',
      gap: 10,
      alignItems:'center',
      justifyContent:'center',
      marginTop: 36,
      marginBottom: 42,
    },
    input:{
      flex:1,
      backgroundColor:'#1f1e25',
      height: 56,
      padding:16,
      fontSize: 16,
      marginRight: 12,
      borderRadius:5,
      color: '#fff',
    },
    buttonText:{
      fontSize: 24,
      color: '#fff'
    },
    button:{
      width: 56,
      height: 56,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#31cf67'
    },
    listEmptyText:{
      color:'#fff',
      fontSize: 14,
      textAlign:'center',
    }
  });