# React Product Display with Design Patterns

## Overview

A simple React app that fetches products from [FakeStoreAPI](https://fakestoreapi.com/products) and displays them using **Container and Presentational components**, **Higher Order Component (HOC)**, and **Custom Hooks**.

## Tech Stack

- **React**
- **Axios**
- **JavaScript/ES6+**

## Installation

1. Clone the repo:

    ```bash
    git clone https://github.com/yourusername/yourprojectname.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the app:

    ```bash
    npm start
    ```

4. Open your browser and go to [http://localhost:3000](http://localhost:3000).

## Code Example

### `useFetchProducts.js` (Custom Hook)

```javascript
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
