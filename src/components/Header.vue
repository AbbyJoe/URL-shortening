<template>
    <div>
        <div class="container header__container">
            <div class="row mobile">
                <div class="col-lg-6">
                    <div class="header__text">
                       <h1>More than just shorter links</h1>
                       <p>Build your brand's recognition and get detailed <br> insights on how your links are performing</p>
                       <button type="button" class="btn get__btn mt-3">Get Started</button>
                    </div>
                </div>
                <div class="col-lg-6">
                    <img src="../assets/images/illustration-working.svg" class="img-fluid" alt="">
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
    body {
        font-family:'Poppins', sans-serif;
    }
    .header__container {
        margin-top: 60px;
    }
    .header__text {
        margin-top: 40px;
    }
    .header__text h1 {
        color: hsl(255, 11%, 22%);
        font-weight: 700;
        font-size: 68px;
        font-family:'Poppins', sans-serif;
    }
    .header__text p {
        color: hsl(0, 0%, 75%);
        font-size: 18px;
        font-family:'Poppins', sans-serif;
    }
    .header__text .get__btn {
        border: 0;
        background-color: hsl(180, 66%, 49%);
        width: 150px;
        padding: 9px 20px;
        text-align: center;
        border-radius: 50px;
        transition: 0.5s;
        font-size: 17px;
        color: #fff;
        font-weight: 500;
    }
    @media only screen and (max-width: 768px) {
        .mobile {
            flex-direction: column-reverse;
            text-align: center;
        }
        .header__text h1{
            font-size: 37px;
        }
        .header__text p {
            font-size: 16px;
        }
        br {
            display: none;
        }
    }
</style>
