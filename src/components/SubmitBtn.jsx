import React from 'react'
import { useNavigation } from 'react-router-dom'

function SubmitBtn({text, ...props}) {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

  return (
    <button type='submit' className="btn btn-primary uppercase btn-block"
    disabled={isSubmitting}
    >{isSubmitting ? <><span className='loading loading-spinner'></span></> : `${text}` || "submit"}</button>
  )
}

export default SubmitBtn