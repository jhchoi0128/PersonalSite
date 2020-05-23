import React, { Component } from "react";

class Somestuff extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="item item-a">
          <video controls>
            <source src="/videos/project.mp4" type="video/mp4" />
          </video>
        </div>
        <section className="item item-b">
          <a className="article">
            훌륭함과 널리 알려진 정도에 대한 기준은 사람마다 다 제각각이고
            주관적이기에, 섣불리 어떤 말을 무조건 명언이라고 단정하긴 어렵다.
            2번의 의미로 쓴다면 훌륭한 말은 아니고, 널리 대중들에게 알려진
            유명한 말이라고 할 수 있다. 즉, 개소리도 사람들에게 널리 알려지면
            명언이다. 예를 들면 빵이 없으면 케이크를 먹으면 되지 같은 것이 있다.
            이런 헛소리에 가까운 경우에는 널리 알려져도 명언이라고 하기 보다는
            망언이라고 한다. 격언(格言)이라고 부르기도 하는데, 명언이 발화
            주체가 개인/집단을 모두 포괄한다면 격언은 집단으로 한정되는 경향이
            있다. 즉, 작자 미상. 또한 '금 같은 말'이라는 뜻에서 금언(金言)으로도
            부른다. 속담과도 비슷하지만 속담은 발화 주체는 물론이고 그 시점이나
            장소까지 불명이라는 것에서 차이를 보인다. 실존인물들의 널리 알려진
            문구를 찾으려면 유명 어록을 참조하기 바라며, 가상 매체의 훌륭한
            대사는 명대사라고 부르지만, 사람마다 판단하는 근거가 다르기 때문에
            이 문서에서 예시를 들지 않기로 합의된 상태다.
          </a>
        </section>
      </div>
    );
  }
}

export default Somestuff;
