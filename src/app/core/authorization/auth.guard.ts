import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthGuardData, createAuthGuard} from 'keycloak-angular';
import {inject} from '@angular/core';

const isAccessAllowed = async (
    route: ActivatedRouteSnapshot,
    _: RouterStateSnapshot,
    authData: AuthGuardData
): Promise<boolean | UrlTree> => {
    const { authenticated, grantedRoles } = authData;

    const requiredRole = route.data['role'];
    const router = inject(Router);

    if (!requiredRole) {
        console.log("missing required role")
        return false;
    }

    const hasRequiredRole = (role: string): boolean =>
        Object.values(grantedRoles.realmRoles).some((roles) => roles.includes(role));

    if (authenticated && hasRequiredRole(requiredRole)) {
        return true;
    }

    return router.parseUrl('forbidden');
};

export const canActivateAuthRole = createAuthGuard<CanActivateFn>(isAccessAllowed);
