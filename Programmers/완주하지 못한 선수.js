// 출처 : 프로그래머스 해시 완주하지 못한 선수
// https://programmers.co.kr/learn/courses/30/lessons/42576
// 풀이 : hogumachu
// Level 1

function solution(participant, completion) {
    var index = 0;

    participant.sort();
    completion.sort();

    for (index; index < completion.length; index++) {
        if (participant[index] != completion[index]) {
            break;
        }
    }
    return participant[index];
}
