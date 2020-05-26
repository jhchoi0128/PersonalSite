import React, { Component } from "react";

class Somestuff extends Component {
  state = {};
  render() {
    return (
      <div id="video" className="somestuff-cus">
        <div className="item item-a">
          <video controls>
            <source src="/videos/project.mp4" type="video/mp4" />
          </video>
        </div>
        <section className="item item-b">
          <p className="article">
            훌륭함과 널리 알려진 정도에 대한 기준은 사람마다 다 제각각이고
            주관적이기에, 섣불리 어떤 말을 무조건 명언이라고 단정하긴 어렵다.
            2번의 의미로 쓴다면 훌륭한 말은 아니고, 널리 대중들에게 알려진
            유명한 말이라고 할 수 있다. 즉, 개소리도 사람들에게 널리 알려지면
            명언이다. 예를 들면 빵이 없으면 케이크를 먹으면 되지 같은 것이 있다.
          </p>
        </section>
      </div>
    );
  }
}

export default Somestuff;
