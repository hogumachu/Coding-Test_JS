// 출처 : 프로그래머스 위클리 챌린지 9주차 전력망을 둘로 나누기
// https://programmers.co.kr/learn/courses/30/lessons/86971
// 풀이 : hogumachu
// Level 2

function solution(n, wires) {
    let answer = Infinity;
    let nodes = [];

    for (let wire of wires) {
        if (nodes[wire[0]] == null) {
            nodes[wire[0]] = [wire[1]];
        } else {
            nodes[wire[0]].push(wire[1]);
        }
        if (nodes[wire[1]] == null) {
            nodes[wire[1]] = [wire[0]];
        } else {
            nodes[wire[1]].push(wire[0]);
        }
    }

    let visited = Array(n + 1).fill(false);
    let count = 0;


    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < nodes[i].length; j++) {
            visited = Array(n + 1).fill(false);
            count = 0;
            visited[i] = true;
            find(nodes[i][j]);
            answer = Math.min(Math.abs(count * 2 - n), answer);
        }
    }

    function find(next) {
        if (!visited[next]) {
            count += 1;
            visited[next] = true;
        } else {
            return;
        }

        for (let k = 0; k < nodes[next].length; k++) {
            if (!visited[nodes[next][k]]) {
                find(nodes[next][k]);
            }
        }
    }

    return answer;
}
