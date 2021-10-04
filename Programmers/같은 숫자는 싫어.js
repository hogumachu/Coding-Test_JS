// 출처 : 프로그래머스 연습문제 같은 숫자는 싫어
// https://programmers.co.kr/learn/courses/30/lessons/12906
// 풀이 : hogumachu
// Level 1
/// slice 로 진행했는데 효율성 테스트에서 시간 초과가 나서 단순하게 구현함

function solution(arr) {
    if (arr.length >= 1) {
        let previousValue = arr[0];
        let newArr = [previousValue];

        for (let i = 1; i < arr.length; i++) {
            if (previousValue != arr[i]) {
                newArr.push(arr[i]);
            }

            previousValue = arr[i];
        }

        arr = newArr;
    }

    return arr;
}
