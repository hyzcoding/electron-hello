<template>
     <v-form>
    <v-container>
          <v-text-field
            v-model="username"
            label="用户名"
            single-line
            outlined
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
             :type="show2 ? 'text' : 'password'"
              label="密码"
               @click:append="show2 = !show2"
            single-line
            outlined
            required
          ></v-text-field>

          <v-text-field
            v-model="confirmpassword"
            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
             :type="show3 ? 'text' : 'password'"
               label="确认密码"
                @click:append="show3 = !show3"
            single-line
            outlined
            required
          ></v-text-field>
           <v-btn
           block 
          color="indigo" dark
          @click="login()"
        >
        登录
        </v-btn>
    </v-container>
     <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          登录中
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-form>
</template>

<script>
import { ipcRenderer } from 'electron'
export default {
  name: 'Login',
  data: () => ({
    //
    show2:true,
    show3:true,
    username:'',
    password:'',
    confirmpassword:'',
    dialog: false,
  }),
  methods:{
    login(){
      this.dialog=true
      setTimeout(() => {
        this.dialog = false
        ipcRenderer.send('login')
      }, 4000)
      
    }
  },
};
</script>
