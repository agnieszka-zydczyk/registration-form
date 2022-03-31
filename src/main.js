import { createApp } from 'vue';
import App from './App.vue';

createApp( App ).mount( '#app' );

// export function matchPassword() {
//     const pw1 = document.getElementById( 'pass' );
//     const pw2 = document.getElementById( 'p-repeat' );
//     if ( pw1 != pw2 ) {
//         alert( 'Passwords did not match' );
//     };
// }