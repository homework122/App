import {observable,action} from "mobx"

class userStore{

    @observable num = 0;

    @action

    changeNum(){

        this.num++;

    }

    @action

    subNum(){

        if(this.num!==0){

            this.num--;

        }

    }

}

export default userStore