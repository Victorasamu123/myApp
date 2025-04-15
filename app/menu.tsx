import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image} from "react-native";
import { Colors } from "@/constants/Colors";
import { MenuItems } from "@/constants/MenuItems";
import MenuImages from "@/constants/MenuImages";


export default function MenuScreen (){
   const colorScheme = Appearance.getColorScheme()

   const theme = colorScheme === 'dark' ? Colors.dark : Colors.light

   const styles = createStyles(theme,colorScheme);

   const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

   const seperatorComponent = <View style={styles.seperator}></View>
   const headerComp = <Text>Top of Lists</Text>
   const footerComp = <Text>Buttom of Lists</Text>
   return (
    <Container>
        <FlatList data={MenuItems} keyExtractor={(item)=>item.id.toString()} showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={seperatorComponent}
        ListHeaderComponent={headerComp}
        ListFooterComponent={footerComp}
        ListFooterComponentStyle={styles.footerComp}
         renderItem={({item})=>(
           <View>
            <View>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
            </View>
            <Image source={MenuImages[item.id-1]}/>
           </View>
        )}/>
    </Container>
   )
}

function createStyles (theme: { text: string; background: string; backgroundHeader: string; tint: string; icon: string; tabIconDefault: string; tabIconSelected: string; },colorScheme: string | null | undefined) {
   return StyleSheet.create({
      contentContainer:{
        paddingTop : 10,
        paddingBottom: 20,
        paddingHorizontal:12,
        backgroundColor:theme.background,
      },
      seperator:{
        height:1,
        backgroundColor: colorScheme === 'dark'? 'papayawhip' : '#000',
        width: "50%",
        maxWidth:300,
        marginHorizontal: "auto",
        marginBottom: 10,
      },
      footerComp:{
        marginHorizontal : "auto"
      }
   })

}