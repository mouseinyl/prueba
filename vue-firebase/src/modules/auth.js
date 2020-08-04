import {
    auth
} from '../config/firebase.js';
import 'vuex';
export default {
    namespaced: true,
    state: {
        logged: false,
        user: null,
        role: "guest",
    },
    actions: {
        pam({
            commit
        }) {
            return "aqui desde pam"
        },
        firebaseRegister({
            commit
        }, user) {
            return auth().createUserWithEmailAndPassword(user.email, user.password);
        }
        // firebaseRegister({
        //     commit
        // }, user) {
        //     return auth().createUserWithEmailAndPassword(user.email, user.password);
        // },
        // firebaseLogin({
        //     commit
        // }, user) {
        //     return auth().signInWithEmailAndPassword(user.email, user.password);
        // },
        // firebaseLogout() {
        //     return auth().signOut();
        // }
    },
    mutations: {
        setUser(state, user) {
            if (user) {
                state.user = {
                    uid: user.uid,
                    email: user.email
                };
                state.logged = true;
            } else {
                state.user = null;
                state.logged = false;
            }
        },
        setRole(state, role) {
            state.role = role;
        }
    },

    getters: {
        logged(state) {
            return !!state.user;
        },
        role(state) {
            return state.role;
        },
        isCustomer(state) {
            return state.role === 'customer'
        }
    }
}