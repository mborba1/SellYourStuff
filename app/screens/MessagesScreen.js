import React, { useState } from 'react';
import { FlatList, StyleSheet, View , SafeAreaView} from 'react-native';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
      id: 1,
      title: 'Title1',
      description: 'Description1',
      image: {uri:'https://randomuser.me/api/portraits/women/85.jpg'}
    },
    {
        id: 2,
        title: 'Title2',
        description: 'Description2',
        image: {uri:'https://randomuser.me/api/portraits/women/85.jpg'}
      },
]

function MessagesScreen(props) {

  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    //Delete the messages from message and later from backend server
    const newMessages = messages.filter(msg => msg.id !== message.id)
    setMessages(newMessages)

  }
    return (
      <SafeAreaView style={styles.screen}>
        <FlatList
          data={messages}
          keyExtractor={message => message.id.toString()}
          renderItem={({ item }) => 
          <ListItem 
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={ () => 
              <ListItemDeleteAction onPress={() => handleDelete(item) }/>}
              
           /> 
    }
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
           onRefresh={() => {
              setMessages([
                  {
                    id: 1,
                    title: 'Title1',
                    description: 'Description1',
                    image: {uri:'https://randomuser.me/api/portraits/women/85.jpg'}
                  },
                ])
              }}
          />       
      </SafeAreaView>   
    );
}


const styles = StyleSheet.create({
  screen:{
    flex: 1,
  }
})
export default MessagesScreen;