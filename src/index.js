import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";

import Characters from "./components/Characters";
import Places from "./components/Places";
import Films from "./components/Films";
import Rohan from "./components/places/Rohan";
import Fellowship from "./components/films/Fellowship";
import Morgoth from "./components/characters/Morgoth";
import Error from "./components/Error";
import TomBombadill from "./components/characters/TomBombadill";
import Character from "./components/characters/Character";
import Nav from "./components/Nav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/characters",
    element: <Characters />
  },
  {
    path: "/characters/gandalf",
    element: (
      <Character
        name="Gandalf"
        img="https://assetsio.reedpopcdn.com/magic-the-gathering-tales-of-middle-earth-gandalf-friend-shire.png?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
        desc="Gandalf is a wizard, one of the Istari order, and the leader of the Fellowship of the Ring. He is a wise and powerful being who is dedicated to fighting evil. Gandalf is a mentor to Frodo Baggins and the other members of the Fellowship, and he plays a key role in their quest to destroy the One Ring."
      />
    )
  },
  {
    path: "/characters/iluvatar",
    element: (
      <Character
        name="Eru Ilúvatar"
        img="https://qph.cf2.quoracdn.net/main-qimg-56237f57454ed132c470978e968cbb82-lq"
        desc="Eru Ilúvatar is the supreme being in J. R. R. Tolkien's legendarium. He is the creator of all things, including the Ainur, the Valar, and the Maiar. Eru is also the source of all power and knowledge. Eru is a benevolent being who desires only good for his creation. He is patient and forgiving, but he is also just and will not tolerate evil. Eru is a mystery to even the Valar, but he is always present and watching over his creation. Eru is a powerful being, but he is not omnipotent. He cannot violate the free will of his creations. However, he can intervene in the world when necessary. For example, he created the Sun and Moon to light the world after Melkor had corrupted the stars. Eru is a loving and compassionate being. He cares for all of his creation, and he is always willing to forgive those who repent. Eru is a source of hope and inspiration for all who believe in him."
      />
    )
  },
  {
    path: "/characters/morgoth",
    element: <Morgoth />
  },
  {
    path: "/characters/tom-bombadill",
    element: <TomBombadill />
  },
  {
    path: "/characters/frodo-baggins",
    element: (
      <Character
        name="Frodo Baggins"
        img="https://insidethemagic.net/wp-content/uploads/2022/03/Elijah-Wood-Frodo-Baggins-LOTR.jpg"
        desc="Frodo Baggins is a hobbit who inherits the One Ring from his cousin Bilbo Baggins. He is a kind, compassionate, and loyal hobbit who is willing to sacrifice everything to destroy the Ring. He is joined by a fellowship of companions on his journey, including Samwise Gamgee, Merry Brandybuck, and Pippin Took. Together, they face many dangers on their way to Mordor, where the Ring must be destroyed. Frodo is a true hero, and his story is one of courage, friendship, and hope."
      />
    )
  },
  {
    path: "/places",
    element: <Places />
  },
  {
    path: "/places/rohan",
    element: <Rohan />
  },
  {
    path: "/films",
    element: <Films />
  },
  {
    path: "/films/fellowship",
    element: <Fellowship />
  },
  {
    path: "*",
    element: <Error />
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(sendToVercelAnalytics);
