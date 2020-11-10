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

    <div>
      <a href="mailto:bd@kachexiongdi.com">发邮件</a>
      <button @click="onMail">api 发邮件</button>
      <button @click="onSubject">给邮件定主题</button>
      <button @click="onBody">给邮件定内容</button>
      <button @click="onBodyPic">给邮件定内容，内容可有图片</button>
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
    },
    onMail() {
      window.location.href = 'mailto:bd@kachexiongdi.com'
    },
    onSubject() {
      window.location.href = 'mailto:bd@kachexiongdi.com?subject=程序猿1024'
    },
    onBody() {
      window.location.href = 'mailto:bd@kachexiongdi.com?subject=程序猿1024&body=今天不加班'
    },
    onBodyPic() {
      window.location.href = `
        mailto:bd@kachexiongdi.com?subject=程序猿1024&body=今天不加班
        <div align="center">
          <img src=https://upload.jianshu.io/users/upload_avatars/11210758/2c1c46c8-9f93-487b-96a7-43eacaccba12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp />
        </div>
      `
    }
  }
}
</script>
