import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const INTERESTS = [
  'Photography', 'Travel', 'Food', 'Fitness',
  'Music', 'Fashion', 'Technology', 'Art',
  'Gaming', 'Sports', 'Nature', 'Cinema',
  'Design', 'Books', 'Cooking', 'Dance'
]

const useOnboarding = () => {
    const [step, setStep] = useState(1)
    const [selectedInterests, setSelectedInterests] = useState([])
    const navigate = useNavigate()

    const toggleInterest =( interest )=> {
            setSelectedInterests((prev)=>{
                if (prev.includes(interest)){
                    return prev.filter(i=>i!==interest)
                } else {
                    return [...prev, interest]
                }
            }
        )
    }

    return { interests: INTERESTS, selectedInterests, toggleInterest }
    }

export default useOnboarding