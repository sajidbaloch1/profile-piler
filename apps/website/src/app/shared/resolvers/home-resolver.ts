import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class HomeResolver implements Resolve<Hero> {
  constructor(private service: HeroService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.service.getHero(route.paramMap.get('id'));
  }
}
