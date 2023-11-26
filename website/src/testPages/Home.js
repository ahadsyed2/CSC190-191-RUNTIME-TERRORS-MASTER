import { useEffect } from "react"
import { useListingsContext } from "../../hooks/useListingsContext"

// components
import ListingDetails from "../../components/ListingDetails"
import ListingForm from "../components/ListingForm"

const Home = () => {
  const { listings, dispatch } = useListingsContext()

  useEffect(() => {
    const fetchListings = async () => {
      const response = await fetch('/api/listings')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_LISTINGS', payload: json})
      }
    }

    fetchListings()
  }, [dispatch])

  return (
    <div className="home">
      <div className="listings">
        {listings && listings.map(listing => (
          <ListingDetails listing={listing} key={listing._id} />
        ))}
      </div>
    </div>
  )
}

export default Home