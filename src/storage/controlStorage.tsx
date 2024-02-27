
export const storageMiddleware = (store: any) => (next: any) => (action: any) => {
  const user = store.getState().auth.authName;
    
  if (action.type === 'auth/inputAuth') {    
    localStorage.setItem(action.payload, '');
  }  
  
  if (action.type === 'tasks/inputTask') {                
    const currentLSObject = localStorage.getItem(user) || '';        
    if (currentLSObject === '') {      
      const currentTaskList = [];
      currentTaskList.push(action.payload);      
      localStorage.setItem(user, JSON.stringify(currentTaskList))            
    } else {            
        const currentTaskList = JSON.parse(currentLSObject);
        currentTaskList.push(action.payload);
        localStorage.setItem(user, JSON.stringify(currentTaskList))
    }
  }  

  if (action.type === 'tasks/updateTask') {
    localStorage.setItem(user, JSON.stringify(action.payload));
  }

  if (action.type === 'tasks/fillingTasks') {
    const currentLSObject = localStorage.getItem(user) || '';        
    if (currentLSObject) {            
      action.payload = JSON.parse(currentLSObject);      
    }
  }

  next(action);
}

