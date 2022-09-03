import {useEffect} from 'react'

function useDocumentTitle(Count) {
    useEffect(() => {
        document.title = `Count:${Count}`
      
      }, [Count])
  
}

export default useDocumentTitle
//always start with use keyword