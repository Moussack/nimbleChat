import Chatroom from './chat';
import ChatUI from './ui';

class App {
   constructor() {
      // dom queries
      const chatList = document.querySelector('.chat-list');
      const newChatForm = document.querySelector('.new-chat');
      const newNameForm = document.querySelector('.new-name');
      const updateMssg = document.querySelector('.update-mssg');
      const rooms = document.querySelector('.chat-rooms');

      // Check local storage fot a name
      const username = localStorage.getItem('username') ? localStorage.getItem('username') : 'Anonymous';

      // class instances
      const chatroom = new Chatroom('general', username);
      const chatui = new ChatUI(chatList);

      // Add new chat via the UI
      newChatForm.addEventListener('submit', (e) => {
         e.preventDefault();
         // get user data input
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

      // Update username
      newNameForm.addEventListener('submit', (e) => {
         e.preventDefault();
         // get user data input
         const newName = newNameForm.name.value.trim();
         // update the new name
         chatroom.updateName(newName);
         // reset the form
         newNameForm.reset();
         // update message, show then hide the update mssg
         updateMssg.innerText = `Your name was updated to ${newName}`;
         setTimeout(() => (updateMssg.innerText = ''), 3000);
      });

      // update chat room when clicking the correspondent button
      rooms.addEventListener('click', (e) => {
         //console.log(e);
         if (e.target.nodeName === 'BUTTON') {
            // clear chat list in DOM
            chatui.clear();
            // *** update the room by unsub first
            chatroom.updateRoom(e.target.id);
            // *** listen the new room again
            chatroom.getChats((doc) => chatui.render(doc));
         }
      });
   }
}

export default App;
