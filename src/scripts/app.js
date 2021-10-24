import Chatroom from './chat';
import ChatUI from './ui';

class App {
   constructor() {
      // dom queries
      const chatList = document.querySelector('.chat-list');

      // class instances
      const chatroom = new Chatroom('general', 'reyhan');
      const chatui = new ChatUI(chatList);

      // get chats and render
      chatroom.getChats((doc) => chatui.render(doc));
   }
}

export default App;
