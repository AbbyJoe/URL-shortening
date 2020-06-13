<template>
    <div>
        <div class="footer__content">
            <div class="container text-center">
                <h3>Boost your links today</h3>
                <button type="button" class="btn btn-primary mt-4">Get Started</button>
            </div>
        </div>
        <div class="footer__links">
                <div class="container foot">
                    <div class="footer__logo">
                         <h1>Shortly</h1>
                    </div>
                    <div class="link">
                        <ul>
                        <h6>Features</h6>
                            <li><router-link to="/">Link Shortening</router-link></li>
                            <li><router-link to="/">Branded Links</router-link></li>
                            <li><router-link to="/">Analytics</router-link></li>
                        </ul>
                    </div>
                    <div class="link">
                        <ul>
                            <h6>Resources</h6>
                            <li><router-link to="/">Blog</router-link></li>
                            <li><router-link to="/">Developers</router-link></li>
                            <li><router-link to="/">Support</router-link></li>
                        </ul>
                    </div>
                    <div class="link">
                        <ul>
                            <h6>Company</h6>
                            <li><router-link to="/">About</router-link></li>
                            <li><router-link to="/">Our Team</router-link></li>
                            <li><router-link to="/">Career</router-link></li>
                            <li><router-link to="/">Contact</router-link></li>
                        </ul>
                    </div>
                    <div class="link__icon">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-pinterest"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .footer__content {
        background-image: url('../assets/images/bg-boost-desktop.svg');
        background-size: cover;
        background-position: center;
        height: 100%;
        background-color: hsl(257, 27%, 26%);
    }
    .footer__content button {
        border: 0;
        background-color: hsl(180, 66%, 49%);
        width: 180px;
        padding: 13px 20px;
        text-align: center;
        border-radius: 50px;
        transition: 0.5s;
        font-size: 18px;
        color: #fff;
        font-weight: 500;
    }
    .footer__content h3 {
        font-family:'Poppins', sans-serif;
        font-size: 32px;
        font-weight: 700;
        color: #fff;
    }
    .text-center {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
    .footer__links {
        background-color:hsl(260, 8%, 14%);
        padding-top: 4rem;
        padding-bottom: 3rem;
    }
    .foot {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        text-align: left;
    }
    .footer__logo h1 {
        color: #fff;
        font-size: 32px;
        font-weight: 500;
        font-family:'Poppins', sans-serif;
    }
    h6 {
        color: #fff;
        font-weight: 500;
        font-family:'Poppins', sans-serif;
        font-size: 17px;
        margin-bottom: 25px;
    }
    .link__icon a {
        padding-right: 1.5rem;
        color:#fff;
        transition: all .5s;
    }
    .link__icon i {
        font-size: 21px;
    }
    li {
        list-style-type: none;
        font-size: 14px;
        /* font-weight: lighter; */
        font-family:'Poppins', sans-serif;
        line-height: 2.4;

    }
    li a {
        color: hsl(0, 0%, 75%);
        transition: all .5s;
    }
    li a:hover, .link__icon a:hover {
        text-decoration: none;
        color:hsl(180, 66%, 49%)
    }
    @media only screen and (max-width: 768px) {
        .foot {
            width: 100%;
            /* display: flex; */
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        li {
            line-height: 2.5;
            /* font-size: 13px ; */
        }
        ul {
            /* text-align: center; */
            padding-left: 0px;
        }
        .link, .link__icon {
            margin-top: 20px;
        }
        h6 {
            margin-bottom: 18px;
        }
        .link__icon a:last-child {
            padding-right: 0px;
        }
    }
</style>
