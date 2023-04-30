/**
 * 1. create firebase project
 * 2. create app
 * 3. npm i firebase
 * 4. save firebase config and export default app
 * 5. Build > Authentication > get started > enable sign-in-method 
*/

/**
 * 1. sign up 
 * 2. login
 * 
  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });

    // stop observing while unmounting
    return () => {
      return unsubscribe();
    }
    
  }, [])
*/