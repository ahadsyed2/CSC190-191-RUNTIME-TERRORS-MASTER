import { useListingsContext } from '../hooks/useListingsContext'
import { useAuthContext } from '../hooks/useAuthContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ListingDetails = ({ listing }) => {
  const { dispatch } = useListingsContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    if(!user){
      return
    }
    const response = await fetch('/api/listings/' + listing._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `earer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_LISTING', payload: json})
    }
  }

  return (
    <div className="listing-details">
      <h4><span style='font-weight: bold;'>{listing.price}</span>{listing.make} {listing.model}</h4>
      <p><strong>Year: </strong>{listing.year}</p>
      <p><strong>Mileage: </strong>{listing.mileage}</p>
      <p>{formatDistanceToNow(new Date(listing.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default ListingDetails