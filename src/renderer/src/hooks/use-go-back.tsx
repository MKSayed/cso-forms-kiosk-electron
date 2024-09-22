import { useNavigate } from 'react-router-dom'

export function useGoBack() {
  const navigate = useNavigate()
  return { goBack: () => navigate(-1) }
}
