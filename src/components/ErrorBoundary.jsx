const ErrorBoundary = ({children}) => {
    let state = { hasError: false }
    
    const getDerivedStateFromError = (error) => {
        // Update state so the next render will show the fallback UI
        return { hasError: true }
    }

    {
        if(state.hasError) {
            return(
        
                <div>
                  <h2>Oops, there is an error!</h2>
                  <button
                    type="button"
                    onClick={() => { hasError: false }}
                  >
                    Try again?
                  </button>
                </div>
            )
        } else {
            return children
        }
    }
}

export default ErrorBoundary