importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
apiKey:"TU_API_KEY",
projectId:"TU_PROJECT_ID",
messagingSenderId:"TU_SENDER_ID",
appId:"TU_APP_ID"
});

const messaging=firebase.messaging();

messaging.onBackgroundMessage(payload=>{
self.registration.showNotification(
"Grupo Intermedio",
{body:payload.notification.body}
);
});
