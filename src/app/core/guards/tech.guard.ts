import { computed, inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastService } from '../services/toast.service';

export const techGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService)
  const toast = inject(ToastService)
  const user = computed(() => userService.user())
  
  if(user().role.cod_role === 2){
    return true;
  
  }else{
    toast.toastError('No estas autorizado', 'bottom')
    return false    
  }
};

export const techChildGuard: CanActivateChildFn = (route, state) => {
  const userService = inject(UserService)
  const toast = inject(ToastService)
  const user = computed(() => userService.user())
  
  if(user().role.cod_role === 2){
    return true;
  
  }else{
    toast.toastError('No estas autorizado', 'bottom')
    return false    
  }
};