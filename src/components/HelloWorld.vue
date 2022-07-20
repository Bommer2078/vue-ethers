<template>
  <div class="hello">
   <button @click="test2">click</button>
  </div>
</template>

<script>
import BSCtestBoxABI from './BSCtestBoxABI'
import { ethers } from "ethers";
export default {
  name: 'HelloWorld',
  data () {
    return {
      boxContract: null,
    }
  },
  mounted() {
    this.test()
  },
  methods: {
    test() {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      provider.send("eth_requestAccounts", [])
      const signer = provider.getSigner()
      const temp1 = BSCtestBoxABI    
      const boxAddress = '0x891E92e090Da2A1a422114b8b5905d9CdC6E06e8'
      this.boxContract = new ethers.Contract(boxAddress, temp1, signer)
    },
    test2() {
      this.boxContract.buyBox(1,1,{gasLimit:860000,value:1000000000000}).then((res) => {                
        console.log(123)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
