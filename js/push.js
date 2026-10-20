// Firebase config (REEMPLAZAR)
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  projectId: "TU_PROJECT_ID",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

Notification.requestPermission().then(permission => {
  if (permission === "granted") {
    messaging.getToken({ vapidKey: "TU_VAPID_KEY" })
      .then(token => {
        console.log("Token push:", token);
      });
  }
});
