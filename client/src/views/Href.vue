<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <a href="tel:10086">拨打 10086</a>
      <button @click="onCall">拨打 10086</button>
    </div>
    
    <div>
      <a href="sms:10086">发短信</a>
      <button @click="onSms">api 发短信</button>
      <button @click="onManySms">给多人发短信</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Href',
  methods: {
    onCall() {
      window.location.href = 'tel:10086'
    },
    onSms() {
      window.location.href = 'sms:10086?body=花费'
    },
    onManySms() {
      window.location.href = 'sms:1008611,10086?body=花费'
    }
  }
}
</script>
