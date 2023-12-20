import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';
import { useEffect, useState } from 'react';
const LoadingSpinner = () => {
	return (
		<div className=''>
			<Loading />
		</div>
	);
};
const Main = () => {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			await new Promise((resolve) => setTimeout(resolve, 5000));
			setIsLoading(false);
		};

		fetchData();
	}, []);
	return (
		<>
			{isLoading && <LoadingSpinner />}
			{!isLoading && (
				<>
					<Navbar />
					<div className=''>
						<Outlet />
					</div>
					<Footer />
				</>
			)}
		</>
	);
};

export default Main;
