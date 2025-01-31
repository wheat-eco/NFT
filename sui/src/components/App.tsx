import "./App.css";
import { ConnectButton } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css"; // don't forget to import default stylesheet

export default function App() {
  return (
    <div className="App">
      <h1 className="title">Hello, Suiet Wallet Kit</h1>
      <ConnectButton />
    </div>
  );
}
