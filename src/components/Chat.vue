<template>
<div class="chat">
<div class="first">

    <v-list disabled >
        <v-list-item-group>
          <v-list-item v-for="(m,index) in messagess" :key="index">
            <v-list-item-content>
              <v-list-item-title >{{m}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>


        </v-list-item-group>
      </v-list>

     </div>
<div class="second">


          <v-text-field
            v-model="textMessage"
            label="Type a message..."
            append-icon="message"
          ></v-text-field>
          <div class="asd">
            <v-btn @click="sendMessage" color="blue darken-2" fab dark>
              <v-icon>mdi-send</v-icon>
            </v-btn>
          </div>
</div>
</div>


</template>

<script>
import axios from 'axios';

export default {
    name: 'Chat',
    data() {
        return {
            textMessage: '',
            messagess: this.$store.state.message,
        };
    },
    methods: {
        sendMessage() {
            axios.post('http://localhost:8080/ChatWAR/rest/messages/all',
                `${sessionStorage.getItem('username')}: ${this.textMessage}`)
                .then((response) => {
                    console.log(response);
                    this.textMessage = '';
                })
                .catch((error) => {
                    console.log(error);
                    alert('error');
                });
        },

    },
};
</script>

<style>
.chat{
    padding-left: 20%;
    padding-top: 5%
}
.first{
     width:50%;
     height:300px;
     position:absolute;
     border-radius: 5px;
     border:1px solid blue;
    overflow: auto;
 }
.second{
    width:50%;
    display: flex;
    position: relative;
    margin-right: 5px;
    top: 315px;
}
.asd{

    padding-left: 35px;
}

</style>
