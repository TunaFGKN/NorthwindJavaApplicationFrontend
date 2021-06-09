import React from "react";
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="Ana Sayfa" />
          <Menu.Item name="İndirimler" />

          <Menu.Menu position="right">
            <CartSummary/>
            <SignedOut/>
            <SignedIn/>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
