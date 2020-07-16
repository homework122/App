import userStore from './userStore'

import productStore from './productStore'

let user = new userStore();

let product = new productStore();

const store = {

    user:user,

    product

}

export default  store