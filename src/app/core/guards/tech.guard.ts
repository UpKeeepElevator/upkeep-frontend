import { computed, inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastService } from '../services/toast.service';

export const techGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService)
  const toast = inject(ToastService)
  const user = computed(() => userService.user())
  const router = inject(Router)

  
  if(user().role.cod_role === 2){
    return true;
  
  }else{
    router.navigate(['/login'])
    toast.toastError('No estas autorizado', 'bottom')
    return false    
  }
};

export const techChildGuard: CanActivateChildFn = (route, state) => {
  const userService = inject(UserService)
  const toast = inject(ToastService)
  const user = computed(() => userService.user())
  const router = inject(Router)

  
  if(user().role.cod_role === 2){
    return true;
  
  }else{
    router.navigate(['/login'])
    toast.toastError('No estas autorizado', 'bottom')
    return false    
  }
};