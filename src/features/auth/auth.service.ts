import 'reflect-metadata';
import {User} from '@/models/user.model';
import {Service} from 'typedi';

@Service()
export default class AuthService {
  login({email, password}: {email: string; password: string}): Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'abc@gmail.com' && password === 'password') {
          resolve({
            id: 1,
            email: 'abc@gmail.com',
            name: 'John Doe',
            password: 'password',
          });
        } else {
          reject('Invalid email or password');
        }
      }, 1000);
    });
  }
}
