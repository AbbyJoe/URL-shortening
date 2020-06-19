<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light p-4">
        <div class="container">
            <a class="navbar-brand" href="#"><img src="../assets/images/logo.svg" alt="logo"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link to="/features" class="nav-link">Features <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/pricing" class="nav-link">Pricing</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/resources" class="nav-link">Resources</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link to="/login" class="nav-link">Login</router-link>
                        </li>
                         <li class="nav-item ml-3">
                            <router-link to="/signup" class="nav-link signup-btn">Sign Up</router-link>
                        </li>
                    </ul>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .nav-link {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 16px;
        color: hsl(0, 0%, 75%);
    }
    .signup-btn {
        border: 0;
        background-color: hsl(180, 66%, 49%);
        width: 100px;
        padding: 8px 20px;
        text-align: center;
        border-radius: 50px;
        transition: 0.5s;
        color: #fff !important
    }
    .signup-btn:hover {
        color: #fff !important;
    }
    .navbar-light .navbar-toggler {
        color: rgba(0,0,0,.5);
        border: 0;
    }
    .navbar-toggler {
        margin-top: -6px;
    }
    .navbar-light .navbar-toggler:focus {
        outline: 0;
    }

    @media only screen and (max-width: 768px) {
        .navbar-collapse {
            color: #fff;
            background-color: hsl(257, 27%, 26%);
            border-radius: 10px;
            justify-content: center;
            padding: 20px;
            text-align: center;
            height: 400px;
            /* line-height: 3; */
            margin-top: 2rem;
        }
        .navbar-light .navbar-nav .nav-link, .navbar-light .navbar-nav .active>.nav-link {
            color: #fff;
            margin-top: 1.7rem;
        }
        .signup-btn {
                width: 100%;
                padding: 9px 20px;
        }
    }
</style>
