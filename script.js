import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
}
from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAd8hQqUor7zcF8PQW3Pb25M68PfrPVBMQ",
  authDomain: "iceyy-ice-cream.firebaseapp.com",
  projectId: "iceyy-ice-cream",
  storageBucket: "iceyy-ice-cream.firebasestorage.app",
  messagingSenderId: "420037796624",
  appId: "1:420037796624:web:e9ae03510d448014c27b95",
  measurementId: "G-DK5R1TYRS7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function scrollToFlavors() {
  document
    .getElementById("flavors")
    .scrollIntoView({
      behavior: "smooth"
    });
}

window.scrollToFlavors = scrollToFlavors;

document
  .getElementById("orderForm")
  .addEventListener("submit", async (e) => {

    e.preventDefault();

    const name =
      document.getElementById("name").value;

    const email =
      document.getElementById("email").value;

    const order =
      document.getElementById("order").value;

    try {

      await addDoc(
        collection(db, "orders"),
        {
          name: name,
          email: email,
          order: order,
          createdAt: serverTimestamp()
        }
      );

      document.getElementById("orderMessage").innerHTML =
        "✅ Order submitted successfully!";

      e.target.reset();

    } catch (error) {

      console.error(error);

      document.getElementById("orderMessage").innerHTML =
        "❌ Failed to submit order.";

    }

  });
