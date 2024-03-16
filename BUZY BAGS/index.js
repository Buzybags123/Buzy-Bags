const axios = require('axios');

axios.get('https://api.spotify.com/v1/search?q=labis+nanasaktan&type=track', {
    headers: {
    'Authorization': 'Bearer BQBYLvSTmub61mxwAFYc67zk42XK851SDPwgMUAG5EkTgdZMKyWrKRhhssVKssj0WWLKl-z0zTUxuZhHgngjOB80Yx2r2yC6XNNdTy4w1hTf0Z5UrX-otSqgt50CtADwP4RUZcFQnKt0reCA4Eb0_m0WQhVfy0-peQbAoacbRb1mY3ca9BtkK1qlL5Iz6DdLE4VkDQZzpMaXVpPfpYY '
}
}).then((data)=>{
    console.log(data.data.tracks.items[0].id);
})
