<template>
    <div>
        <div class="overlay">
            <div class="container">
                <div class="search__layout">
                    <div class="search__field form-group">
                        <input type="text" class="form-control" v-model="url"  placeholder="Shorten a link here...">
                        <button type="button" @click="handleShorten" class="btn btn-primary">Shorten it!</button>
                    </div>
                     <div class="error__div">
                        <p class="error"><em></em></p>
                    </div>
                </div>
                    <div v-for="(link, key) in links" :key="key">
                        <div class="display__results">
                            <div class="real__link">
                                <p>{{link.url}}</p>
                            </div>
                        <div class="shorten__link">
                            <p>{{link.hashid|relink}}</p>
                            <button type="button" class="btn btn-primary add__copied" @click="copy(link.hashid, $event)"
                            :class="message=='Copied'?'add__copied':''">{{text}}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container content text-center">
                <h3>Advanced Statistics</h3>
                <p class="mt-4">Track how your links are performing across web with <br> our advanced statistics dashboard.</p>
            </div>
            <div class="container card__container">
                     <div class="line"></div>
                <div class="row">
                    <div class="col-md-4" v-for="(object, key) in cardJson" :key="key">
                        <div class="card__info" :class="[object.text=='detailed'?'card__margin__1':'',
                        object.text=='fully'?'card__margin__2': '']">
                            <div class="icon"><img :src="object.img" alt=""></div>
                        <div class="content__info">
                            <h5>{{object.title}}</h5>
                            <p class="mt-3">{{object.subtitle}}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
import copyTextToClipboard from 'copy-text-to-clipboard'
export default {
  data: () => ({
    url: '',
    hashid: '',
    links: [],
    error: '',
    text: 'Copy',
    message: 'Copied',
    cardJson: [{
      title: 'Brand Recognition',
      subtitle: 'Boost your brand recognition with each click. Generic links doesn\'t mean a thing. Branded links help instil confidence in your content.',
      img: '/img/icon-brand-recognition.svg'
    },
    {
      title: 'Detailed Records',
      subtitle: 'Gain insights into who is clicking your links knowing when and where people engage with your content helps inform better decisions.',
      img: '/img/icon-detailed-records.svg',
      text: 'detailed'
    },
    {
      title: 'Fully Customizable',
      subtitle: 'Improve brand awareness and content discoverability through customizable links, superchanging audience engagement.',
      img: '/img/icon-fully-customizable.svg',
      text: 'fully'
    }]
  }),
  computed: {
    validated () {
      return this.Validation && !this.url
    }
  },
  mounted () {
    if (localStorage.getItem('links')) {
      try {
        this.links = JSON.parse(localStorage.getItem('links'))
      } catch (e) {
        console.log(e)
      }
    }
  },
  watch: {
    url (v) {
      if (this.hashid) {
        this.hashid = null
      }
    }
  },
  methods: {
    copy (hashid, $event) {
      event.preventDefault()
      copyTextToClipboard(this.$options.filters.relink(hashid))
      // document.querySelector('add__copied').className = 'add__copied'
    //   this.text = this.message.push('Copied')
    },
    handleShorten () {
      Axios.post('https://rel.ink/api/links/', { url: this.url }).then(resp => {
        const links = this.links
        links.push(resp.data)
        this.url = ''

        this.hashid = resp.data.hashid
        this.links = Array.from(
          new Set(links.map(l => l.hashid))).map(hashid => {
          return links.find(l => l.hashid === hashid)
        }
        ).slice(0, 5)

        // LocalStorage
        localStorage.setItem('links', JSON.stringify(this.links))
      }).catch(err => {
        console.log('oops fix this error', err)
      })
    }
  },
  filters: {
    relink (hashid) {
      return `https://rel.ink/${hashid}`
    }
  }
}
</script>

<style scoped>
    body {
        font-family:'Poppins', sans-serif;
    }
    .add__copied {
        background-color: hsl(257, 27%, 26%);
        color: #fff;
    }
    .error__div {
        position: relative;
        top: -45px;
        left: 100px;
    }
    .error {
        font-family:'Poppins', sans-serif;
        font-size: 16px;
        color: hsl(0, 87%, 67%);
    }
    .overlay {
        background-color: #eee;
        margin-top: 10rem;
        padding-bottom: 8rem;
    }
    .search__layout {
        position: relative;
        top: -65px;
        background-image: url('../assets/images/bg-shorten-desktop.svg');
        background-size: cover;
        background-position: center;
        height: 130px;
        background-color: hsl(257, 27%, 26%);
        border-radius: 10px;
    }
    .search__field {
        display: flex;
        padding: 40px 100px;

    }
    .search__field input {
        width: 700px !important;
        height: 50px;
        padding: 10px;
        border-radius: 10px;
        color: hsl(0, 0%, 75%);
        font-family:'Poppins', sans-serif;
    }
    .search__field button {
        margin-left: 15px;
        background-color: hsl(180, 66%, 49%);
        width: 160px;
        font-family:'Poppins', sans-serif;
        font-size: 15px;
        border-radius: 10px;
        border: 0;
    }
    .copied__btn {
        background-color: hsl(257, 27%, 26%);
    }
    .content {
        margin-top: 8rem;
    }
    .content h3 {
        color: hsl(255, 11%, 22%);
        font-weight: 700;
        font-size: 32px;
        font-family:'Poppins', sans-serif;
    }
    .content p {
         color: hsl(0, 0%, 75%);
         /* margin-top: 10px; */
        font-size: 15px;
        font-family:'Poppins', sans-serif;
    }
    .display__results {
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
        vertical-align: middle;
        background-color: #fff;
        border-radius: 5px;
        padding: 17px 30px;
        margin-top: -30px;
    }
    .real__link p {
        color: hsl(257, 27%, 26%);
        font-size: 20px;
        font-weight: 500;
        margin-block-end: 0em;
    }
    .shorten__link {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .shorten__link p {
        color: hsl(180, 66%, 49%);
        font-size: 20px;
        margin-block-end: 0em;
    }
    .shorten__link button {
        border: 0;
        background-color: hsl(180, 66%, 49%);
        width: 100px;
        padding: 8px 20px;
        text-align: center;
        border-radius: 10px;
        transition: 0.5s;
        color: #fff !important;
        font-family:'Poppins', sans-serif;
        margin-left: 16px;
    }
    .card__container {
        margin-top: 8rem;
    }
    .card__info {
        background-color: #fff;
        border-radius: 5px;
        padding: 20px;
    }
    .icon {
        position: relative;
        border: 0;
        top: -50px;
        background-color: hsl(257, 27%, 26%);
        padding: 20px;
        border-radius: 50px;
        width: 70px;
    }
    .content__info h5 {
        color: hsl(255, 11%, 22%);
        font-weight: 700;
        font-size: 19px;
        font-family:'Poppins', sans-serif;
    }
    .content__info p {
        color: hsl(0, 0%, 75%);
        font-size: 15px;
        font-family:'Poppins', sans-serif;
    }
    .card__margin__1 {
        margin-top: 2rem;
    }
    .card__margin__2 {
        margin-top: 4rem;
    }
    img {
        width: 30px !important;
    }
    .line {
        position: relative;
        left: 30%;
        top: 150px;
        height: 8px;
        width: 500px;
        background-color: hsl(180, 66%, 49%);
    }

   @media only screen and (max-width: 768px) {
       .line {
           display: none;
           /* position: relative;
           height: 400px;
           width: 10px;
           bottom: 40%;
           left: 50%; */
       }
       .search__field {
           display: flex;
           flex-direction: column;
           width: 100% !important;
           padding: 20px;
       }
       .search__layout {
           height: 180px;
       }
       .search__field input {
        width: 100% !important;
        height: 50px;
        padding: 10px;
    }
    .search__field button {
        width: 100%;
        margin-left: 0px;
        margin-top: 40px;
        font-size: 17px;
        padding: 12px 0px;
    }
    .error__div {
        top: -68%;
        left: 20px;
    }
    .display__results {
        flex-direction: column;
        line-height: 2.5;
        padding: 14px;
    }
    .shorten__link {
        flex-direction: column;
    }
    .shorten__link button {
        width: 100%;
        margin-left: 0px;
        margin-top: 1rem;
    }
   }
</style>
