// import { sum } from '@/components/math';
//
// // sum(10, 20);
//
// // describe() : 연관된 테스트 케이스를 그룹화 하는 API
// describe('math.js', () => {
//   test('10+20=30', () => {
//     const result = sum(10, 20);
//     result === 30;
//     expect(result).toBe(30);
//     expect(result).not.toBe(30);
//   });
// });

import LoginForm from '@/components/LoginForm';
import Vue from 'vue';
describe('LoginForm.vue', () => {
  test('컴포넌트가 마운팅 되면 화면에 그려져야 한다. ', () => {
    const instance = new Vue(LoginForm).$mount(); //인스턴스가 마운트 되는 것을 확인
    console.log(instance.username);
    // expect(instance).toBeTruthy();
    expect(instance.username).toBe('');
  });
});
