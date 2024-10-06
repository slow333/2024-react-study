function Profile() {
  return(
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="someone"/>
  )
}

export function Gallery() {
  return(
      <article>
        <h2>대단한 과학자</h2>
        <Profile />
        <Profile />
        <Profile />
      </article>
  )
}