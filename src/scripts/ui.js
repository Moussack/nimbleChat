import { distanceInWordsToNow } from 'date-fns';

// render chat templates to the dom
// clear list of chats
class chatUI {
   constructor(list) {
      this.list = list;
   }

   render(doc) {
      const when = distanceInWordsToNow(doc.created_at.toDate(), { addSuffix: true });

      console.log(doc);
      // make the html template
      const html = `
          <li class="list-group-item">
            <span class="username">${doc.username}</span>
            <span class="message">${doc.message}</span>
            <div class="time">${when}</span>
            <div class="time">Free user</span>
         </li>
      `;

      // *** render it to the dom
      this.list.innerHTML += html;
   }
}

export default chatUI;
