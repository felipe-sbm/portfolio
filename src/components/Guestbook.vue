<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '@/i18n/useI18n'
import Tag from '@/components/Tag.vue'

const { texts } = useI18n()

interface GuestbookEntry {
  id: string
  author: string
  timestamp: string
  message: string
  avatar: string
}

const guestbookEntries = ref<GuestbookEntry[]>([
  {
    id: '1',
    author: 'Komatsu',
    timestamp: '31/10/2025, 14:22',
    message: 'eae boyyyyyyyyyyyyyyy',
    avatar: 'https://api.dicebear.com/9.x/glass/svg?seed=Komatsu'
  },
  {
    id: '2',
    author: 'User',
    timestamp: '30/10/2025, 10:15',
    message: 'eae boy, como vai man',
    avatar: 'https://api.dicebear.com/9.x/glass/svg?seed=User2'
  },
  {
    id: '3',
    author: 'Dev',
    timestamp: '29/10/2025, 20:30',
    message: 'eae boy, lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    avatar: 'https://api.dicebear.com/9.x/glass/svg?seed=Dev'
  },
  {
    id: '4',
    author: 'Felipe',
    timestamp: '28/10/2025, 15:45',
    message: 'eae boy',
    avatar: 'https://api.dicebear.com/9.x/glass/svg?seed=Felipe'
  },
  {
    id: '5',
    author: 'Ana',
    timestamp: '27/10/2025, 09:20',
    message: 'eae boy',
    avatar: 'https://api.dicebear.com/9.x/glass/svg?seed=Ana'
  },
  {
    id: '6',
    author: 'Carlos',
    timestamp: '26/10/2025, 18:00',
    message: 'eae boy',
    avatar: 'https://api.dicebear.com/9.x/glass/svg?seed=Carlos'
  },
  {
    id: '7',
    author: 'Maria',
    timestamp: '25/10/2025, 12:30',
    message: 'eae boy',
    avatar: 'https://api.dicebear.com/9.x/glass/svg?seed=Maria'
  },
  {
    id: '8',
    author: 'João',
    timestamp: '24/10/2025, 16:45',
    message: 'eae boy',
    avatar: 'https://api.dicebear.com/9.x/glass/svg?seed=Joao'
  }
])

const messageText = ref('')

const sendMessage = () => {
  if (messageText.value.trim()) {
    const now = new Date()
    const timestamp = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}, ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`

    guestbookEntries.value.unshift({
      id: Date.now().toString(),
      author: 'You',
      timestamp,
      message: messageText.value,
      avatar: 'https://api.dicebear.com/9.x/glass/svg?seed=You'
    })
    messageText.value = ''
  }
}
</script>

<template>
  <section class="guestbook">
    <div class="guestbook-comments">
      <!-- Bolinhas decorativas fixas -->
      <div class="decorative-circle circle-red"></div>
      <div class="decorative-circle circle-blue"></div>
      <div class="decorative-circle circle-magenta"></div>

      <div class="comments-list">
        <div v-for="entry in guestbookEntries" :key="entry.id" class="comment-item">
          <div class="message-wrapper">
            <Tag :text="entry.message" type="normal" :relative="true" maxWidth="100%" />
          </div>
          <img :src="entry.avatar" :alt="entry.author" class="avatar">
        </div>
      </div>
    </div>

    <div class="guestbook-panel">
      <div class="panel-content">
        <div class="header">
          <h1>Guestbook</h1>
          <div class="wavy-decoration"></div>
        </div>

        <div class="description">
          <p>Thanks for coming here! You can write down a message to be here forever.</p>
          <p>Log in with your GitHub to message.</p>
        </div>

        <div class="message-section">
          <textarea v-model="messageText" placeholder="You are so special to me, bro." class="message-input"></textarea>

          <button @click="sendMessage" class="send-button">send</button>
        </div>

        <div class="footer">
          <p>Crazy things made by me.</p>
          <p>Felipe SBM © 2025</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.guestbook {
  height: 100vh;
  display: flex;
  background-color: black;
  position: relative;
  overflow: hidden;
}

.guestbook-comments {
  flex: 1;
  background-color: #000;
  background-image: radial-gradient(#333 1px, transparent 1px);
  background-size: 20px 20px;
  padding: 2rem;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #000;
    border-left: 2px solid #333;
  }

  &::-webkit-scrollbar-thumb {
    background: $off-white;
    border: 2px solid #000;
    border-radius: 0;
  }
}

.comments-list {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 100%;
}

.comment-item {
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  position: relative;
  z-index: 10;
  width: 100%;
}

.message-wrapper {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 100%;
  object-fit: cover;
  flex-shrink: 0;
  background-color: white;
}

.guestbook-panel {
  flex: 1;
  background: $primary-bg;
  border-left: 4px solid black;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  color: $off-white;
  z-index: 2;
}

.decorative-circle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  border: 3px solid black;

  &.circle-red {
    width: 200px;
    height: 200px;
    background-color: #F82B2B;
    top: -50px;
    left: -50px;
  }

  &.circle-blue {
    width: 250px;
    height: 250px;
    background-color: #4741FF;
    bottom: 50px;
    right: -100px;
  }

  &.circle-magenta {
    width: 150px;
    height: 150px;
    background-color: #CE03BF;
    bottom: 100px;
    left: 30px;
  }
}

.panel-content {
  position: relative;
  z-index: 10;
  max-width: 500px;
  width: 100%;
  text-align: center;
}

.header {
  margin-bottom: 3rem;

  h1 {
    font-family: $primary-font;
    font-size: 4rem;
    font-weight: 900;
    margin: 0;
    letter-spacing: -2px;
    color: $off-white;
  }

  .wavy-decoration {
    margin: 0 auto;
    height: 15px;
    width: 20rem;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 20'%3E%3Cpath d='M 0 10 Q 7.5 5 15 10 T 30 10 T 45 10 T 60 10 T 75 10 T 90 10 T 105 10 T 120 10 T 135 10 T 150 10 T 165 10 T 180 10 T 195 10 T 210 10 T 225 10 T 240 10 T 255 10 T 270 10 T 285 10 T 300 10' stroke='%23ff9f3f' stroke-width='3' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: repeat-x;
    background-size: auto 20px;
    margin-top: 0;
    filter: drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.5));
  }
}

.description {
  margin: 0;
  margin-bottom: 3rem;
  line-height: 1.6;
  font-family: $primary-font;
  font-weight: 500;

  p {
    margin: 0.5rem 0;
    font-size: 1.1rem;
    color: $off-white;
  }
}

.message-section {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.message-input {
  width: 29rem;
  max-width: 500px;
  padding: 1rem;
  border: 3px solid #000;
  font-family: $primary-font;
  font-size: 1.1rem;
  font-weight: 600;
  resize: vertical;
  min-height: 120px;
  background-color: $off-white;
  color: #000;
  margin-bottom: 1.5rem;
  box-shadow: 6px 6px 0px #000;
  transition: all 0.2s ease;

  &::placeholder {
    color: #666;
    font-weight: 500;
  }

  &:focus {
    outline: none;
    transform: translate(2px, 2px);
    box-shadow: 4px 4px 0px #000;
  }
}

.send-button {
  background-color: $orange;
  color: $off-white;
  border: 3px solid #000;
  padding: 0.8rem 0rem;
  font-family: $primary-font;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.2s ease;
  box-shadow: 8px 8px 0px #000;
  width: 20rem;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 10px 10px 0px #000;
    background-color: lighten($orange, 5%);
  }

  &:active {
    transform: translate(4px, 4px);
    box-shadow: 4px 4px 0px #000;
  }
}

.footer {
  font-size: 0.9rem;
  font-weight: 600;

  p {
    margin: 0.25rem 0;
  }
}

@media (max-width: 768px) {
  .guestbook {
    flex-direction: column-reverse;
  }

  .guestbook-comments {
    flex: 1;
    width: 100%;
  }

  .guestbook-panel {
    flex: 0 0 auto;
    width: 100%;
    border-left: none;
    border-bottom: 4px solid black;
    padding: 2rem 1rem;
  }

  .header h1 {
    font-size: 2.5rem;
  }
}
</style>
