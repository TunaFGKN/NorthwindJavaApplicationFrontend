import React from "react";
import CartSummary from "./CartSummary";
import { Button, Container, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="Ana Sayfa" />
          <Menu.Item name="İndirimler" />

          <Menu.Menu position="right">
            <CartSummary/>
            <Menu.Item>
              <Button primary>Sepete Git</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
