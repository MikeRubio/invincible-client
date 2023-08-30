import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import App from "./App.jsx";
import "./index.css";

const client = new ApolloClient({
  uri: "https://invincible-api.railway.internal/graphql",
  headers: {
    "content-type": "application/json",
  },
  cache: new InMemoryCache(),
});
console.log(import.meta.env.API_URL);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
