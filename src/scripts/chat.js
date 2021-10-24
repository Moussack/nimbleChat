// import firestore/firebase function from sdk
import { collection, addDoc, Timestamp, onSnapshot, doc, query, where, orderBy } from '@firebase/firestore';
import { db } from '../index';

// adding new chat doc
// setting up real time listener to get new chats
// updating username
// updating the room
class Chatroom {
   constructor(room, username) {
      this.room = room;
      this.username = username;
      this.chats = collection(db, 'chatz');
      this.unsub;
   }

   // ADD CHAT TO DB
   async addChat(message) {
      // Create Date object to be passed to Timestamp.fromDate()
      const now = new Date();

      // create custom object to be sended to db
      const chat = {
         message,
         username: this.username,
         room: this.room,
         created_at: Timestamp.fromDate(now),
      };

      // *** send the custom object to the db
      const response = await addDoc(this.chats, chat);
      return response;
   }

   // SETTING UP REALTIME LISTENER
   getChats(callback) {
      // make query first for querying the db (so we can use where, orderBy, etc)
      const qry = query(this.chats, where('room', '==', this.room), orderBy('created_at'));

      this.unsub = onSnapshot(qry, (snapshot) => {
         //console.log(snapshot.docChanges());
         snapshot.docChanges().forEach((change) => {
            const doc = change.doc.data();
            if (change.type === 'added') {
               // *** render chats
               callback(doc);
            }
         });
      });
   }

   // UPDATE USERNAME
   updateName(username) {
      // *** update
      this.username = username;
   }

   // UPDATE ROOM
   updateRoom(room) {
      // *** update
      this.room = room;
      console.log(this.room);
      if (this.unsub) {
         this.unsub();
      }
   }
}

export default Chatroom;
