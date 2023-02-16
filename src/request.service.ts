import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST }) //scope injection means for each request nestjs create a new userId
export class RequestService {
  private userId: string;

  setUserId(userId: string) {
    this.userId = userId;
  }
  getUserId() {
    return this.userId;
  }
}
