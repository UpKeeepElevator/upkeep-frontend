import { computed, inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastService } from '../services/toast.service';

export const techGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService)
  const toast = inject(ToastService)
  const role = computed(() => userService.role())

  
  if(role().id_role === 1){
    return true;
  
  }else{
    userService.logout()
    toast.toastError('No estas autorizado', 'bottom')
    return false    
  }
};

export const techChildGuard: CanActivateChildFn = (route, state) => {
  const userService = inject(UserService)
  const toast = inject(ToastService)
  const role = computed(() => userService.role())

  
  if(role().id_role === 1){
    return true;
  
  }else{
    userService.logout()
    toast.toastError('No estas autorizado', 'bottom')
    return false    
  }
};