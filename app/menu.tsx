import React from "react";
import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image} from "react-native";
import { Colors } from "@/constants/Colors";
import { MenuItems } from "@/constants/MenuItems";
import MenuImages from "@/constants/MenuImages";


export default function MenuScreen (){
   const colorScheme = Appearance.getColorScheme()

   const theme = colorScheme === 'dark' ? Colors.dark : Colors.light

   const styles = createStyles(theme,colorScheme);

   const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

   const seperatorComponent = (): React.ReactElement => ( <View style={styles.seperator}></View>)
  //  const headerComp = <Text>Top of Lists</Text>
   const footerComp = <Text style={{color:theme.text}}>End of Menu</Text>
   return (
    <Container>

        <FlatList data={MenuItems} keyExtractor={(item)=>item.id.toString()} showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={seperatorComponent}
        // ListHeaderComponent={headerComp}
        ListFooterComponent={footerComp}
        ListFooterComponentStyle={styles.footerComp}
        ListEmptyComponent={<Text>No Items</Text>}
         renderItem={({item})=>(
           <View style={styles.row}>
            <View style={styles.menuTextRow}>
                <Text style={[styles.menuItemTitle,styles.menuItemText]}>{item.title}</Text>
                <Text style={styles.menuItemText}>{item.description}</Text>
            </View>
            <Image source={MenuImages[item.id-1]} style={styles.menuImage}/>
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
        marginHorizontal : "auto",
        
      },
      row:{
        flexDirection:'row',
        width: '100%',
        maxWidth: 600,
        height: 100,
        marginBottom:10,
        borderStyle: 'solid',
        borderColor: colorScheme === 'dark'? 'papayawhip' : '#000',
        borderWidth: 1,
        borderRadius:20,
        overflow: 'hidden',
        marginHorizontal:'auto',
      },
      menuTextRow:{
        width: '65%',
        paddingTop :10,
        paddingLeft:10,
        paddingRight : 10,
        flexGrow:1,
      },
      menuItemTitle:{
        fontSize:18,
        textDecorationLine:'underline'
      },
      menuItemText:{
        color:theme.text
      },
      menuImage:{
        width:100,
        height:100,
      }
   })

}