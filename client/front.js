import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js'

new Vue({
  el: '#app',
  data() {
    return {
      form: {
        name: '',
        value: ''
      },
      contacts: [
        {id: 1, name: 'Alex', value: 'sample value', marked: false}
      ]
    }
  },
  methods: {
    createContact() {
      const {...contact} = this.form
      //добавляем в массив карточек контактов новый контакт
      this.contacts.push({...contact, id: Date.now()})
      //очищаем инпуты после отправки формы
      this.form.name = this.form.value = ''
    },
    markContact(id) {
      const contact = this.contacts.find(c => c.id === id)
      contact.marked = true
    },
    removeContact(id) {
      console.log(id)
    }
  }
})