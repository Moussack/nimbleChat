// render chat templates to the dom
// clear list of chats

class chatUI {
   constructor(list) {
      this.list = list;
   }

   render(doc) {
      console.log(doc);
      // make the html template
      let html = `
          <li class="list-group-item">
            <span class="username">${doc.username}</span>
            <span class="message">${doc.message}</span>
            <div class="time">${doc.created_at.toDate()}</span>
         </li>
      `;

      // *** render it to the dom
      this.list.innerHTML += html;
   }
}

export default chatUI;
