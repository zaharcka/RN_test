import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 40,
        paddingHorizontal: 40,
    },
    itemContainer: {
        backgroundColor: '#E5E8E8',
        borderRadius: 5,
        width: '100%',
        padding: 5,
        marginBottom: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textTitle: {
        maxWidth: '80%',
    },
    itemSubcontainer: {
        flexDirection: 'row'
    },
    indicator: {
        width: 20,
        height: 20,
        backgroundColor: 'white',
        borderRadius: 3,
        marginRight: 5,
    },
    indicator2: {
        width: 20,
        height: 20,
        backgroundColor: '#E5E8E8',
        borderRadius: 3,
    },
    firstLine: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputContainer: {
        flex: 1,
        paddingHorizontal: 5,
        justifyContent: 'center',
        marginRight: 5,
        backgroundColor: '#E5E8E8',
        borderRadius: 5,
    },
    addButton: {
        padding: 10,        
        borderRadius: 5,                        
    },
    globalSubcontainer: {
        flex: 1,
        width: '100%',
        marginTop: 20,
    },
    showButton: { 
        padding: 10,
        backgroundColor: '#FAD7A0',
        borderRadius: 5,  
        marginBottom: 20,
        alignItems: 'center'
    }
});

export default styles;