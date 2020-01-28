import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        padding: 16,
        marginTop: 12,
        shadowColor: 'rgba(47, 128, 237, 0.32)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 13,
        borderRadius: 25,
        backgroundColor: '#ffffff',
        elevation: 3
    },
    boxSquare: {
        width: width/2-46,
        flexDirection: 'column',
        
        // justifyContent: 'space-between',
        marginTop: 12,
        shadowColor: 'rgba(47, 128, 237, 0.32)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 13,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        elevation: 3
    },
    avatar: {
        marginTop: 16,
        marginHorizontal: 14,
        width:  width/2-44,
        height: 120,
        resizeMode :'stretch',
        alignItems:'center',
        
    },
    WrapFollow:{
        width : 50,
        height: 20,
        borderRadius: 10,
        marginTop: -130,
        marginLeft : width/2-116,
        backgroundColor: '#FFF',
        justifyContent:'center',
        alignItems:'center',
        zIndex: 1,
        shadowColor: 'rgba(47, 128, 237, 0.32)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 13,
        elevation: 3
    },
    followGradient:{
        width: 46,
        height: 16,
        borderRadius: 8,
        justifyContent:'center',
        alignItems:'center'
    },
    square: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'center'
    },
    
    linearGradient: {
        marginTop: -35,
        zIndex: 2,
        width: width/2-56,
		height: 35,
		justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius : 6,
        borderBottomLeftRadius : 6,
    },
    bottomView: {width:width/2-56, height:40, zIndex: 1, backgroundColor:'#FFF', marginTop: 80,
     borderBottomLeftRadius : 6,
     borderBottomRightRadius : 6    
    }
})