
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<Customer | null>(null);

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<Customer> {
    return this.http.post<Customer>('http://localhost:8080/auth/login', { email, password }).pipe(
      tap((user: Customer) => this.currentUserSubject.next(user))
    );
  }

  logout(): void {
    this.currentUserSubject.next(null);
  }

  getCurrentUser(): Customer | null {
    return this.currentUserSubject.value;
  }
}
