import axios from 'axios';

const url = 'http://localhost:5000/api/user/';

class UserService {
    static getUsers() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }

    static createUser(account,password) {
        return axios.post(url + 'register', {
            account,
            password
        })
    }

    static userLogin(account, password) {
        return new Promise ((resolve,reject) => {
            axios.post(url+'login', {account, password}).then((res) => {
                const data = res.data;
                if(!data) {
                    resolve({})
                }
                console.log(data)
                resolve(data)
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }

    static userCheck(account) {
        return new Promise ((resolve,reject) => {
            axios.post(url+'check',{account}).then((res) => {
                const data = res.data;
                resolve(data)
                console.log(data.account)
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }
}

export default UserService