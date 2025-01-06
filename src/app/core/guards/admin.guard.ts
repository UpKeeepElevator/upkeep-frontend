import { computed, inject } from '@angular/core';
import { ActivatedRoute, CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastService } from '../services/toast.service';


export const adminGuard: CanActivateFn = (route, state) => {
  
  const userService = inject(UserService)
  const toast = inject(ToastService)
  const router = inject(Router)
  const user = computed(() => userService.user())


  if(user().role.cod_role === 1){
    return true;
  }else{
    router.navigate(['/login'])
    toast.toastError('No estas autorizado', 'bottom')
    return false
  }
};

export const adminChildGuard: CanActivateChildFn = (rotue, state) => {
  
  const userService = inject(UserService)
  const toast = inject(ToastService)
  const user = computed(() => userService.user())
  const router = inject(Router)
  
  if(user().role.cod_role === 1){
    return true;

  }else{
    router.navigate(['/login'])
    toast.toastError('No estas autorizado', 'bottom')
    return false
  }
}
