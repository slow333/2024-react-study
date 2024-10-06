import ProfileProps from "../components/ProfileProps";

export default function PropsInjection(){
  return(
      <div className='main'>
        <h1>컴포넌트에 props 전달하기</h1>
        <p>React 컴포넌트는 props를 이용해 서로 통신합니다. 모든 부모 컴포넌트는 props를 줌으로써 몇몇의 정보를 자식 컴포넌트에게 전달할 수 있습니다. props는 HTML 어트리뷰트를 생각나게 할 수도 있지만, 객체, 배열, 함수를 포함한 모든 JavaScript 값을 전달할 수 있습니다.</p>
        <p>child function에서의 props는 중괄호로 감싸서 받아야 함
        <code>function funcName(&#123;propsName &#125;) &#123; ...  &#125;</code></p>
        <p>사용하기 위해서는 <code>&lt; ComponentName propsName=&#123;value&#125; /&gt;</code>로 받아야함</p>
        <ProfileProps />
      </div>
  )
}