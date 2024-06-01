<template>
  <div class="login-form">
    <v-icon icon="mdi-account" />
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="identifier">Email or username</label>
        <input type="text" id="identifier" v-model="identifier" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <p>Login as <span style="color: blue; cursor: pointer; margin-bottom: 10px;">Admin</span></p>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      identifier: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await fetch('/api/auth/local', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            identifier: this.identifier,
            password: this.password
          })
        })

        if (response.status === 200) {
          const data = await response.json()
          localStorage.setItem('jwt', data.jwt)
          this.$router.push('/')
        } else {
          const error = await response.json()
          alert(error.message)
        }
      } catch (error) {
        alert(error.message)
      }
    }
  }
}
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

