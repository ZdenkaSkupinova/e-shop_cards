import { render } from '@czechitas/render';
import '../global.css';
import { ProductPage } from '../components/productpage/productpage';
import { Product } from '../components/product/product'; 

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const response = await fetch(`http://localhost:4000/api/cards/${id}`)
const json = await response.json()
const cards = json.data

const {ulr, name, description, dimensions, cost} = cards

document.querySelector('#root').innerHTML = render(
  <>
  <ProductPage />
  <Product ulr = {ulr}
           name = {name}
           description = {description}
           dimensions = {dimensions}
           cost = {cost}
  />
  </>
);

