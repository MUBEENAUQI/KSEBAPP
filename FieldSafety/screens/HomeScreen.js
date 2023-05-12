import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


const HomeScreen = ({ navigation }) => {
    const data = [
        {
            id: '1',
            title: '1. DO ഫ്യൂസ് കെട്ടുമ്പോൾ ശ്രദ്ധിക്കേണ്ട കാര്യങ്ങൾ',
            images: [
                { url: require('../assets/1/1-1.jpg') }
            ],
            count: 1
        },
        {
            id: '2',
            title: '2. ഇക്യു പൊട്ടൻഷ്യൽ ബോണ്ടിങ് എർത്തിങ്',
            images: [
                { url: require('../assets/2/2-1.jpg') }
            ],
            count: 1
        },
        {
            id: '3',
            title: '3. സേഫ്റ്റി പോളിസി',
            images: [
                { url: require('../assets/3/3-1.jpg') }
            ],
            count: 1
        },
        {
            id: '4',
            title: '4. അടിസ്ഥാന വിവരങ്ങൾ',
            images: [
                { url: require('../assets/4/4-1.jpg') }
            ],
            count: 1
        },
        {
            id: '5',
            title: '5. സിംഗിൾ ലൈൻ ഡയഗ്രം',
            images: [
                { url: require('../assets/5/5-1.jpg') }
            ],
            count: 1
        },
        {
            id: '6',
            title: '6. ടേബിൾ - തിരുവേഗപ്പുറ സെക്ഷൻ കൺസ്യൂമർ (Abstract)',
            images: [
                { url: require('../assets/6/6-1.jpg') }
            ],
            count: 1
        },
        {
            id: '7',
            title: '7. ടേബിൾ - തിരുവേഗപ്പുറ സെക്ഷൻ ഓൺ ഗ്രിഡ് സോളാർ ഉപഭോക്താക്കൾ',
            images: [
                { url: require('../assets/7/7-1.jpg') }
            ],
            count: 1
        },
        {
            id: '8',
            title: '8. ടേബിൾ - തിരുവേഗപ്പുറ സെക്ഷൻ ട്രാൻസ്ഫോർമറുകൾ',
            images: [
                { url: require('../assets/8/8-1.jpg') },
                { url: require('../assets/8/8-2.jpg') },
                { url: require('../assets/8/8-3.jpg') }
            ],
            count: 3
        },
        {
            id: '9',
            title: '9. ഫോൾട് പാസ് ഡിറ്റക്ടർ',
            images: [
                { url: require('../assets/9/9-1.jpg') }
            ],
            count: 1
        },
        {
            id: '10',
            title: '10. ടേബിൾ - തിരുവേഗപ്പുറ സെക്ഷൻ എ.ബി. സ്വിച്ചുകൾ',
            images: [
                { url: require('../assets/10/10-1.jpg') },
                { url: require('../assets/10/10-2.jpg') }
            ],
            count: 2
        },
        {
            id: '11',
            title: '11. ടേബിൾ - തിരുവേഗപ്പുറ സെക്ഷൻ എൽ.ടി ഇന്റർലിങ്കുകൾ',
            images: [
                { url: require('../assets/11/11-1.jpg') },
                { url: require('../assets/11/11-2.jpg') },
                { url: require('../assets/11/11-3.jpg') },
                { url: require('../assets/11/11-4.jpg') },
                { url: require('../assets/11/11-5.jpg') },
                { url: require('../assets/11/11-6.jpg') },
                { url: require('../assets/11/11-7.jpg') }
            ],
            count: 7
        },
        {
            id: '12',
            title: '12. ടേബിൾ - തിരുവേഗപ്പുറ സെക്ഷൻ പ്രതിമാസ ഉപഭോക്താക്കൾ',
            images: [
                { url: require('../assets/12/12-1.jpg') },
                { url: require('../assets/12/12-2.jpg') },
                { url: require('../assets/12/12-3.jpg') },
                { url: require('../assets/12/12-4.jpg') },
                { url: require('../assets/12/12-5.jpg') },
                { url: require('../assets/12/12-6.jpg') },
                { url: require('../assets/12/12-7.jpg') },
            ],
            count: 7,
        },
        {
            id: '13',
            title: '13. അവശ്യ ഫോൺ നമ്പരുകൾ',
            images: [{ url: require('../assets/13/13-1.jpg') }],
            count: 1,
        },
        {
            id: '14',
            title: '14. നിർമ്മാണ മാനദണ്ഡങ്ങൾ',
            images: [
                { url: require('../assets/14/14-1.jpg') },
                { url: require('../assets/14/14-2.jpg') },
                { url: require('../assets/14/14-3.jpg') },
            ],
            count: 3,
        },
        {
            id: '15',
            title: '15. സ്റ്റാൻഡാർഡ്സ് ഓഫ് പെർഫോമൻസ്',
            images: [{ url: require('../assets/15/15-1.jpg') }],
            count: 1,
        },
        {
            id: '16',
            title: '16. ഈസ് ഓഫ് ഡൂയിങ് ബിസിനസ്',
            images: [
                { url: require('../assets/16/16-1.jpg') },
                { url: require('../assets/16/16-2.jpg') },
                { url: require('../assets/16/16-3.jpg') },
                { url: require('../assets/16/16-4.jpg') },
                { url: require('../assets/16/16-5.jpg') },
                { url: require('../assets/16/16-6.jpg') },
                { url: require('../assets/16/16-7.jpg') },
                { url: require('../assets/16/16-8.jpg') },
            ],
            count: 8,
        },
        {
            id: '17',
            title: '17. ടേബിൾ - നിയമാനുസൃതമായ അകലങ്ങൾ ടേബിൾ - ട്രാൻസ്ഫോർമർ കാണ്ട് റേറ്റിങ്ങ്',
            images: [
                { url: require('../assets/17/17-1.jpg'), count: 1 },
            ],
        },
        {
            id: '18',
            title: '18. ടേബിൾ - എർത്ത് റെസിസ്റ്റൻസ്',
            images: [
                { url: require('../assets/18/18-1.jpg'), count: 1 },
            ],
        },
        {
            id: '19',
            title: '19. ടേബിൾ - കപ്പാസിറ്റർ റേറ്റിങ്ങ്സ് (INDUCTION MOTORS)',
            images: [
                { url: require('../assets/19/19-1.jpg'), count: 1 },
            ],
        },
        {
            id: '20',
            title: '20. ടേബിൾ - കപ്പാസിറ്റർ റേറ്റിങ്ങ്സ് (WELDING TRANSFORMERS)',
            images: [
                { url: require('../assets/20/20-1.jpg'), count: 1 },
            ],
        },
        {
            id: '21',
            title: '21. ടേബിൾ - കോമ്പൗണ്ടിങ്ങ് ചാർജ്ജുകൾ',
            images: [
                { url: require('../assets/21/21-1.jpg'), count: 1 },
            ],
        },
        {
            id: '22',
            title: '22. ടേബിൾ - ക്യാഷ് ഡെപ്പോസിറ്റ് നിരക്കുകൾ',
            images: [
                { url: require('../assets/22/22-1.jpg'), count: 1 },
            ],
        },
        {
            id: '23',
            title: '23 ടേബിൾ - വീട്ടുപകരണങ്ങളും കപ്പാസിറ്റിയും',
            images: [{ url: require('../assets/23/23-1.jpg') }],
            count: 1
        },
        {
            id: '24',
            title: '24. ടേബിൾ - വീട്ടുപകരണങ്ങളും കപ്പാസിറ്റിയും',
            images: [{ url: require('../assets/24/24-1.jpg') }],
            count: 1
        },
        {
            id: '25',
            title: '25. ഓൺ ലൈൻ പണമടയ്ക്കൽ',
            images: [
                { url: require('../assets/25/25-1.jpg') },
                { url: require('../assets/25/25-2.jpg') }
            ],
            count: 2
        },
        {
            id: '26',
            title: '26. കടമകളും ഉത്തരവാദിത്വങ്ങളും',
            images: [
                { url: require('../assets/26/26-1.jpg') },
                { url: require('../assets/26/26-2.jpg') },
                { url: require('../assets/26/26-3.jpg') },
                { url: require('../assets/26/26-4.jpg') }
            ],
            count: 4
        },
    ];


    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Detail', { itemId: item.title,count: item.count, imagesurls: item.images })}
        >
            <Text style={styles.item}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>KSEB Field Safety</Text>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: '#193a63',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:5
    },
    headerTitle: {
        color: 'white',
        fontSize: RFValue(26, 680),
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    itemContainer: {
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    item: {
        fontSize: RFValue(18, 680),
        fontWeight: '600',
        color: '#454545',
    },
});

export default HomeScreen;