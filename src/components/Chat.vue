<template>
<div class="chat">
<div class="first">

    <v-list disabled >
        <v-list-item-group>
          <v-list-item v-for="(m,index) in messagess" :key="index">
            <v-list-item-content>
              <v-list-item-title >{{JSON.parse(m).from +': '+ JSON.parse(m).subject}}</v-list-item-title>
              <v-list-item-subtitle>{{JSON.parse(m).content}}</v-list-item-subtitle>
              <v-list-item-subtitle><small>{{new Date(JSON.parse(m).date).toLocaleString()}}</small></v-list-item-subtitle>

            </v-list-item-content>
          </v-list-item>


        </v-list-item-group>
      </v-list>

     </div>
<div class="second">


      <div class="text_fields">
          <v-text-field
            v-model="subject"
            label="Subject"
          ></v-text-field>
          <v-textarea
            v-model="textMessage"
            label="Type a message..."
          ></v-textarea>
      </div>


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
            subject: '',
            textMessage: '',
            messagess: this.$store.state.message,
        };
    },
    methods: {
        sendMessage() {
            axios.post('http://localhost:8080/ChatWAR/rest/messages/all', {
                from: sessionStorage.getItem('username'),
                subject: this.subject,
                to: 'all',
                content: this.textMessage,

            })
                .then((response) => {
                    console.log(response);
                    this.textMessage = '';
                    this.subject = '';
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
  display: flex;
  padding-left: 20%;
  padding-top: 5%;
  flex-direction: column;
}
.first{
    width:50%;
    height:300px;
    border-radius: 5px;
    border:1px solid blue;
    overflow: auto;
    margin-bottom: 20px;
 }
.second{
    width:50%;
    display: flex;
    position: relative;
    margin-right: 5px;
    flex-direction: row;
}
.text_fields{
  flex-basis: 100%;
}
.asd{
  padding-left: 30px;
  align-self: flex-end;
  padding-bottom: 20px;
}

</style>
