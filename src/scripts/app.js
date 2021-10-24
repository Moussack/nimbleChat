import Chatroom from './chat';
import ChatUI from './ui';

class App {
   constructor() {
      // dom queries
      const chatList = document.querySelector('.chat-list');
      const newChatForm = document.querySelector('.new-chat');

      // class instances
      const chatroom = new Chatroom('gaming', 'luck');
      const chatui = new ChatUI(chatList);

      // Add new chat via the UI
      newChatForm.addEventListener('submit', (e) => {
         e.preventDefault();
         const message = newChatForm.message.value.trim();

         // *** send message to db
         chatroom
            .addChat(message)
            .then(() => {
               newChatForm.reset();
            })
            .catch((err) => {
               console.log(err);
            });
      });

      // *** get chats and render
      chatroom.getChats((doc) => chatui.render(doc));
   }
}

export default App;
