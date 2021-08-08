import Slot from './Slot';
import useFetch from './useFetch';

function Dashboard() {
	const { data: posts } = useFetch(
		'https://jsonplaceholder.typicode.com/posts'
	);
	console.log(posts);
	return (
		<div className="posts-list">
			<div className="posts-container">
				{posts ? (
					posts.map((post) => <Slot data={post} key={post.id} />)
				) : (
					<p>Loading..</p>
				)}
			</div>
		</div>
	);
}
export default Dashboard;
