<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">대화, 다운받기 프로그램</a>
      </div>
    </nav>
    <body>
      <div class="container">
        <div class="row" style="margin-top:50px">
          <input class="col s3" v-model="id" placeholder="이름을 입력해주세요">
          <span class="col s1"/>
          <input class="col s5" v-model="content" placeholder="내용을 입력해주세요">
          <span class="col s1"/>
          <button @click="formSubmit()" class="btn waves-effect waves-light col s2" type="submit" name="action">Send
            <i class="material-icons right">send</i>
          </button>
        </div>
        <table>
          <thead>
            <tr>
                <th>이름</th>
                <th>내용</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item,i) in output" v-bind:key="i">
              <td>{{item[0]}}</td>
              <td>{{item[1]}}</td>
            </tr>
          </tbody>
        </table>
        <!-- <ul type="none">
          <li v-for="(item,i) in output" v-bind:key="i">{{item[0]}} : {{item[1]}}</li>
        </ul> -->

        <a @click="download()" class="waves-effect waves-light btn" style="margin-top:50px">대화내역 다운받기</a>
      
      </div>
    </body>
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>


<script>
import axios from 'axios'
import M from 'materialize-css'

export default {
  data () {
    return {
      id: '',
      content: '',
      output: {},
      index:1
    }
  },
  methods: {
    formSubmit () {
      console.log("formSubmit 진입")
      this.getContent();
      this.content=''
    },
    getContent () {
      axios.get('http://localhost:3000/', {
        params:{
          id: this.id,
          content: this.content
        }
      })
      .then((response) => {
        console.log("response.data",response.data)
        this.output = response.data
        console.log("this.output",this.output)
      })
      .catch((error) => {
        this.output = error
      })
    },
    getAllContent(){
      axios.get('http://localhost:3000/getall', {
        params:{
        }
      })
      .then((response) => {
        console.log("response.data",response.data)
        this.output = response.data
        console.log("this.output",this.output)
      })
      .catch((error) => {
        this.output = error
      })
    },
    download(){
      axios.get('http://localhost:3000/download', {
        params:{
        }
      })
      .then((response) => {
        console.log("response.data",response.data)
        this.output = response.data
        console.log("this.output",this.output)
      })
      .catch((error) => {
        this.output = error
      })
    }
    
  },
  computed:{
    // test(){
    //   this.getContent();

    //   return true
    // }
    
  },
  mounted() {
    M.AutoInit()
    this.getContent();
    
  },
  updated(){
    this.getAllContent();
  }
}
</script>
