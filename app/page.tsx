import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text">head</h1>
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">AI Power prompts</span>
      <p className="desc text-center">AI powered app</p>
      <Feed/>
    </section>
  )
}

export default Home