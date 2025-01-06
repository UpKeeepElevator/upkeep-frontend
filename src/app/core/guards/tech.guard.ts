import { computed, inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastService } from '../services/toast.service';

export const techGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService)
  const toast = inject(ToastService)
  const role = computed(() => userService.role())
  const router = inject(Router)

  
  if(role().id_role === 1 || !role().id_role){
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
  const role = computed(() => userService.role())
  const router = inject(Router)

  
  if(role().id_role === 1 || !role().id_role){
    return true;
  
  }else{
    router.navigate(['/login'])
    toast.toastError('No estas autorizado', 'bottom')
    return false    
  }
};