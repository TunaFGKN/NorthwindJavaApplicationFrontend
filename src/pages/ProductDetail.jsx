import React, { useState ,useEffect} from "react";
import { useParams } from "react-router";
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { name } = useParams();
  
  const [product, setProduct] = useState({});

  useEffect(()=>{
    let productService = new ProductService()
    productService.getByProductName(name).then(result=>setProduct(result.data.data))
  },[])


  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>{product.category?.categoryName}</Card.Meta>
            <Card.Description>{product.quantityPerUnit}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Sepete Ekle
              </Button>
              <Button basic color="blue">
                İstek Listesine Ekle
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}