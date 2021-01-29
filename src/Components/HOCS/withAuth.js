import React, {useState, useEffect} from 'react'

const withAuth = (WrappedComponent) => {
return (props) => {
   const [isAdmin, setIsAdmin] = useState(false)

   useEffect(() => {
       //Make api call it check role of current user typically; right now just relying on props
    if(props.isAdmin) {
        setIsAdmin(true)
    } else {
        setIsAdmin(false)
    }
   }, [props.isAdmin])

    
        
        return isAdmin ? <WrappedComponent {...props} /> : <div>You can't see this, nonadmin!</div>
    }
}

export default withAuth