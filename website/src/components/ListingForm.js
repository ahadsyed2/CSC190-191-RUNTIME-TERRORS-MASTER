import { useState } from 'react'
import { useListingsContext } from '../hooks/useListingsContext'

const ListingForm = () => {
  const { dispatch } = useListingsContext()

  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [mileage, setMileage] = useState('')
  const [price, setPrice] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const listing = {make, model, year, mileage, price}
    
    const response = await fetch('/api/listings', {
      method: 'POST',
      body: JSON.stringify(listing),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setMake('')
      setModel('')
      setYear('')
      setMileage('')
      setPrice('')
      dispatch({type: 'CREATE_LISTING', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Listing</h3>

      <label>Make:</label>
      <input 
        type="text" 
        onChange={(e) => setMake(e.target.value)} 
        value={make}
        className={emptyFields.includes('make') ? 'error' : ''}
      />

      <label>Model:</label>
      <input 
        type="text" 
        onChange={(e) => setModel(e.target.value)} 
        value={model}
        className={emptyFields.includes('model') ? 'error' : ''}
      />

      <label>Year:</label>
      <input 
        type="number" 
        onChange={(e) => setYear(e.target.value)} 
        value={year}
        className={emptyFields.includes('year') ? 'error' : ''}
      />

      <label>Mileage:</label>
      <input 
        type="number" 
        onChange={(e) => setMileage(e.target.value)} 
        value={mileage}
        className={emptyFields.includes('mileage') ? 'error' : ''}
      />

      <label>Price:</label>
      <input 
        type="number" 
        onChange={(e) => setPrice(e.target.value)} 
        value={price}
        className={emptyFields.includes('price') ? 'error' : ''}
      />

      <button>Add Listing</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default ListingForm