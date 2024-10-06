import {Gallery} from "../components/Gallery";

export default function ComponentSample(){
  return(
      <div className='main'>
        <h1>첫번째 component</h1>
        <p>React 애플리케이션은 컴포넌트라고 불리는 독립된 UI 조각들로 이루어집니다. React 컴포넌트는 마크업을 얹을 수 있는 JavaScript 함수입니다. 컴포넌트는 버튼과 같이 작을 수도 있고 전체 페이지와 같이 큰 경우도 있습니다. 다음의 Gallery 컴포넌트는 세 개의 Profile 컴포넌트를 렌더링하고 있습니다.</p>
        <section>
          <h2>import/export 사용하기</h2>
          <p>import/export는 javascript 기본으로 default export와 named export가 있음</p>
        <Gallery />
        </section>
      </div>
  )
}

