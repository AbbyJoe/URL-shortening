<template>
  <div>
    <Navbar/>
    <Header/>
    <Search/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Header from '@/components/Header.vue'
import Search from '../components/Search'
import Footer from '../components/Footer'

export default {
  name: 'LandingPage',
  components: {
    Navbar,
    Header,
    Search,
    Footer
  }
}
</script>
