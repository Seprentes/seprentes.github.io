import { Link } from "react-router-dom";

function IndexPage() {
	document.title = "Index Page - Özgür Ateş Fırat"

	return (
		<>
			<h1>Welcome to my web site</h1>
			<p>Hello. I'm Özgür Ateş Fırat. Please don't forget to check out <Link to="/about">About Me</Link>.</p>
            <p><a href="https://github.com/Seprentes" target="_blank">My Github Account</a> <a href="https://gitlab.com/Seprentes" target="_blank">My Gitlab Account</a></p>
		</>
	)
}

export default IndexPage;
