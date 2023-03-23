import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import { ProductsForm } from './components/ProductsForm'
import { ProductsList } from './components/ProductsList'
import { Warning } from './components/Warning'

function App() {

  const [ productList, setProductList ] = useState([])
  const [ form, setForm ] = useState(false)
  const [ productSelected, setProductSelected ] = useState(null)
  const [ warning, setWarning ] = useState(false)
  const [ productDelete, setProductDelete ] = useState(null)

  const getProducts = () =>{
    axios.get('https://products-crud.academlo.tech/products/')
    .then(res => setProductList(res.data))
  }
  
  const selectProduct = (product) => {
    setForm(true)
    setProductSelected(product)
  }

  const getWarning = (product) => {
    setWarning(true)
    setProductDelete(product)
  }

  const cancelDelete = () => {
    setWarning(false)
    setProductDelete(null)
  }

  const deleteProduct = (productDelete) => {
    axios.delete(`https://products-crud.academlo.tech/products/${productDelete?.id}/`)
        .then(() => { 
            getProducts()
          setWarning(false)
          setProductDelete(null)
        })

  } 

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="App">
      {
        form &&
        <ProductsForm
        setForm={setForm}
        getProducts={getProducts}
        productSelected={productSelected}
        setProductSelected={setProductSelected}
        />
      }
      <ProductsList
      productList = {productList}
      setForm={setForm}
      selectProduct={selectProduct}
      getProducts={getProducts}
      getWarning={getWarning}
      />
      { warning &&
      <Warning
      productDelete={productDelete} 
      cancelDelete={cancelDelete}
      deleteProduct={deleteProduct}
      />
      }
    </div>
  )
}

export default App
