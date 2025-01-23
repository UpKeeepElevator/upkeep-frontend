import { computed, inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastService } from '../services/toast.service';

export const clientGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService)
  const toast = inject(ToastService)
  const role = computed(() => userService.role())
  
  
  if(role().id_role === 3){
    return true;
  }else{
    userService.logout()
    toast.toastError('No estas autorizado', 'bottom')
    return false
  }
};

export const clientChildGuard: CanActivateChildFn = (route, state) => {
  const userService = inject(UserService)
  const toast = inject(ToastService)
  const role = computed(() => userService.role())

  
  if(role().id_role === 3){
    return true;
  
  }else{
    userService.logout()
    toast.toastError('No estas autorizado', 'bottom')
    return false    
  }
}