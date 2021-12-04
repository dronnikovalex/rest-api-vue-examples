import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js'

new Vue({
  el: '#app',
  data() {
    return {
      form: {
        name: '',
        value: ''
      },
      contacts: []
    }
  },
  methods: {
    createContact() {
      const {...contact} = this.form
      //добавляем в массив карточек контактов новый контакт
      this.contacts.push({...contact, id: Date.now()})
      //очищаем инпуты после отправки формы
      this.form.name = this.form.value = ''
    }
  }
})