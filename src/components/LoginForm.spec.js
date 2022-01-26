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
import { shallowMount } from '@vue/test-utils';
// import Vue from 'vue';
describe('LoginForm.vue', () => {
  test('컴포넌트가 마운팅 되면 화면에 그려져야 한다. ', () => {
    // const instance = new Vue(LoginForm).$mount(); //인스턴스가 마운트 되는 것을 확인
    // console.log(instance.username);

    const wrapper = shallowMount(LoginForm); // << 위의 코드 2줄을 shallowMount로 줄일 수 있다.
    expect(wrapper.vm.username);
    // expect(instance).toBeTruthy();
    // expect(instance.username).toBe('');
  });

  test('ID는 이메일 형식이어야 한다.', () => {
    const wrapper = shallowMount(LoginForm);
    //  find()로 요소 찾기
    const idInput = wrapper.find('#username', {
      data() {
        return {
          username: ' test',
        };
      },
    });
    console.log(idInput.html());
    console.log(idInput.element.value);
    console.log(wrapper.vm.isUsernameValid);
    // wrapper의 경우 있는 경우에는 Wrapper{} 으로 출력될것이고, 없으면 에러를 뱉는다.

    const warningText = wrapper.find('.warning');
    console.log(warningText.html());
    expect(warningText.exists()).toBeTruthy(); // exists있으면 true / 없으면 false . toBetruthy true/false 확인
  });

  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const button = wrapper.find('button');
    expect(button.element.disabled).toBeTruthy();
  });
});
