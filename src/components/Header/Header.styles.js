import {StyleSheet} from 'react-native';


const styles=StyleSheet.create({
  container:{
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleView:{
    flexDirection: 'row',
    alignItems: 'center',

  },
  button:{
    backgroundColor: '#ffffffff',
    marginLeft: -12
  },
  title:{
    fontSize: 18,
    flex: 1,
    flexWrap: 'wrap',
    textAlign:'center',
    paddingRight:30
  }
})

export default styles;
