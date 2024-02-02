In this project, let's build a **Nxt Trendz - Specific Product Details** app by applying the concepts we have learned till now.

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- `Home` Route should consist of `/` in the URL path
- `Login` Route should consist of `/login` in the URL path
- `Products` Route should consist of `/products` in the URL path
- `Product Item Details` Route should consist of `/products/:id` in the URL path
- `Cart` Route should consist of `/cart` in the URL path
- No need to use the `BrowserRouter` in `App.js` as we have already included in `index.js`

- Prime User credentials

  ```
   username: rahul
   password: rahul@2021
  ```

- Non-Prime User credentials

  ```
   username: raja
   password: raja@2021
  ```

- Wrap the Loader component with an HTML container element and add the `data-testid` attribute value as `loader` to it

  ```jsx
  <div data-testid="loader">
    <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
  </div>
  ```

- The product image in Product Item Details Route should have the alt as **product**
- The similar product image in Product Item Details Route should have the alt as **similar product {product title}**

  ```example
  similar product Wide Bowknot Hat
  ```

- `BsPlusSquare`, `BsDashSquare` icons from react-icons should be used for **plus** and **minus** buttons in ProductItemDetails Route
- The Product Item Details Route should consist of two HTML button elements with `data-testid` attribute values as **plus** and **minus** respectively

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #12022f; width: 150px; padding: 10px; color: white">Hex: #12022f</div>
<div style="background-color: #616e7c; width: 150px; padding: 10px; color: white">Hex: #616e7c</div>
<div style="background-color: #171f46; width: 150px; padding: 10px; color: white">Hex: #171f46</div>
<div style="background-color: #cbced2; width: 150px; padding: 10px; color: black">Hex: #cbced2</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #3b82f6; width: 150px; padding: 10px; color: white">Hex: #3b82f6</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto


