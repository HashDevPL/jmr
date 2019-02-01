<template>
    <footer>
        <div class="copyright">© 2019 mountain kingdom</div>
        <div class="links"><a href="#">Cookies</a><span>|</span><a href="#">Privacy</a></div>
        <div class="design">Deisgn by <a href="#">Wizard of Oz</a></div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="less">
footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0,0,0,0.7);
    padding: 15px 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 11px;
    color: #b7b7b7;
    .copyright {
        text-transform: uppercase;
    }
    .links {
        span {
            display: inline-block;
            padding: 0 20px;
        }
        a {
            color: #b7b7b7;
            text-decoration: none;
            transition: all .3s ease-in-out;
            &:hover {
                color: #ffffff;
            }
        }
    }
    .design {
        color: #b7b7b7;
        a {
            color: #ffffff;
            font-weight: 600;
            text-decoration: none;
        }
    }
}
@media (max-width:500px) {
    footer {
        padding: 15px;
        .links {
            span {
                padding: 0 5px;
            }
        }
        .design {
            display: none;
        }
    }
}
</style>