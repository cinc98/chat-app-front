<template>
   <v-row justify="center">
    <v-dialog v-model="show" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Send Message to {{reciever}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                    v-model="subject"
                    label="Subject"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
               <v-textarea
                v-model="textMessage"
                 label="Type a message..."
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogToggle">Close</v-btn>
          <v-btn color="blue darken-1" text @click="sendMessage">Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SendMessageDialog',
    data() {
        return {
            subject: '',
            textMessage: '',

        };
    },
    props: ['dialogToggle', 'show', 'reciever'],
    methods: {
        sendMessage() {
            axios.post('http://localhost:8080/ChatWAR/rest/messages/user', {
                from: sessionStorage.getItem('username'),
                subject: this.subject,
                to: this.$props.reciever,
                content: this.textMessage,

            })
                .then((response) => {
                    console.log(response);
                    this.textMessage = '';
                    this.subject = '';
                    this.$props.dialogToggle();
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

</style>
