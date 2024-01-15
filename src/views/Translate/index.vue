<template>
  <div class="chat-container">
    <div class="sidebar">
      <!-- 左侧侧边栏内容 -->
      <!-- 可以添加联系人列表等 -->
    </div>
    <div class="chat-content">
      <div class="chat-messages">
        <div
          v-for="message in messages"
          :key="message.id"
          class="message"
          :class="{ 'my-message': message.isMine }"
        >
          <span class="message-author">{{ message.author }}:</span>
          {{ message.text }}
        </div>
      </div>
      <div class="chat-input">
        <input
          v-model="newMessage"
          @keyup.enter="sendMessage"
          placeholder="输入消息..."
        />
        <button @click="sendMessage">发送</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const messages = ref([
  { id: 1, author: '用户1', text: '你好！', isMine: false },
  { id: 2, author: '用户2', text: 'Hi there!', isMine: true },
  // 其他消息...
]);

const newMessage = ref('');

const sendMessage = () => {
  if (newMessage.trim() !== '') {
    messages.value.push({
      id: messages.value.length + 1,
      author: '用户1',
      text: newMessage,
      isMine: true,
    });

    setTimeout(() => {
      messages.value.push({
        id: messages.value.length + 1,
        author: '用户2',
        text: '我收到你的消息了！',
        isMine: false,
      });
    }, 1000);

    newMessage.value = '';
  }
};
</script>

<style scoped>
.chat-container {
  display: flex;
  max-width: 800px;
  margin: 20px auto;
}

.sidebar {
  width: 20%;
  background-color: #f0f0f0;
  padding: 10px;
  border-right: 1px solid #ccc;
}

.chat-content {
  flex-grow: 1;
  padding: 10px;
}

.chat-messages {
  height: 300px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
}

.message {
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 4px;
}

.my-message {
  background-color: #4caf50;
  color: #fff;
}

.message-author {
  font-weight: bold;
}

.chat-input {
  margin-top: 10px;
  display: flex;
}

input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  margin-left: 8px;
  padding: 8px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
