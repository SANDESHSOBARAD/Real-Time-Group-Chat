import Logo from '../assets/chatapplogo.avif'
const LoginPage = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src= {Logo}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Group Chats...</h1>
      <p className="py-6">
        Please sign In to Chat with the world!
      </p>
      <button className="btn btn-primary">Google Sign In</button>
    </div>
  </div>
</div>
  )
}

export default LoginPage